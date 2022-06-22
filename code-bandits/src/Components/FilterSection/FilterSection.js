import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const FilterSection = () => {
    return ( 
      <fieldset class="filter-content">
          <legend class="filter-content-subheading">Content type</legend>
          {/* map through array of prop items (possibly need a method for dealing with objects)
          for each unique property we will create a FilterCheckbox instant
          
          Find a way to store the user choice

            initial state {
              article: false
              video: false
              documentation: false
            }

            if all props are false then display all (no filter)
            if a prop is true then this will be read by DisplayContainer

            Pira - DisplayContainer is always rendering an array of resources
            onChange of the FilterCheckbox state. This will create a new mutable array (not changing original resource array) that is then rendered by DisplayContainer

            User stories

            User must be able to filter by BOTH content and topic

            So maybe we need two states to make the design clearer.
            These states will be in the FilterSection component.



          change state variable to reflect user filter choices

          present 
          
          */
          }
          <FilterCheckbox />

      </fieldset>
     );
}
 
export default FilterSection;