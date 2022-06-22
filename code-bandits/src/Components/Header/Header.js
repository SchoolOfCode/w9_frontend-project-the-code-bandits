const Header = () => {
    return (
      <header className="header">
        <div className="header-content-wrapper">
          <h1 className="title">Resource manager</h1>
          <button type="button">Add resource</button>
          <div className="search-resources">
            <p className="search-resources-magnifying-glass">🔎</p>
            <input
              type="text"
              className="search-resources-input"
              placeholder="search resources"
            />
          </div>
        </div>
      </header>
    );
}
 
export default Header;