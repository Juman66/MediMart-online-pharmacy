import Navbar from "../components/layout/Navbar/Navbar";
import Hero from "../components/home/Hero/Hero";
import SearchBar from "../components/home/SearchBar/SearchBar";
import Categories from "../components/home/Categories/Categories";
import FeaturedMedicines from "../components/home/FeaturedMedicines/FeaturedMedicines";
import WhyChoose from "../components/home/WhyChoose/WhyChoose";
import Testimonials from "../components/home/Testimonials/Testimonials";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <Categories />
      <FeaturedMedicines />
      <WhyChoose />
      < Testimonials/>
    </>
  );
}

export default Home;