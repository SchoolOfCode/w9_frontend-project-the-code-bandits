import "../../index.css";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import fetchFromAPI from "../../services/fetchFromAPI";

function App() {
  const [resourceList, setResourceList] = useState([]);

  const getResources = async () => {
    try {
      const data = fetchFromAPI("http://localhost:3001/resources");
      setResourceList(data);
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
    </div>
  );
}

export default App;
