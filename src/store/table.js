
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [],
    category : null,
    add : true,
    delete :false,
    log : false,
    update : false,
    id : null,
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
          setUpdate(state , action) {
            state.update = action.payload;
          },
          setId(state , action) {
            state.id = action.payload;
          },
        setLog(state)  {
            state.log = !state.log;
        }
        
    }
})

export const tableActions = tableSlice.actions;
export default tableSlice.reducer;