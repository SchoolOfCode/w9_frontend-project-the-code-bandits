import "../../index.css";
import UploadForm from "../UploadForm/UploadForm";
import UploadFormPopUp from "../UploadForm/UploadFormPopUp";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import fetchFromAPI from "../../services/fetchFromAPI";
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
  //const [checked, setIsChecked] = useState(false);

  function handleFilter(obj) {
    console.log(obj);
    const filtered = resourceList.filter((item) => {
      if (!obj.title && !obj.docs && !obj.video) {
        console.log("hello", item);
        return item;
      } else {
        for (let prop in obj) {
          console.log("item", item.content_type, prop);

          if (item.content_type === prop && obj[prop]) {
            console.log("got in here");
            return item;
          }
        }
      }
    });
    console.log("filtered", filtered);
    setFilteredList(filtered);

    // if (obj.article && obj.documentation && obj.video) {
    //   setFilteredList(resourceList);
    // }
    // if (obj.article && obj.documentation && !obj.video) {
    //   console.log("true");
    //   let newFilteredList = resourceList.filter((item) => {
    //     return item.content_type === "article" || item.content_type === "docs";
    //   });
    //   console.log(newFilteredList);
    //   setFilteredList(newFilteredList);
    // } else if (obj.article && obj.video && !obj.documentation) {
    //   let newFilteredList = resourceList.filter((item) => {
    //     return item.content_type === "article" || item.content_type === "video";
    //   });
    //   setFilteredList(newFilteredList);
    // } else if (!(obj.article && obj.documentation && obj.video)) {
    //   setFilteredList(resourceList);
    // }

    console.log(filteredList);
    //let newFilteredList = resourceList.filter;
    // if (obj.article) {
    //   resourceList.map((item) => {
    //     if (item.content_type === "article") {
    //       setFilteredList([...filteredList, item]);
    //     }
    //   });
    // }
    /* if (obj.video) {
      resourceList.map((item) => {
        if (item.content_type === "video") {
          //newFilteredList = [...filteredList, item];
          setFilteredList([...filteredList, item]);
        }
        return filteredList;
      });
    }
    if (obj.documentation) {
      resourceList.map((item) => {
        if (item.content_type === "docs") {
          //newFilteredList = [...filteredList, item];
          setFilteredList([...filteredList, item]);
        }
        return filteredList;
      });
    }*/

    //console.log(filteredList);
  }

  console.log(filteredList);
  //setResourceList(filteredList);

  return (
    <div className="App">

      <Header handleShow={handleShow} />
      <div className="design-div"></div>
     <UploadFormPopUp
        showForm={showForm}
        handleClose={handleClose}
        handleShow={handleShow}
      />
      <FilterSection ischecked={handleFilter} />
      <DisplayContainer resourceList={filteredList} />

    </div>
  );
}

export default App;
