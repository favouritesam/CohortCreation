import CohortIcon from "@/components/icons/CohortIcon";
import ProgramsIcon from "@/components/icons/ProgramsIcon";
import InstructorIcon from "@/components/icons/InstructorIcon";
import LearnersIcon from "@/components/icons/LearnersIcon";
import React, {useState} from "react";
import MenuItems from "@/components/sideBar/MenuItems";


const SideBar =()=>{
    const [selectedItem, setSelectedItem] = useState<string>("");

    const handleToggleView = (allItems:string) => {
        setSelectedItem(allItems);
    };



    return(
        <div className="p-14 md:block hidden">
            <div className="flex">
            <MenuItems
                name={"Cohorts"} selectedItem={selectedItem}
                handleToggleView={handleToggleView}
                icon={ <CohortIcon color={selectedItem === "cohorts" ? "#008EEF": "#475661"}/>}/>
            </div>

            <MenuItems
                name={"programs"} selectedItem={selectedItem}
                handleToggleView={handleToggleView}
                icon={<ProgramsIcon color={selectedItem === "programs" ? "#008EEF": "#475661"}/>} />
            <MenuItems
                name={"instructor"} selectedItem={selectedItem}
                handleToggleView={handleToggleView}
                icon={<InstructorIcon color={selectedItem === "instructor" ? "#008EEF": "#475661"}/>}/>
            <MenuItems
                name={"learners"} selectedItem={selectedItem}
                handleToggleView={handleToggleView}
                icon={<LearnersIcon color={selectedItem === "learners" ? "#008EEF": "#475661"}/>}/>
        </div>
    )
}
export default SideBar;