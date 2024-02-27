import NavItems from "@/components/schoolHeader/NavItem";
import NavItem from "@/components/schoolHeader/NavItem";
import {useState} from "react";

const SchoolNav =()=>{
    const [selectedButton, setSelectedButton] = useState(null);

    // @ts-ignore
    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };
    return(
        <div className=" md:block hidden justify-center items-center">
            <div className="flex gap-8 ">
                <NavItem selectedButton={selectedButton} handleButtonClick={handleButtonClick} name={"Home"} names={"Name"}/>
                <NavItem selectedButton={selectedButton} handleButtonClick={handleButtonClick} name={"Workspace"} names={"Workspace"}/>
                <NavItem selectedButton={selectedButton} handleButtonClick={handleButtonClick} name={"Resources Library"} names={"Resources Library"}/>
            </div>
        </div>
    )
}
export default SchoolNav;