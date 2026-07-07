import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Health, Our Priority</h1>

        <p>
          Order medicines online, consult trusted healthcare professionals,
          and get fast doorstep delivery with MediMart.
        </p>

        <div className="hero-buttons">
          <button className="shop-btn">Shop Now</button>
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=700"
          alt="Pharmacy"
        />
      </div>
    </section>
  );
}

export default Hero;