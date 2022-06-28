// import everything we need
// create UploadForm component

// JSX
// text input with article heading label
// text input for url
// dropdown for content_type
// checkbox for topics
// submit button

// States and functions
// state is form values
// update state with statefunction with onchange (e.target.value)
// createResource function
// on Submit = async function (e)
// try and catch err handling
// fetch method with url , request obj with
// method : post , Headers: something , body : state

import { useState } from "react";

const UploadForm = ({ handleClose }) => {
  const [resourceValues, setResourceValues] = useState({
    title: "",
    url: "",
    content_type: "",
    topic: "",
  });

  /* handle change function to update state of multiple inputs with input name*/

  function handleChange(e) {
    const value = e.target.value;
    setResourceValues({
      ...resourceValues,
      [e.target.name]: value,
    });
  }
  console.log(resourceValues);
  /* handle submit function to POST form data to database via API*/

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const body = resourceValues;
      const response = await fetch("http://localhost:3001/resources", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      setResourceValues({
        title: "",
        url: "",
        content_type: "",
        topic: "",
      });

      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className="upload-form-wrapper">
      <form onSubmit={handleSubmit} className="upload-form-main">
        {/* Title input box  */}
        <label>
          Title
          <input
            type="text"
            className="title-input"
            name="title"
            value={resourceValues.title}
            onChange={handleChange}
          />
        </label>
        {/* ===================== */}

        {/* URL input box  */}
        <label>
          URL
          <input
            type="text"
            className="url-input"
            name="url"
            value={resourceValues.url}
            onChange={handleChange}
          />
        </label>
        {/* ===================== */}

        {/* Content type dropdown */}
        <label>
          Select Content Type
          <select
            className="content-type-dropdown"
            name="content_type"
            value={resourceValues.content_type}
            onChange={handleChange}
          >
            <option value="">--Please Select Value--</option>
            <option value="video">Video</option>
            <option value="article">Article</option>
            <option value="docs">Docs</option>
          </select>
        </label>
        {/* ===================== */}

        {/* Topic dropdown  */}
        <label>
          Select Topic
          <select
            className="topic-dropdown"
            name="topic"
            value={resourceValues.topic}
            onChange={handleChange}
          >
            <option value="">--Please Select Value--</option>
            <option value="javascript">Javascript</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
          </select>
        </label>
        {/* ===================== */}

        {/* Submit Button  */}
        <input
          className="submit-form-button"
          type="submit"
          value="Submit Resource"
        />
        {/* ===================== */}
      </form>
      <button onClick={handleClose} className="close-form-button">
        Close Me
      </button>
    </div>
  );
};

export default UploadForm;
