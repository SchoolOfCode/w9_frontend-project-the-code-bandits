const FilterCheckbox = () => {
    return ( 
        <div>
          <div class="content-item">
            <input type="checkbox" name="content" id="content-documentation" />
            <label class="filter-content-list-item" for="content-documentation">Documentation</label>
          </div>
          <div class="content-item">
            <input type="checkbox" name="content" id="content-article" />
            <label class="filter-content-list-item" for="content-article">Article</label>
          </div>
        </div>
     );
}
 
export default FilterCheckbox;

