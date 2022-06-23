import "../../index.css";
import UploadForm from "../UploadForm/UploadForm";
import UploadFormPopUp from "../UploadForm/UploadFormPopUp";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import fetchFromAPI from "../../services/fetchFromAPI";
import DisplayContainer from "../DisplayContainer/DisplayContainer";

function App() {
  const [resourceList, setResourceList] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleClose = () => setShowForm(false);
  const handleShow = () => setShowForm(true);
  const getResources = async () => {
    try {
      const data = await fetchFromAPI("http://localhost:3001/resources");
      setResourceList(data.payload);
      console.log(resourceList);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getResources();
  }, []);

  return (
    <div className="App">
      <Header handleShow={handleShow} />
      <div className="design-div"></div>
      <UploadFormPopUp
        showForm={showForm}
        handleClose={handleClose}
        handleShow={handleShow}
      />
      <DisplayContainer resourceList={resourceList} />
    </div>
  );
}

export default App;
