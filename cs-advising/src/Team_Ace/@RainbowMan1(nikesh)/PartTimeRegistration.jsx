import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { useForm } from "react-hook-form";
import {useState} from "react";

export function PartTimeRegistration() {
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
    <header>
    <h1>Part Time Enrollment Certification Form</h1>
    <p>Students with F-1 and J-1 immigration status are required by U.S. immigration regulations to maintain full-time registration status for the duration of their academic programs. Full-time status is defined as registration for a minimum of 12 credit hours for undergraduates and 9 credit hours for graduate students. However, these regulations allow students to register for less than full-time credit hours under limited circumstances, listed below. Your Dean or academic Advisor must recommend and approve the appropriate reason. Return the completed form to the Office of International Student Services so that the form may be processed by USCIS.</p>
  </header>
    <form onSubmit={handleSubmit(onSubmit)}>
      
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
      <input type="submit" />
    </form>
    <Footer />
    </>
  );
}
