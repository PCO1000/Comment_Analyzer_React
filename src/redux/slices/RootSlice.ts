import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        comment: "Comment",
    },
    reducers: {
        chooseComment: (state, action) => { state.comment = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseComment} = rootSlice.actions