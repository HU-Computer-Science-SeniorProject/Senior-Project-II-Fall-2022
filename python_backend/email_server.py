from flask import Flask, request, jsonify, make_response
from flask_mail import Mail, Message
import json
import os
from PyPDF2 import PdfReader, PdfWriter
from PyPDF2.generic import BooleanObject, NameObject, IndirectObject
from flask_cors import CORS
import tempfile

app = Flask("advising_server") # pick the name
app.config.update(dict(
    DEBUG = True,
    MAIL_SERVER = 'smtp.gmail.com',
    MAIL_PORT = 587,
    MAIL_USE_TLS = True,
    MAIL_USE_SSL = False,
    MAIL_USERNAME = os.environ["MAIL_USERNAME"],
    MAIL_PASSWORD = os.environ["MAIL_PASSWORD"],
))
mail = Mail(app)
CORS(app)

map = {
    "Family Name": "text_1ejw",
    "Given Name": "text_2hego",
    "Street Address": "text_3zje",
    "City, State and Zip Code" : "text_4sxkw",
    "Telephone #": "text_5kxbj",
    "SEVIS #": "text_6cjkg",
    "Degree Major": "text_7grrr",
    "Student ID #": "text_8xixc",
    "Immigration Status": "text_9gjne",
    "Expiration Date": "text_10mfyx",
    "Semester Requested": "text_11wvm",
    "Spring Year": "text_12zxcn",
    "Other Year": "text_14sfhy",
    "Fall Year": "text_13jlfr",
    "BA/BS": "checkbox_22cumk",
    "MA/MS": "checkbox_23glgz",
    "PhD": "checkbox_24rjrh",
    "CERT.": "checkbox_25wlei",
    }

def send_email(recipients, subject, body, attachment=None):
    msg = Message(subject, sender = app.config['MAIL_USERNAME'], recipients = recipients)
    msg.body = body
    if attachment:
        with open(attachment, 'rb') as fp:
            msg.attach("parttimeregistration.pdf", "application/pdf", fp.read())
    mail.send(msg)

@app.route('/parttimeregistrationstudent', methods=['POST'])
def send_parttime_registration_email():
    record = json.loads(request.data)
    fam_name = record["familyName"]
    name = record["givenName"]
    street = record["streetAddress"]
    city_state_zip = record["cityStateZip"]
    phone = record["telephone"]
    sevis = record["sevis"]
    degree = record["degreeMajor"]
    studentid = record["studentID"]
    immigration = record["immigrationStatus"]
    expiration = record["expirationDate"]
    semester = record["semesterRequested"]
    year = record["yearRequested"]
    level = record["level"]

    update_pdf(fam_name, name, street, city_state_zip, phone, sevis, degree, studentid, immigration, expiration, semester, year, level)

    response = make_response(jsonify({"message": "success"}), 200)
    return response

def set_need_appearances_writer(writer):
    # See 12.7.2 and 7.7.2 for more information: http://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/PDF32000_2008.pdf
    try:
        catalog = writer._root_object
        # get the AcroForm tree
        if "/AcroForm" not in catalog:
            writer._root_object.update({
                NameObject("/AcroForm"): IndirectObject(len(writer._objects), 0, writer)
            })

        need_appearances = NameObject("/NeedAppearances")
        writer._root_object["/AcroForm"][need_appearances] = BooleanObject(True)
        # del writer._root_object["/AcroForm"]['NeedAppearances']
        return writer

    except Exception as e:
        print('set_need_appearances_writer() catch : ', repr(e))
        return writer

def update_pdf(fam_name, name, street, city_state_zip, phone, sevis, degree, studentid, immigration, expiration, semester, year, level):

    reader = PdfReader("part_time_enrollment_certification_form.pdf")
    writer = PdfWriter()
    set_need_appearances_writer(writer)

    page = reader.pages[0]
    fields = reader.get_fields()
    print(fields)
    writer.add_page(page)

    spring = ""
    other = ""
    fall = ""

    if semester.lower() == "fall":
        fall = year[-2:]
    elif semester.lower() == "spring":
        spring = year[-2:]
    else:
        other = year

    data = {
        map["Family Name"]: fam_name,
        map["Given Name"]: name,
        map["Street Address"]: street,
        map["City, State and Zip Code"]: city_state_zip,
        map["Telephone #"]: phone,
        map["SEVIS #"]: sevis,
        map["Degree Major"]: degree,
        map["Student ID #"]: studentid,
        map["Immigration Status"]: immigration,
        map["Expiration Date"]: expiration,
        map["Semester Requested"]: semester,
        map["Spring Year"]: spring,
        map["Other Year"]: other,
        map["Fall Year"]: fall,
    }
    print(data)

    writer.update_page_form_field_values(
        writer.pages[0], data
    )   

    pdf = tempfile.NamedTemporaryFile()
    with open(pdf.name, 'wb') as f:
        writer.write(f)
    send_email(["nikeshsubedi2@gmail.com"], "test", "test", pdf.name)
    pdf.close()

if __name__ == '__main__':
    app.run(debug = True)