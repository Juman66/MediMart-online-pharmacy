import "./MedicineGrid.css";
import MedicineCard from "../MedicineCard/MedicineCard";

function MedicineGrid() {
    return (
        <section className="medicine-grid">

            {/* Medicines */}

            <MedicineCard
                name="Paracetamol 500mg"
                description="Provides fast relief from fever, headache, and mild body pain."
                price="₹25"
                rating="⭐⭐⭐⭐⭐"
            />

            <MedicineCard
                name="Crocin Advance"
                description="Effective medicine for fever, cold symptoms, and body aches."
                price="₹45"
                rating="⭐⭐⭐⭐☆"
            />

            <MedicineCard
                name="Limcee Vitamin C 500mg"
                description="Supports immunity and helps maintain healthy skin and bones."
                price="₹120"
                rating="⭐⭐⭐⭐⭐"
            />

            <MedicineCard
                name="Dolo 650"
                description="Relieves fever, muscle pain, and mild to moderate headaches."
                price="₹35"
                rating="⭐⭐⭐⭐⭐"
            />

            <MedicineCard
                name="Cetirizine 10mg"
                description="Provides relief from allergies, sneezing, runny nose, and itching."
                price="₹55"
                rating="⭐⭐⭐⭐☆"
            />

            <MedicineCard
                name="Benadryl Cough Syrup"
                description="Helps relieve dry cough and soothes throat irritation."
                price="₹95"
                rating="⭐⭐⭐⭐⭐"
            />

        </section>
    );
}

export default MedicineGrid;