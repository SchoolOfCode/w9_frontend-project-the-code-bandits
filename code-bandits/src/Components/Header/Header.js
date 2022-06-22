const Header = () => {
    return (
      <header className="header">
        <div className="header-content-wrapper">
          <h1 className="header-title">Resource manager</h1>
          <button type="header-button">Add resource</button>
          <div className="header-search-resources">
            <p className="header-search-resources-magnifying-glass">🔎</p>
            <input
              type="text"
              className="header-search-resources-input"
              placeholder="search resources"
            />
          </div>
        </div>
      </header>
    );
}
 
export default Header;