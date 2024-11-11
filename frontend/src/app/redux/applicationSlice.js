import { createSlice } from "@reduxjs/toolkit";

export const applicationSlice = createSlice({
    name:"application",
    initialState:{
        individualPageItem:{},
        cartItems:[],
        isUserLoggedIn:false,
        accoutDetails:{},
        allOrders:{}
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
        },
        setAccoutDetails: (state,{payload}) => {
            state.accoutDetails = payload;
        },
        setAllOrders: (state,{payload}) => {
            state.allOrders = payload;
        }
    }
});

export const {
    setIndividualPageItem,
    setCartItems,
    setIsUserLoggedIn,
    setAccoutDetails,
    setAllOrders
} = applicationSlice.actions;

export default applicationSlice.reducer;