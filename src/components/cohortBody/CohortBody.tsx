import CohortBodyIcon from "@/components/icons/CohortBodyIcon";
import React, {useState} from "react";
import CreateCohortModal from "@/components/createCohortModal/CreateCohortModal";
import CohortMemberContent from "@/components/createCohortModal/CohortMemberContent";
import CohortTable from "@/components/cohortTable/CohortTable";

const CohortBody =()=>{
    const [isModalClick,setIsModalClick] = useState<boolean>(false);

    const allCohorts: string | any[]=[
    ]
    const handleShowModal =()=>{
        setIsModalClick(!isModalClick)

    }
    return(
        <div className="flex justify-items-center justify-center items-center -mt-28">
            { allCohorts.length === 0 ?
                <div className="-mt-32">
                    <span className=" font-extrabold text-lg">Cohorts</span>
                    <div className="justify-center justify-items-center flex-col">
                <div className="font-semibold text-[#001343] justify-center justify-items-center flex" ><CohortBodyIcon/></div>
                <div><span className="font-bold text-[#001343] justify-center justify-items-center flex">Empty Space</span></div>
                <div className="font-semibold text-[#001343] justify-center justify-items-center flex"><p>No cohort has been created yet, let’s get you started by <br/>
                    <span className="justify-items-center justify-center flex">clicking the button below</span></p></div>
                <div className="justify-items-center justify-center flex mt-10">
                    <button className="w-40 h-10 border-solid border rounded-xl bg-[#008EEF] text-[#FFFFFF] " onClick={()=>{handleShowModal()}}>Create a Cohort</button></div>
            </div>
                {isModalClick === true && <CreateCohortModal open={open}/>}</div> : <CohortMemberContent allCohorts={allCohorts}/>}

        </div>
    )
}
export default CohortBody;
