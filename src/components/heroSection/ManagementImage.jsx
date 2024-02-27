import Image from "next/image";
import Logo from "@/components/logo/Logo";
import ArrowIcon from "@/components/icons/ArrowIcon";
import SemicolonLogo from "@/components/icons/SemicolonLogo";
import MobileViewSelect from "@/components/createCohortMobileSelect/MobileViewSelect";


const ManagementImage = () => {
    return (
        <div className="relative">
            <img src='/img.png' alt="img"  className='h-40 w-full'/>
            <div className="flex absolute top-10 left-14">
                <div className="flex gap-5">
                    <div className="w-5 mt-2 md:block hidden">
                        <SemicolonLogo/>
                    </div>
                    <span className="font-bold text-base leading-7 font-sans text-amber-50 mt-3 md:block hidden">Semicolon Africa</span>
                </div>
                <div className="rounded hover:rounded-lg p-2 w-48 h-10 font-bold absolute top-12 bg-white gap-10 md:block hidden ">
                    <div className="md:block hidden">
                        <button>View Profile</button>
                        <div className="-mt-5 ml-24"><ArrowIcon/></div>
                    </div>
                </div>
            </div>

            <div className="flex absolute top-10 left-14">
                <div className="gap-2 backdrop-blur-sm bg-white/30 h-24 w-[187px] p-2 absolute mr-10 md:hidden flex justify-self-start ">
                    <div className="md:hidden"> <SemicolonLogo/></div>
                    <span className="font-bold text-base text-[black] md:block ">Semicolon Africa</span>
                </div>
                 <div className="rounded hover:rounded-lg p-2 w-44 h-10 font-bold absolute top-[50px] left-2 bg-white flex gap-5 md:hidden">
                <button>View Profile</button>
                <div className="p-1 md:hidden"><ArrowIcon/></div>
            </div>
            </div>
            <MobileViewSelect/>
        </div>
    )
}
export default ManagementImage;