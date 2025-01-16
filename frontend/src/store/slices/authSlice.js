import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null,
    isAuthencticated : false
}

const authSlice = createSlice({
    name : "authSlice",
    initialState : initialState,
    reducers : {
        login : (state,payload)=>{
            state.isAuthencticated = true;
            state.user = payload;
        }
    }
})