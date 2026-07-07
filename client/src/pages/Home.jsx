import Navbar from "../components/layout/Navbar/Navbar";
import Hero from "../components/home/Hero/Hero";
import SearchBar from "../components/home/SearchBar/SearchBar";
import Categories from "../components/home/Categories/Categories";
import FeaturedMedicines from "../components/home/FeaturedMedicines/FeaturedMedicines";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <Categories />
      <FeaturedMedicines />
    </>
  );
}

export default Home;