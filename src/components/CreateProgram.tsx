import React from "react";


type Props = {
    itemsHolder : []
    ml : string
    onClick: (e: React.MouseEvent<HTMLSelectElement, MouseEvent>) => void;


}


const DropDown :  React.FC<Props> = (props: Props)  => {


    return(
        <select className={`float-right mr-9 mt-4 w-[20px] ml-90 border-none" id="options" name="options" `} onClick={props.onClick}  >
            {props.itemsHolder.map((items) => (
                <option >{items}</option>
            ))
            }
        </select>
    )

}
