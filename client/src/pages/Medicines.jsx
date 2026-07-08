import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

import SearchMedicine from "../components/medicine/SearchMedicine/SearchMedicine";
import MedicineFilter from "../components/medicine/MedicineFilter/MedicineFilter";
import MedicineGrid from "../components/medicine/MedicineGrid/MedicineGrid";

function Medicines() {
  return (
    <>
      <Navbar />

      <SearchMedicine />

      <MedicineFilter />

      <MedicineGrid />

      <Footer />
    </>
  );
}

export default Medicines;