import HomeIcon from "@/components/icons/HomeIcon";
import WorkPlaceIcon from "@/components/icons/WorkPlaceIcon";
import ResourcesIcon from "@/components/icons/ResourcesIcon";
import ScheduleIcon from "@/components/icons/ScheduleIcon";

const Footer = ()=>{
    return(
        <>
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
        </>
    )
}
export  default  Footer;