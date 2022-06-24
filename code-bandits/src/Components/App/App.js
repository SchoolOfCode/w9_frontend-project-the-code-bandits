import "../../index.css";
import UploadForm from "../UploadForm/UploadForm";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import fetchFromAPI from "../../services/fetchFromAPI";
import DisplayContainer from "../DisplayContainer/DisplayContainer";
import FilterSection from "../FilterSection/FilterSection";

function App() {
  const [resourceList, setResourceList] = useState([]);

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
      <Header />
      <UploadForm />
      {/* <FilterContainer /> */}
      <FilterSection />
      <DisplayContainer resourceList={resourceList} />
    </div>
  );
}

export default App;
