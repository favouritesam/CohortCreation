import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import React from "react";
import UserIcon from "@/components/icons/UserIcon";
import CohortBodyIcon from "@/components/icons/CohortBodyIcon";
import EmptyBody from "@/components/emptyBody/EmptyBody";




const MobileViewSelect=()=>{
    const [cohort, setCohort] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCohort(event.target.value);
    };
    return (
        <div className="md:hidden p-4">
            <span className="md:hidden ml-5 absolute mt-3 text-base ">Switch between tabs</span>

            <div className="absolute mt-14 ml-5 pt-1"><UserIcon/></div>
            <FormControl sx={{ m: 1, width: 285,marginTop:6,gap:10}} size="small">
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={cohort}
                    onChange={handleChange}
                >
                    <MenuItem value="Cohort-1">Cohort-1</MenuItem>
                    <MenuItem value="Cohort-2">Cohort-2</MenuItem>
                    <MenuItem value="Cohort-3">Cohort-3</MenuItem>
                </Select>
            </FormControl>
           <div className="flex justify-center items-center md:block mt-10"> <EmptyBody/></div>
        </div>
    );
}
export default MobileViewSelect;