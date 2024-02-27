import {TableBody, TableCell, TableRow} from "@mui/material";

// @ts-ignore
const CohortTable=({cohort})=>{


    return(
        <div className="mt-10 flex items-center justify-center ml-52 flex-row">
            <TableBody>
                {cohort?.map((member:any, index:any) => (
                    <div key={index}>
                        <TableRow className="shadow-md flex flex-row gap-16">
                            <TableCell sx={{border:"none"}}>
                                <div className="flex">
                                    <div className="mt-3">
                                        <img src={member.image}/>
                                    </div>

                                    <div className="mt-6 ml-10">
                                        <div className="font-bold text-lg text-[#1E323F]">{member.name}</div>
                                        <div className="text-sm text-[#1E323F]" >
                                            {member.title}
                                        </div>
                                    </div>
                                </div>
                            </TableCell>

                            <TableCell  sx={{border:"none"}} className="">
                                <div className="flex flex-row gap-2">
                                    <div className="pt-6">{member.icon}</div>
                                    <div className="pt-6">{member.role}</div>
                                </div>
                            </TableCell>

                            <TableCell  sx={{border:"none"}} className="">
                                <div className="flex ml-96 ">
                                    <div className="flex ml-40 ">{member.date}</div>
                                    <div className="flex ml-10">{member.kebab}</div>
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