import "./MedicineCard.css";

function MedicineCard(props) {
    return (
        <div className="medicine-card">

            {/* Medicine Image */}

            <div className="medicine-image">

                <img
                    src="https://via.placeholder.com/200x200?text=Medicine"
                    alt="Medicine"
                />

            </div>

            {/* Medicine Information */}

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

                {/* Buttons */}

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