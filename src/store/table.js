
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [],
    category : {},
    add : true,
    delete :false,
    log : false,
}

const tableSlice = createSlice ({
    name : 'table',
    initialState : initialState,
    reducers : {
        setData(state ,action) {
          state.data = action.payload;
        },
        setCategory(state , action) {
          state.category = action.payload;
        },
        
        setAdd(state , action) {
          state.add = action.payload;
        },
        setDel(state , action) {
            state.del = action.payload;
          },
        setLog(state)  {
            state.log = !state.log;
        }
        
    }
})

export const tableActions = tableSlice.actions;
export default tableSlice.reducer;