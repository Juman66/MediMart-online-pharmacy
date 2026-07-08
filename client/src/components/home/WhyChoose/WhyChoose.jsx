import "./WhyChoose.css";

function WhyChoose() {
  return (
    <section className="why-choose">

      <h2>Why Choose MediMart?</h2>

      <div className="why-grid">

        <div className="why-card">
          <div className="icon">🚚</div>
          <h3>Fast Delivery</h3>
          <p>Get your medicines delivered within 30 minutes.</p>
        </div>

        <div className="why-card">
          <div className="icon">💊</div>
          <h3>100% Genuine Medicines</h3>
          <p>Certified medicines from trusted pharmacies.</p>
        </div>

        <div className="why-card">
          <div className="icon">🔒</div>
          <h3>Secure Payment</h3>
          <p>Safe and encrypted online payment options.</p>
        </div>

        <div className="why-card">
          <div className="icon">🕒</div>
          <h3>24/7 Support</h3>
          <p>Our healthcare experts are always ready to help.</p>
        </div>

      </div>

    </section>
  );
}

export default WhyChoose;