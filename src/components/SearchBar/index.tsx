import lupaIcon from "../../assets/lupa.png";
import "./style.css";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="inputSearch">
        <button type="submit" id="searchButton">
          <img src={lupaIcon} alt="Search" />
        </button>
        <input type="text" id="searchInput" placeholder="Search..." />
      </div>

      <div className="links">
        <a href="/distribution">Descobrir</a>
        <a href="/distribution">Navegar</a>
        <a href="/distribution">Novidades</a>
      </div>
    </div>
  );
};

export default SearchBar;
