import { useState } from "react";

// isChecked being passed down from App.js
// set initial state as object with content-types set as false
// onChange of checkbox, set properties to value of isChecked ie true

const FilterSection = ({ ischecked }) => {
  const [typeChecked, setTypeChecked] = useState({
    article: false,
    video: false,
    docs: false,
  });

// handleChange stores checkbox booleans and updates typeChecked state
  function handleChange(e) {
    const isChecked = e.target.checked;
    const value = e.target.value;
    let newObj = {
      ...typeChecked,
      [value]: isChecked,
    };
    setTypeChecked(newObj);
    ischecked(newObj);
    console.log(typeChecked);
    console.log(newObj);
  }

  return (
    <fieldset class="filter-content">
      <legend class="filter-content-subheading">Content type</legend>

      {/* checkbox for docs */}
      <div className="content-item">
        <input
          onChange={handleChange}
          type="checkbox"
          name="content-type"
          id="content-documentation"
          value="docs"
        />
        <label className="filter-content-list-item" for="content-documentation">
          Documentation
        </label>
      </div>
      {/* checkbox for article */}
      <div className="content-item">
        <input
          onChange={handleChange}
          type="checkbox"
          name="content-type"
          id="content-article"
          value="article"
        />
        <label className="filter-content-list-item" for="content-article">
          Article
        </label>
      </div>
      {/* checkbox for video */}
      <div className="content-item">
        <input
          onChange={handleChange}
          type="checkbox"
          name="content-type"
          id="content-video"
          value="video"
        />
        <label className="filter-content-list-item" for="content-video">
          Video
        </label>
      </div>
    </fieldset>
  );
};
export default FilterSection;