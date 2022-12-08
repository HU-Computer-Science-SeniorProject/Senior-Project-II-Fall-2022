import { Header } from "../../Team_Ace/components/Header";
import { Footer } from "../../Team_Ace/components/Footer";
import { useForm } from "react-hook-form";
import "./error-res.css";

export function ErrorForm() {

  const { register, handleSubmit } = useForm();


  const onSubmit = async (data) => {
    console.log(data);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    const response = await fetch('http://127.0.0.1:5000/parttimeregistrationstudent', requestOptions);
    const jsonData = await response.json();

    console.log(jsonData);
};

  return (
      <>
      <Header />
      <header className="mh">
        <h1>Registration Error Removal Form</h1>
        <p>
          Student experiencing errors while trying to register for classes can fill 
          out this form. This will email whatever you input into the 
          <strong> Approver Email </strong> field.
        </p>
      </header>
    <form className="pt-form" onSubmit={handleSubmit(onSubmit)}>
      
      <input {...register("studentID")} placeholder="Student ID #" />
      <input {...register("email")} placeholder="Email" />
      <input {...register("name")} placeholder="Last  First  MI" />
      <input {...register("telephone")} placeholder="Telephone" />
      <input {...register("academicYear")} placeholder="Academic Year" />
      <select {...register("semester", { required: true })}>
        <option value="Semester" selected disabled hidden>Semester</option>
        <option value="Fall">Fall</option>
        <option value="Spring">Spring</option>
        <option value="Summer">Summer</option>
      </select>
      <select {...register("classification", { required: true })}>
        <option value="Classification" selected disabled hidden>Classification</option>
        <option value="Freshman">Freshman</option>
        <option value="Sophomore">Sophomore</option>
        <option value="Junior">Junior</option>
        <option value="Senior">Senior</option>
      </select>
      <input {...register("studentSignature")} placeholder="Student Signature" />
      <input {...register("date")} placeholder="Date" />
      <select {...register("registrationErrorType", { required: true })}>
          <option value="Error Type" selected disabled hidden>Registration Error Type</option>
          <option value="Time Conflict">Time Conflict</option>
          <option value="Prerequisite/Co-requisite/Test Score">Prerequisite/Co-requisite/Test Score</option>
          <option value="other">Other</option>
        </select>
        <input {...register("other")} placeholder="State Other" />
        <input {...register("crn")} placeholder="CRN" />
        <input {...register("courseTitle")} placeholder="Course Title" />
        <input {...register("approverEmail")} placeholder="Approver Email" />
        <select {...register("checkOne", { required: true })}>
          <option value="selectOneDisabled" selected disabled hidden>Select</option>
          <option value="instructor">Instructor</option>
          <option value="advisorChair">Advisor/Chair</option>
        </select>
        <input {...register("date")} placeholder="Date" />
      <input type="submit" />
      
    </form>
    <Footer />
    </>
  );
}
