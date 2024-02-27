import SearchIcon from "@/components/icons/SearchIcon";
import KebabIcon from "@/components/icons/KebabIcon";
import CohortTable from "@/components/cohortTable/CohortTable";
import React, {useState} from "react";
import KebabModal from "@/components/kebabModal/KebabModal";
interface CohortListProps {
    cohorts: any
}

const CohortMemberContent : React.FC<CohortListProps> = ({cohorts}) => {



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
                        <button className="border w-44 h-12 rounded-xl text-[#FFFFFF] bg-[#008EEF]">Create a cohort</button>
                        <button className="border w-44 h-12 rounded-xl text-[#142E70] font-bold text-base gap-6 justify-center items-center flex" >More Actions <KebabModal/></button>
                        </div>
                </div>



              <CohortTable cohort={cohorts}/>
            </div>

        </>
    );
};

export default CohortMemberContent;
