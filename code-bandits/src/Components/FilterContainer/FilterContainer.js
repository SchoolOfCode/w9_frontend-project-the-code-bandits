import FilterSection from "../FilterSection/FilterSection";

const FilterContainer = () => {
    return ( 
      <aside class="filter">
      <div class="filter-wrapper">
      <h3 class="filter-subheading">Filter by</h3>
      <FilterSection />
      <FilterSection />
      </div>
      </aside>
     );
}
 
export default FilterContainer;