import CohortBodyIcon from "@/components/icons/CohortBodyIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import WorkPlaceIcon from "@/components/icons/WorkPlaceIcon";
import ResourcesIcon from "@/components/icons/ResourcesIcon";
import ScheduleIcon from "@/components/icons/ScheduleIcon";
import { useState } from "react";
import CreateCohortModal from "@/components/createCohortModal/Modal";

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

            {openModal && <CreateCohortModal onClose={() => setOpenModal(false)}  isOpen/>}

            <div className="border mt-14 w-full bg-cyan-500 shadow-lg shadow-cyan-500/50"></div>
            <div>
                <div className="flex justify-between mt-5">
                    <div className="items-center">
                        <div className="ml-2">
                            <HomeIcon />
                        </div>
                        <span className="text-sm">Home</span>
                    </div>

                    <div className="items-center">
                        <div className="ml-6">
                            <WorkPlaceIcon />
                        </div>
                        <span className="text-sm">Workspace</span>
                    </div>

                    <div className="items-center">
                        <div className="ml-6">
                            <ResourcesIcon />
                        </div>
                        <span className="text-sm">Resources</span>
                    </div>

                    <div className="items-center">
                        <div className="ml-4">
                            <ScheduleIcon />
                        </div>
                        <span className="text-sm">Schedule</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmptyBody;
