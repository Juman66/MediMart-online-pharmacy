import Navbar from "../components/Navbar";
import "../styles/home.css";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">

        <h1>Welcome to MediMart</h1>

        <p>
          Your Trusted Online Pharmacy
        </p>

      </section>
    </>
  );
}

export default Home;