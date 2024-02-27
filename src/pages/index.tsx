import {Inter} from "next/font/google";
import SchoolHeader from "@/components/schoolHeader/SchoolHeader";
import ManagementImage from "@/components/heroSection/ManagementImage";
import SideBar from "@/components/sideBar/SideBar";
import CohortBody from "@/components/cohortBody/CohortBody";
import CohortMemberContent from "@/components/createCohortModal/CohortMemberContent";
import SideNavBar from "@/components/sideNavBar/SideNavBar";
import PublishPoll from '../components/publishPoll/PublishPoll'


const inter = Inter({subsets: ["latin"]});

export default function Home() {


    return <>
        <SchoolHeader/>
        <ManagementImage/>
        <SideBar/>
        {/*<CohortBody/>*/}
        {/*<CohortMemberContent/>*/}
        <SideNavBar/>
        {/*<PublishPoll/>*/}
    </>

}
