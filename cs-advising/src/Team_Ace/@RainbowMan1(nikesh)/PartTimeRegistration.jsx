import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { PDFDocument } from 'pdf-lib';
import { useForm } from "react-hook-form";
import {useState, useEffect} from "react";

function saveByteArray(reportName, byte) {
  var blob = new Blob([byte], {type: "application/pdf"});
  var link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  var fileName = reportName;
  link.download = fileName;
  link.click();
};

function PDFLink(){
  const [pdfBytes, setpdfBytes] = useState();

  useEffect(() => {
    // React advises to declare the async function directly inside useEffect
    async function getpdfBytes() {
      const map = {
        text_1ejw: "Family Name",
        text_2hego: "Given Name",
        text_3zje: "Street Address",
        text_4sxkw: "City, State and Zip Code",
        text_5kxbj: "Telephone #",
        text_6cjkg: "SEVIS #",
        text_7grrr: "Degree Major",
        text_8xixc: "Student ID #",
        text_9gjne: "Immigration Status",
        text_10mfyx: "Expiration Date",
        text_11wvm: "Semester Requested",
        text_12zxcn: "Spring Year",
        text_14sfhy: "Other Year",
        text_13jlfr: "Fall Year",
        checkbox_22cumk: "BA/BS",
        checkbox_23glgz: "MA/MS",
        checkbox_24rjrh: "PhD",
        checkbox_25wlei: "CERT.",
      };

      const invert_map = obj => Object.fromEntries(Object.entries(obj).map(a => a.reverse()));

      const inverse_map = invert_map(map);
      
    //   const formUrl = 'https://downloads1.sejda.com/api/tasks/KBQXLOKR-202210171752/download/Part%20time%20enrollment%20certification%20form.pdf?s=web-ux2qHzPoPyIdNUv1GGP%3DunUnioUBUwGkz%3DDs%3D&d=true&_s=21'
    //   const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
      
    //   const pdfDoc = await PDFDocument.load(formPdfBytes)
    //   const form = pdfDoc.getForm()
    
    //   const pdfBytes = await pdfDoc.save()
    //   setpdfBytes(pdfBytes);
    }

    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual
    if (!pdfBytes) {
      getpdfBytes();
    }
  }, []);
  //saveByteArray("form", pdfBytes);
  return <p>here</p>

}
export function PartTimeRegistration() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
      <>
      <Header />
    <header>
    <h1>Part Time Enrollment Certification Form</h1>
    <p>Students with F-1 and J-1 immigration status are required by U.S. immigration regulations to maintain full-time registration status for the duration of their academic programs. Full-time status is defined as registration for a minimum of 12 credit hours for undergraduates and 9 credit hours for graduate students. However, these regulations allow students to register for less than full-time credit hours under limited circumstances, listed below. Your Dean or academic Advisor must recommend and approve the appropriate reason. Return the completed form to the Office of International Student Services so that the form may be processed by USCIS.</p>
  </header>
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      
      <input {...register("familyName")} placeholder="Family Name" />
      <input {...register("givenName")} placeholder="Given Name" />
      <input {...register("streetAddress")} placeholder="Street Address" />
      <input {...register("cityStateZip")} placeholder="City, State and Zip Code" />
      <input {...register("telephone")} placeholder="Telephone #" />
      <input {...register("sevis")} placeholder="SEVIS #" />
      <input {...register("degreeMajor")} placeholder="Degree Major" />
      <input {...register("studentID")} placeholder="Student ID #" />
      <input {...register("immigrationStatus")} placeholder="Immigration Status"/>
      <input {...register("expirationDate")} placeholder="Expiration Date" />
      <input {...register("semesterRequested")} placeholder="Semester Requested" />
      <input {...register("yearRequested")} placeholder="Year Requested" />
      <select {...register("level", { required: true })}>
        <option value="">Select...</option>
        <option value="BA/BS">BA/BS</option>
        <option value="MA/MS">MA/MS</option>
        <option value="PhD">PhD</option>
        <option value="CERT.">CERT.</option>
      </select>
      <p>{data}</p>
      <input type="submit" />
    </form>
    <Footer />
    </>
  );
}
