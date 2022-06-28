import "../../index.css";

import { useEffect, useState } from "react";

import fetchFromAPI from "../../services/fetchFromAPI.js";

// Components
import UploadFormPopUp from "../UploadForm/UploadFormPopUp";
import Header from "../Header/Header";
import DisplayContainer from "../DisplayContainer/DisplayContainer";
import FilterSection from "../FilterSection/FilterSection";

// Uses fetch from database on pages initial load to update resourceList state
// Updates showForm state to true or false (this shows the UploadFormPopUp component)

function App() {
  const [resourceList, setResourceList] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const handleClose = () => setShowForm(false);
  const handleShow = () => setShowForm(true);

  // fetchFromAPI comes from services folder
  const getResources = async () => {
    try {
      const data = await fetchFromAPI("http://localhost:3001/resources");
      setResourceList(data.payload);
      console.log(resourceList);
    } catch (error) {
      console.error(error.message);
    }
  };

  // fetch on initial load
  useEffect(() => {
    getResources();
  }, []);

  // State to handle filtered resources
  const [filteredList, setFilteredList] = useState(resourceList);
  console.log(filteredList);

  // Immediate re-render of filteredList (displayed resources) on update
  useEffect(() => {
    setFilteredList(resourceList);
  }, [resourceList]);

  // Returns resources that match object properties
  function handleFilter(obj) {
    const filtered = resourceList.filter((item) => {
      if (!obj.article && !obj.docs && !obj.video) {
        return item;
      } else {
        for (let prop in obj) {
          if (item.content_type === prop && obj[prop]) {
            return item;
          }
        }
      }
    });
    console.log("filtered", filtered);
    setFilteredList(filtered);

    console.log(filteredList);
  }

  return (
    <div className="App">
      <Header handleShow={handleShow} />
      <div className="design-div"></div>
      <UploadFormPopUp showForm={showForm} handleClose={handleClose} />
      <FilterSection ischecked={handleFilter} />
      <DisplayContainer resourceList={filteredList} />
    </div>
  );
}

export default App;
