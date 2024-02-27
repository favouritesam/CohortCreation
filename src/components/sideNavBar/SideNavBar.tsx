import React from 'react';
import {useSelector} from "react-redux";
import CohortBody from "@/components/cohortBody/CohortBody";
import Programs from "@/components/program/Programs";
import Instructors from "@/components/instructor/Instructors";
import Learners from "@/components/learner/Learners";

function SideNavBar(cohorts: any) {
    // @ts-ignore
    const selectedButton = useSelector(state => state.sideButton.buttonName)
    console.log(selectedButton)
    switch(selectedButton){
        case "Cohorts":
            return(

                <CohortBody/>
            );
        case "programs":
            return(
                    <Programs/>
            );
        case "instructor":
            return (
                <Instructors/>
            );
        case "learners":
            return (
                <Learners/>
            )
        default:
            return null;
    }
}

export default SideNavBar;