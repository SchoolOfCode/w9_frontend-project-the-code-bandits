import { Button } from "react-bootstrap";
const Header = ({ handleShow }) => {
  return (
    <header className="header">
      <div className="header-content-wrapper">
        <h1 className="header-title">Resource manager</h1>
        <Button type="header-button" onClick={handleShow}>
          Add resource
        </Button>
        <div className="header-search-resources">
          <p className="header-search-resources-magnifying-glass">🔎</p>
          <input
            type="text"
            className="header-search-resources-input"
            placeholder="search resources"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
