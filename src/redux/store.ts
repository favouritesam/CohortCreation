import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import sideButtonsSlice from "@/redux/slices/sideButtonsSlice";
import { cohortSlice } from "@/redux/slices/Slice";

export const store = configureStore({
    reducer: {
        sideButton: sideButtonsSlice,
        createCohort: cohortSlice.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type CreateCohortState = ReturnType<typeof cohortSlice.reducer>;


