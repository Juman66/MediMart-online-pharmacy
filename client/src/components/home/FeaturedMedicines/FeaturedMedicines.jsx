import "./FeaturedMedicines.css";
import { FaHeart, FaStar, FaShoppingCart } from "react-icons/fa";

import paracetamol from "../../../assets/images/medicines/paracetamol.png";
import crocin from "../../../assets/images/medicines/crocin.png";
import vitaminC from "../../../assets/images/medicines/vitamin-c.png";

function FeaturedMedicines() {
    return (
        <section className="featured">

            <h2>Featured Medicines & Health Essentials</h2>

            <p className="featured-subtitle">
                Shop our most trusted medicines and wellness essentials with
                exclusive discounts and quick doorstep delivery.
            </p>

            <div className="medicine-grid">

                {/* Paracetamol */}

                <div className="medicine-card">

                    <div className="discount-badge">
                        15% OFF
                    </div>

                    <button className="wishlist-btn">
                        <FaHeart />
                    </button>

                    <img
                        src={paracetamol}
                        alt="Paracetamol"
                    />

                    <h3>Paracetamol 500mg Tablets</h3>

                    <p className="medicine-type">
                        Fast Pain & Fever Relief
                    </p>

                    <div className="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />

                        <span>(124 Reviews)</span>
                    </div>

                    <p className="price">
                        ₹25
                        <span className="old-price">₹30</span>
                    </p>

                    <button className="featured-cart-btn">
                        <FaShoppingCart />
                        <span>Add to Cart</span>
                    </button>

                </div>

                {/* Crocin */}

                <div className="medicine-card">

                    <div className="discount-badge">
                        12% OFF
                    </div>

                    <button className="wishlist-btn">
                        <FaHeart />
                    </button>

                    <img
                        src={crocin}
                        alt="Crocin"
                    />

                    <h3>Crocin Advance</h3>

                    <p className="medicine-type">
                        Cold & Fever Relief
                    </p>

                    <div className="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />

                        <span>(96 Reviews)</span>
                    </div>

                    <p className="price">
                        ₹45
                        <span className="old-price">₹50</span>
                    </p>

                    <button className="featured-cart-btn">
                        <FaShoppingCart />
                        <span>Add to Cart</span>
                    </button>

                </div>

                {/* Vitamin C */}

                <div className="medicine-card">

                    <div className="discount-badge">
                        18% OFF
                    </div>

                    <button className="wishlist-btn">
                        <FaHeart />
                    </button>

                    <img
                        src={vitaminC}
                        alt="Vitamin C"
                    />

                    <h3>Vitamin C 1000mg</h3>

                    <p className="medicine-type">
                        Daily Immunity Support
                    </p>

                    <div className="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />

                        <span>(218 Reviews)</span>
                    </div>

                    <p className="price">
                        ₹120
                        <span className="old-price">₹150</span>
                    </p>

                    <button className="featured-cart-btn">
                        <FaShoppingCart />
                        <span>Add to Cart</span>
                    </button>

                </div>

            </div>

        </section>
    );
}

export default FeaturedMedicines;