import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <h2>What Our Customers Say</h2>

      <div className="testimonial-grid">

        <div className="testimonial-card">
          <img
            src="https://i.pravatar.cc/150?img=11"
            alt="Customer"
          />

          <h3>Rahul Sharma</h3>

          <p className="rating">⭐⭐⭐⭐⭐</p>

          <p>
            Ordering medicines has never been easier.
            Delivery was super fast and everything arrived safely.
          </p>
        </div>

        <div className="testimonial-card">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="Customer"
          />

          <h3>Priya Das</h3>

          <p className="rating">⭐⭐⭐⭐⭐</p>

          <p>
            Genuine medicines, affordable prices and an excellent customer support team.
          </p>
        </div>

        <div className="testimonial-card">
          <img
            src="https://i.pravatar.cc/150?img=25"
            alt="Customer"
          />

          <h3>Amit Verma</h3>

          <p className="rating">⭐⭐⭐⭐⭐</p>

          <p>
            I received my order within an hour.
            Highly recommend MediMart to everyone.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Testimonials;