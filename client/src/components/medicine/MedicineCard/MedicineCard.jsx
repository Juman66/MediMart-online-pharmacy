import "./MedicineCard.css";

function MedicineCard(props) {
  return (
    <div className="medicine-card">

      <div className="medicine-image">

        <img
          src="https://via.placeholder.com/200x200?text=Medicine"
          alt="Medicine"
        />

      </div>

      <div className="medicine-info">

        <h3>Paracetamol 500mg</h3>

        <p className="medicine-description">
          Fast relief from fever and mild pain.
        </p>

        <p className="medicine-price">
          ₹25
        </p>

        <p className="medicine-rating">
          ⭐⭐⭐⭐⭐
        </p>

        <div className="medicine-buttons">

          <button className="details-btn">
            View Details
          </button>

          <button className="cart-btn">
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default MedicineCard;