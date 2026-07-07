import "./Categories.css";

function Categories() {
  return (
    <section className="categories">

      <h2>Shop by Category</h2>

      <div className="category-grid">

        <div className="category-card">
          <span>💊</span>
          <h3>Pain Relief</h3>
        </div>

        <div className="category-card">
          <span>🤧</span>
          <h3>Cold & Flu</h3>
        </div>

        <div className="category-card">
          <span>❤️</span>
          <h3>Heart Care</h3>
        </div>

        <div className="category-card">
          <span>🩸</span>
          <h3>Diabetes</h3>
        </div>

        <div className="category-card">
          <span>🧴</span>
          <h3>Skin Care</h3>
        </div>

        <div className="category-card">
          <span>💪</span>
          <h3>Vitamins</h3>
        </div>

      </div>

    </section>
  );
}

export default Categories;