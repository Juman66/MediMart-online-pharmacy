import "./SearchMedicine.css";

function SearchMedicine() {
    return (
        <section className="search-medicine">

            <h1>Find Medicines</h1>

            {/* Search Box */}

            <div className="search-box">

                <input
                    type="text"
                    placeholder="Search medicines..."
                />

                <button>
                    Search
                </button>

            </div>

        </section>
    );
}

export default SearchMedicine;