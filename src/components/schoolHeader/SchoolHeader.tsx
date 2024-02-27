import Logo from "@/components/logo/Logo";
import NotificationBell from "@/components/icons/NotificationBell";
import { CiUser } from "react-icons/ci";
import SideIcon from "@/components/icons/SideIcon";
import SchoolNav from "@/components/schoolHeader/SchoolNav";
import JustEnum from "@/components/icons/JustEnum";


const SchoolHeader =()=>{

    return(
        <div className=" md:flex justify-between border p-4">
            <div className="flex justify-between flex-row">
                <div className=" flex  md:hidden"><JustEnum/></div>
                <div className="md:block hidden ml-10"><Logo imageUrl={'/logo.png'}/></div>
                <div className="flex gap-2">
                    <div className=" md:hidden flex"><NotificationBell/></div>
                    <div className=" md:hidden "><CiUser size={30} color={"blue"}/></div>
                </div>
            </div>
            <SchoolNav/>

            <div className="flex gap-5">
                <div className=" md:block hidden">
                <NotificationBell/>
                </div>
                <div className="md:block hidden"> <CiUser size={30} color={"blue"}/></div>
                <select  className="hidden md:block rounded-md bg-white mr-10">
                    <option value="chineyenwa">Chineyenwa</option>
                    <option value="jChineyenwa">Chineyenwa</option>
                    <option value="Chineyenwa">MachineKey</option>
                    <option value="Chineyenwa">MachineKey</option>
                </select>
                <div className="mr-10 md:block hidden">
                    <SideIcon/>
                </div>
            </div>
        </div>
    )
}
export default SchoolHeader;