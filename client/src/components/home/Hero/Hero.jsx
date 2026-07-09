import "./hero.css";
import { FaCheckCircle } from "react-icons/fa";

import doctorImage from "../../../assets/images/hero/doctor.png";

function Hero() {
    return (
        <section className="hero">

            {/* Hero Content */}

            <div className="hero-content">

                <h1>
                    Your <span>Health</span>, <br />
                    Our Priority
                </h1>

                <p>
                    Buy genuine medicines online with doorstep delivery,
                    expert healthcare support, and trusted pharmacy services
                    across India.
                </p>

                {/* Buttons */}

                <div className="hero-buttons">

                    <button className="shop-btn">
                        Shop Medicines
                    </button>

                    <button className="contact-btn">
                        Consult Doctor
                    </button>

                </div>

                {/* Features */}

                <div className="hero-features">

                    <span>
                        <FaCheckCircle className="feature-icon" />
                        <span>100% Genuine Medicines</span>
                    </span>

                    <span>
                        <FaCheckCircle className="feature-icon" />
                        <span>Fast Delivery</span>
                    </span>

                    <span>
                        <FaCheckCircle className="feature-icon" />
                        <span>Secure Payments</span>
                    </span>

                </div>

            </div>

            {/* Hero Image */}

            <div className="hero-image">

                <div className="doctor-card">

                    <img
                        src={doctorImage}
                        alt="Doctor"
                        className="doctor-image"
                    />

                </div>

            </div>

        </section>
    );
}

export default Hero;