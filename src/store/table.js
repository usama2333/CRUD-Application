
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [],
    category : {},
    test : false,
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
        setTest(state , action) {
          state.test = true;
        },
        setLog(state)  {
            state.log = !state.log;
        }
        
    }
})

export const tableActions = tableSlice.actions;
export default tableSlice.reducer;