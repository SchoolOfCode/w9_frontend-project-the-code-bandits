import Modal from "react-bootstrap/Modal";
import UploadForm from "./UploadForm";

// showForm state and handleClose function passed from App component

const UploadFormPopUp = ({ showForm, handleClose }) => {
  return (
    <>
      <Modal backdrop="static" show={showForm} onHide={handleClose}>
        <UploadForm handleClose={handleClose} />{" "}
      </Modal>
    </>
  );
};

export default UploadFormPopUp;
