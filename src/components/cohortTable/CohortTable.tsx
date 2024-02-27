import {TableBody, TableCell, TableRow} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";
import KebabIcon from "@/components/icons/KebabIcon";


// @ts-ignore
const CohortTable = ({cohort}) => {
    const [allCohorts, setAllCohorts] = useState<any>([])
    useEffect(() => {
        console.log('use effect called')
        const fetchData = async () => {
            try {
                const cohortResponse = await axios.get('https://schoolmanagement-production.up.railway.app/api/v1/school/viewAllCohort');
                console.log('cohort Response:', cohortResponse);
                setAllCohorts(cohortResponse.data);
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="mt-10 flex items-center justify-center flex-row m-10 w-full">
            <TableBody>
                {allCohorts?.map((cohort: any, index: any) => (
                    <div key={index}>
                        <TableRow className=" flex flex-row">
                            <TableCell sx={{border: "none"}}>
                                <div className="flex">
                                    <div className="mt-3">
                                        <img src={cohort.cohortAvatar}/>
                                    </div>

                                    <div className="mt-6 ml-10">
                                        <div className="font-bold text-lg text-[#1E323F]">{cohort.cohortName}</div>
                                        {/*<div className="text-sm text-[#1E323F]">*/}
                                        {/*    {member.title}*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </TableCell>

                            <TableCell sx={{border: "none"}} className="">
                                <div className="flex flex-row gap-2">
                                    <div className="pt-6">{cohort.icon}</div>
                                    <div className="pt-6">{cohort.program}</div>
                                </div>
                            </TableCell>

                            <TableCell sx={{border: "none"}} className="">
                                <div className="flex ml-96 ">
                                    <div className="flex ml-40 ">{cohort.startDate}</div>
                                    <div className="flex ml-10"> <KebabIcon/></div>
                                </div>
                            </TableCell>
                        </TableRow>
                    </div>
                ))}
            </TableBody>
        </div>
    )
}
export default CohortTable;