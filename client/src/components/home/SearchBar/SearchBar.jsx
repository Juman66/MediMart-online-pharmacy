
import "./SearchBar.css";

function SearchBar() {
  return (
    <section className="search-section">

      <h2>Find Your Medicines</h2>

      <div className="search-box">

        <input
          type="text"
          placeholder="Search medicines..."
        />

        <button>Search</button>

      </div>

      <div className="popular-searches">
        <span>Popular:</span>
        <p>Paracetamol</p>
        <p>Vitamin C</p>
        <p>Diabetes Care</p>
      </div>

    </section>
  );
}

export default SearchBar;