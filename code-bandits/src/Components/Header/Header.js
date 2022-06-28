import { Button } from "react-bootstrap";

// handleShow function passed down from App component
// is called onClick of Button
// shows UploadFormPopUp component

const Header = ({ handleShow }) => {
  return (
    <header className="header">
      <div className="header-content-wrapper">
        <h1 className="header-title">Resource manager</h1>
        <Button className="header-add-resource-button" onClick={handleShow}>
          Add resource
        </Button>
        <div className="header-search-resources"></div>
      </div>
    </header>
  );
};

export default Header;
