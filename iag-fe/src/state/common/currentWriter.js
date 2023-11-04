import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'home'
}

const currentWriterSlice = createSlice({
    name: 'currentWriter',
    initialState,
    reducers: {
        changeWriter: (state, {payload}) => {
            let {name} = payload;
            if(typeof name === "string") state.name = payload.name;
        }
    }
})

export const {changeWriter} = currentWriterSlice.actions;

export default currentWriterSlice.reducer;