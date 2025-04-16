import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getType } from '../api/issue';

const getTypeList = createAsyncThunk('type/getTypeList', async (_, thunkAPI) => {
    const res = await getType();
    return res.data;
})  

const initialState = { 
    typeList: [],
}

const typeSlice = createSlice({
    name: 'type',
    initialState,
    reducers: {
        setTypeList: (state, action) => {
            state.typeList = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTypeList.fulfilled, (state, action) => {
            state.typeList = action.payload;
        })
    }
})

export const { setTypeList } = typeSlice.actions;
export default typeSlice.reducer;