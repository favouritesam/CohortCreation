import CohortBodyIcon from "@/components/icons/CohortBodyIcon";
import { useState } from "react";
import CreateCohortModal from "@/components/createCohortModal/CreateCohortModal";
import Footer from "@/components/footer/Footer";


const EmptyBody = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleCohortModal = () => {
        setOpenModal(true);
    };

    return (
        <div>
            <div className="flex items-center justify-center">
                <CohortBodyIcon />
            </div>
            <div className="font-bold text-lg flex items-center justify-center mt-5">
                <span>Empty Space</span>
            </div>
            <div className="items-center flex justify-center p-2">
        <span>
          No cohort has been created yet, let’s get you started by clicking the
          button below
        </span>
            </div>
            <div className="flex items-center justify-center mt-11">
                <button
                    className="w-32 h-10 bg-[#008EEF] rounded flex justify-center items-center text-[white]"
                    onClick={handleCohortModal}
                >
                    Create a Cohort
                </button>
            </div>

            {openModal && <CreateCohortModal open={openModal} onClose={() => setOpenModal(false)}/>}

            <div className="border mt-14 w-full bg-cyan-500 shadow-lg shadow-cyan-500/50"></div>
            <Footer/>
        </div>
    );
};

export default EmptyBody;
