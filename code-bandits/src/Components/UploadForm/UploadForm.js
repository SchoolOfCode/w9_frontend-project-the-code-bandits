// import everything we need
// create functional component
// Create Form
// text input with article heading label
// text input for url

// dropdown for content_type
// checkbox for topics
// submit button

// state is form values
// update state with statefunction with onchange (e.target.value)
// createResource function
// on Submit = async function (e)
// try and catch err handling
// fetch method with url , request obj with
// method : post , Headers: something , body : state

import { useState } from "react";

const UploadForm = () => {
  const [resourceValues, setResourceValues] = React.useState({
    title: "",
    url: "",
    content_type: "",
    topic: "",
  });

  return (
    <form>
      <label>
        Title
        <input
          type="text"
          className="title-input"
          value={resourceValues.title}
          onChange={handleChange}
        />
      </label>
      <label>
        URL
        <input
          type="text"
          className="url-input"
          value={resourceValues.url}
          onChange={handleChange}
        />
      </label>
      <label>
        Select Content Type
        <select
          className="content-type-dropdown"
          value={resourceValues.title}
          onChange={handleChange}
        >
          <option value="video">Video</option>
          <option value=""></option>
        </select>
      </label>
      <label>
        Title
        <input
          type="text"
          className="title-input"
          value={resourceValues.title}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default UploadForm;
