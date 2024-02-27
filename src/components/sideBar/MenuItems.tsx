// @ts-ignore
import {useDispatch} from "react-redux";
import {setButtonName} from "@/redux/slices/sideButtonsSlice";

// @ts-ignore
const MenuItems=({selectedItem, name,handleToggleView, icon})=>{
    const dispatch = useDispatch();
    return(
        <div className={`flex gap-4 cursor-pointer items-center mt-6 ${ selectedItem === `${name}` ? 'text-blue-500 bg-[#F6FCFF] w-32 rounded-xl' : ''}`}
             onClick={()=>{
                 handleToggleView(`${name}`)
                 dispatch(setButtonName(name));
             }}>
            {icon}
            <span className={`font-bold flex items-center text-[#475661]  text-center ${selectedItem === `${name}` ? 'text-blue-500' : ''}`}>{name}</span>
        </div>
    )
}
export default MenuItems;