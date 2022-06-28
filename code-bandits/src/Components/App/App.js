import "../../index.css";

import { useEffect, useState } from "react";

import fetchFromAPI from "../../services/fetchFromAPI";

import UploadFormPopUp from "../UploadForm/UploadFormPopUp";
import Header from "../Header/Header";
import DisplayContainer from "../DisplayContainer/DisplayContainer";
import FilterSection from "../FilterSection/FilterSection";

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

  //function that will take an object (typeChecked) that will map through resourceList and check value of content_type and compare to typeChecked object if true
  //forIn loop to check properties of an object

  //check typeChecked object for any property: true
  //take the name of that property store in a variable as a string
  //if that variable string === value of content_type then push to filteredList
  //then update state of resourcesList to filteredList

  /*{
    article: true,
    video: false,
    documentation: false,
  }*/

  const [filteredList, setFilteredList] = useState(resourceList);
  console.log(filteredList);

  useEffect(() => {
    setFilteredList(resourceList);
  }, [resourceList]);

  function handleFilter(obj) {
    console.log(obj);
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
