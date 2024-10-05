import { createSlice } from "@reduxjs/toolkit";

export const applicationSlice = createSlice({
    name:"application",
    initialState:{
        individualPageItem:{},
        cartItems:[],
        isUserLoggedIn:false,
    },
    reducers:{
        setIndividualPageItem: (state,{payload}) => {
            state.individualPageItem = payload;
        },
        setCartItems: (state,{payload}) => {
            state.cartItems = payload;
        },
        setIsUserLoggedIn: (state,{payload}) => {
            state.isUserLoggedIn = payload;
        }
    }
});

export const {
    setIndividualPageItem,
    setCartItems,
    setIsUserLoggedIn
} = applicationSlice.actions;

export default applicationSlice.reducer;