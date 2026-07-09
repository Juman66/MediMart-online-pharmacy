import "./Categories.css";
import {
    FaCapsules,
    FaNotesMedical,
    FaHeartbeat,
    FaTint,
    FaPumpSoap,
    FaLeaf,
} from "react-icons/fa";

function Categories() {
    return (
        <section className="categories">
            <h2>Shop by Category</h2>

            <p className="categories-subtitle">
                Browse medicines and healthcare essentials by category.
            </p>

            <div className="category-grid">

                <div className="category-card pain">
                    <FaCapsules className="category-icon" />

                    <h3>Pain Relief</h3>

                    <p>200+ Products</p>

                    <span>Explore →</span>
                </div>

                <div className="category-card cold">
                    <FaNotesMedical className="category-icon" />

                    <h3>Cold & Flu</h3>

                    <p>150+ Products</p>

                    <span>Explore →</span>
                </div>

                <div className="category-card heart">
                    <FaHeartbeat className="category-icon" />

                    <h3>Heart Care</h3>

                    <p>120+ Products</p>

                    <span>Explore →</span>
                </div>

                <div className="category-card diabetes">
                    <FaTint className="category-icon" />

                    <h3>Diabetes</h3>

                    <p>180+ Products</p>

                    <span>Explore →</span>
                </div>

                <div className="category-card skin">
                    <FaPumpSoap className="category-icon" />

                    <h3>Skin Care</h3>

                    <p>220+ Products</p>

                    <span>Explore →</span>
                </div>

                <div className="category-card vitamin">
                    <FaLeaf className="category-icon" />

                    <h3>Vitamins</h3>

                    <p>300+ Products</p>

                    <span>Explore →</span>
                </div>

            </div>
        </section>
    );
}

export default Categories;