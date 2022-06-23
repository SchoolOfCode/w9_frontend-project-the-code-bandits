import { useState } from "react";

//set initial state as object with content-types set as false
//onChange of checkbox, set properties to value of isChecked ie true
const FilterSection = () => {
  const [typeChecked, setTypeChecked] = useState({
    article: false,
    video: false,
    documentation: false,
  });

  function handleChange(e) {
    const isChecked = e.target.checked;
    const value = e.target.value;
    let newObj = {
      ...typeChecked,
      [value]: isChecked,
    };
    setTypeChecked(newObj);

    console.log(typeChecked);
  }

  return (
    <fieldset class="filter-content">
      <legend class="filter-content-subheading">Content type</legend>

      <div className="content-item">
        <input
          onChange={handleChange}
          type="checkbox"
          name="content-type"
          id="content-documentation"
          value="documentation"
        />
        <label className="filter-content-list-item" for="content-documentation">
          Documentation
        </label>
      </div>

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
/*
Initialise a state
typeChecked, setTypedChecked = useState({
              article: false
              video: false
              documentation: false
            })
input onChange=function to update the state object
*/ // import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
