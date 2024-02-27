import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Buttons{
    buttonName: string;
}

const initialState: Buttons ={
    buttonName: ""
}

const sideButtonsSlice = createSlice({
    name: "sideButton",
    initialState,
    reducers:{
        setButtonName:(state, action: PayloadAction<string>)=>{
                state.buttonName = action.payload;
        }
    }
})

export const {setButtonName} = sideButtonsSlice.actions
export default sideButtonsSlice.reducer;