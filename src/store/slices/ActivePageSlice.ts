import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ActivePageState {
    activePage: string;
}

const initialState: ActivePageState = {
    activePage: 'main' ,
};
const activePageSlice = createSlice({
    name: 'activePage',
    initialState,
    reducers: {
        setActiveP: (state, action: PayloadAction<string>) => {
            state.activePage = action.payload;
        },
    },
});

export const { setActiveP } = activePageSlice.actions;
export default activePageSlice.reducer;