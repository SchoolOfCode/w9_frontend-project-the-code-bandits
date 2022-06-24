import { useState } from "react";

//set initial state as object with content-types set as false
//onChange of checkbox, set properties to value of isChecked ie true
const FilterSection = ({ ischecked }) => {
  const [typeChecked, setTypeChecked] = useState({
    article: false,
    video: false,
    docs: false,
  });

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
<<<<<<< HEAD

const FilterSection({resourceList}) => resource state is available

map through resource list checking whether the typeChecked properties are equal to content_type property of resourceList item.

If true add item to new array ie. const filteredList

We have a filtedList array that contains all resources that have been checked. i.e documentation.

We could work with useEffect() with resourceList as it's state dependency. Every time resourceList 

=======
Initialise a state
typeChecked, setTypedChecked = useState({
              article: false
              video: false
              documentation: false
            })
input onChange=function to update the state object
*/

/*
const FilterSection({resourceList}) => resource state is available
map through resource list checking whether the typeChecked properties are equal to content_type property of resourceList item.
If true add item to new array ie. const filteredList
We have a filtedList array that contains all resources that have been checked. i.e documentation.
We could work with useEffect() with resourceList as it's state dependency. Every time resourceList
>>>>>>> c09af22d87a48ebd5809582d7eb9d5536fbc8e34
*/
