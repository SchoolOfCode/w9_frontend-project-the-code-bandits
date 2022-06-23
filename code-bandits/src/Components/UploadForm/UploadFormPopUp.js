import Modal from "react-bootstrap/Modal";
import UploadForm from "./UploadForm";

const UploadFormPopUp = ({ showForm, handleShow, handleClose }) => {
  return (
    <>
      <Modal show={showForm} onHide={handleClose}>
        <UploadForm handleClose={handleClose} />{" "}
      </Modal>
    </>
  );
};

export default UploadFormPopUp;
