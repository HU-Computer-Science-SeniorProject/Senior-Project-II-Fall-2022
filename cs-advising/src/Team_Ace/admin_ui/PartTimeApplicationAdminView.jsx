import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import {useState} from "react";
import "./PartTimeApplicationAdminView.css";
import Modal from 'react-modal';
import pdf from "./parttimeregistration-filled.pdf";

const students = [
  {
    id: "@02940867",
    name: 'Nikesh Subedi',
  },
  {
    id: "@02940337",
    name: 'John Doe',
  },
  {
    id: "@02939491",
    name: 'Jane Smith',
  },
  {
    id: "@02941523",
    name: 'Bob Johnson',
  },
];

const PdfModal = ({ show, onHide }) => {
  return (
    <Modal isOpen={show} onRequestClose={onHide}>
      <h2>
       Part Time Registration Form
        </h2>
      <div className="modal-body">
        <embed src={pdf} type="application/pdf" />
      </div>
      <div className="modal-footer">
      <button className="sign-button" onClick={onHide}>
          Sign and Send
        </button>
        <button className="close-button" onClick={onHide}>
          Close
        </button>
      </div>
    </Modal>
  );
};


const TableRow = ({ student, openModal }) => (
  <tr>
    <td>{student.name}</td>
    <td>{student.id}</td>
    <td>
      <button onClick={()=>openModal()}>View PDF</button>
    </td>
  </tr>
);



const TableView = ({ students }) => {
  // State to track whether the modal is open
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalIsOpen(true);
  }

  // Function to close the modal
  const closeModal = () => {
    setModalIsOpen(false);
  }

  return (
    <table className="table">
      <thead>
        <tr className="table-header">
          <th className="table-cell">Name</th>
          <th className="table-cell">ID</th>
          <th className="table-cell">Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <TableRow student={student} key={student.id} openModal={openModal} />
        ))}
      </tbody>
      <PdfModal show={modalIsOpen} onHide={closeModal} />
    </table>
  );
}

export function PartTimeApplicationAdminViewHome() {
  return (
    <div className="gh">
      <Header showExtra={false} headerLabel="CS Advising Admin Panel" />
      <div className="gh_body">
        <div className="main_gh_title">Part Time Applications</div>
        <TableView students={students} />
      </div>
      <Footer />
    </div>
  );
}
