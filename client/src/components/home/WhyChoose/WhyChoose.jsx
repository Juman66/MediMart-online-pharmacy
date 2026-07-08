import "./WhyChoose.css";
import {
  FaShippingFast,
  FaShieldAlt,
  FaCreditCard,
  FaUserMd,
  FaHeadset,
  FaUndoAlt,
} from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="why-choose">
      <h2>Why Choose MediMart?</h2>

      <p className="why-subtitle">
        Healthcare you can trust, delivered to your doorstep with genuine
        medicines, secure payments, and expert support.
      </p>

      <div className="why-grid">
        <div className="why-card delivery">
          <FaShippingFast className="icon delivery-icon" />
          <h3>Fast Delivery</h3>
          <p>Quick delivery across your city with reliable doorstep service.</p>
        </div>

        <div className="why-card genuine">
          <FaShieldAlt className="icon genuine-icon" />
          <h3>100% Genuine Medicines</h3>
          <p>All medicines are sourced from trusted brands and licensed pharmacies.</p>
        </div>

        <div className="why-card payment">
          <FaCreditCard className="icon payment-icon" />
          <h3>Secure Payments</h3>
          <p>Protected online transactions with multiple safe payment options.</p>
        </div>

        <div className="why-card pharmacist">
          <FaUserMd className="icon pharmacist-icon" />
          <h3>Expert Pharmacists</h3>
          <p>Professional guidance to help you choose medicines safely.</p>
        </div>

        <div className="why-card support">
          <FaHeadset className="icon support-icon" />
          <h3>24×7 Support</h3>
          <p>Friendly customer support available whenever you need assistance.</p>
        </div>

        <div className="why-card return">
          <FaUndoAlt className="icon return-icon" />
          <h3>Easy Returns</h3>
          <p>Simple return process for eligible products with quick assistance.</p>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;