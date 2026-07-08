import "./Testimonials.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import customer1 from "../../../assets/images/testimonials/customer1.jpg";
import customer2 from "../../../assets/images/testimonials/customer2.jpg";
import customer3 from "../../../assets/images/testimonials/customer3.jpg";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>

      <p className="testimonial-subtitle">
        Trusted by thousands of customers across India for fast delivery,
        genuine medicines, and exceptional healthcare service.
      </p>

      <div className="testimonial-grid">

        <div className="testimonial-card">
          <FaQuoteLeft className="quote-icon" />
          <img src={customer1} alt="Rahul Sharma" />
          <div className="stars">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <p className="review">
            Ordering medicines has never been easier. Delivery was incredibly fast and every product arrived in perfect condition.
          </p>
          <h3>Rahul Sharma</h3>
          <span className="location">Guwahati, Assam</span>
        </div>

        <div className="testimonial-card">
          <FaQuoteLeft className="quote-icon" />
          <img src={customer2} alt="Hirak Das" />
          <div className="stars">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <p className="review">
            Genuine medicines, affordable prices and outstanding customer support. I highly recommend MediMart.
          </p>
          <h3>Hirak Das</h3>
          <span className="location">Kolkata, West Bengal</span>
        </div>

        <div className="testimonial-card">
          <FaQuoteLeft className="quote-icon" />
          <img src={customer3} alt="Amit Sharma" />
          <div className="stars">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <p className="review">
            Excellent experience from ordering to delivery. The medicines arrived quickly and the service exceeded my expectations.
          </p>
          <h3>Amit Sharma</h3>
          <span className="location">New Delhi</span>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;