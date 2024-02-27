import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
    value: CohortObject[];
    // iscohort: boolean
}

interface CohortObject {
    cohortName: string;
    description: string;
    program: string;
    startDate: string;
    endDate: string;
    file:''
}

const initialState: IAuthState = {
    value: [],
    // iscohort: false,
};

export const cohortSlice = createSlice({
    name: "createCohort",
    initialState,
    reducers: {
        addCohort: (state, action: PayloadAction<CohortObject>) => {
            state.value.push(action.payload);
        },
        // toggle: (state, action: PayloadAction<boolean>)=>{
        //     state.iscohort = !action.payload
        // }
    },
});

export const {addCohort } = cohortSlice.actions;
export const authReducer = cohortSlice.reducer;
