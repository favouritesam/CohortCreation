import SearchIcon from "@/components/icons/SearchIcon";
import CohortTable from "@/components/cohortTable/CohortTable";
import React, {useState} from "react";
import KebabModal from "@/components/kebabModal/KebabModal";
import CreateCohortModal from "@/components/createCohortModal/CreateCohortModal";
interface CohortListProps {
    allCohorts: any
}

const CohortMemberContent : React.FC<CohortListProps> = ({allCohorts}) => {
    console.log('cohort member content');
    const [openModal, setOpenModal] = useState(false);

    const handleCohortModal = () => {
        setOpenModal(true);
    };



    return (
        <>

            <div className='comment custom-scroll-bar -mt-32'>
                {/*<span className="font-bold text-4xl text-[#1E323F] ml-56 flex">Cohorts</span>*/}
                <span className=" font-extrabold text-lg mt-6 ml-60 ">Cohorts</span>

                <div className="relative flex gap-80">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="py-2 pl-10 pr-44  ml-56 mt-10 border border-gray-300 rounded focus:outline-none"
                    />
                    <span className="absolute inset-y-16 left-56 flex items-center pl-2">
                        <SearchIcon/>
                    </span>

                    <div className="mt-10 flex gap-6">
                        <button className="border w-44 h-12 rounded-xl text-[#FFFFFF] bg-[#008EEF]"  onClick={handleCohortModal}>Create a cohort</button>
                        <button className="border w-44 h-12 rounded-xl text-[#142E70] font-bold text-base gap-6 justify-center items-center flex" >More Actions <KebabModal/></button>
                    </div>
                    {openModal && <CreateCohortModal onClose={() => setOpenModal(false)} open={openModal}/>}
                </div>



              <CohortTable cohort={allCohorts}/>
            </div>

        </>
    );
};

export default CohortMemberContent;
