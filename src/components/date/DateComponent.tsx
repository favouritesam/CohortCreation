import React, { ChangeEvent } from "react";
import { useState } from "react";

interface DateProps {
    setCohortForm: (value:any)=>void;
    dateVar: string
}

const DateComponent : React.FC<DateProps>  = ({setCohortForm,dateVar}) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        const dateValue = new Date(value);
        const formattedDate = formatDate(dateValue);
        setCohortForm((prevData: any) => ({
            ...prevData,
            [name]: formattedDate
        }));
    }

    const todayDate = new Date().toISOString().split('T')[0];

    function formatDate(date: Date): string {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();

        return `${day}-${month}-${year}`;
    }

    return (
        <div className="border border-[#D0DCE4] rounded-sm">
            <input className="w-full h-full" type="date" min={todayDate} name={dateVar} onChange={handleInputChange}></input>
        </div>
    );
}

export default DateComponent;