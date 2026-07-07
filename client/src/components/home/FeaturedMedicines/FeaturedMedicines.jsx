import "./FeaturedMedicines.css";

function FeaturedMedicines() {
  return (
    <section className="featured">

      <h2>Featured Medicines</h2>

      <div className="medicine-grid">

        <div className="medicine-card">
          <img
            src="https://via.placeholder.com/180x180?text=Medicine"
            alt="Paracetamol"
          />

          <h3>Paracetamol</h3>

          <p className="price">₹25</p>

          <p className="rating">⭐⭐⭐⭐⭐</p>

          <button>Add to Cart</button>
        </div>

        <div className="medicine-card">
          <img
            src="https://via.placeholder.com/180x180?text=Medicine"
            alt="Crocin"
          />

          <h3>Crocin</h3>

          <p className="price">₹45</p>

          <p className="rating">⭐⭐⭐⭐☆</p>

          <button>Add to Cart</button>
        </div>

        <div className="medicine-card">
          <img
            src="https://via.placeholder.com/180x180?text=Medicine"
            alt="Vitamin C"
          />

          <h3>Vitamin C</h3>

          <p className="price">₹120</p>

          <p className="rating">⭐⭐⭐⭐⭐</p>

          <button>Add to Cart</button>
        </div>

      </div>

    </section>
  );
}

export default FeaturedMedicines;