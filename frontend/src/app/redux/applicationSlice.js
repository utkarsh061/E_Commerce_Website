import { createSlice } from "@reduxjs/toolkit";

export const applicationSlice = createSlice({
    name:"application",
    initialState:{
        individualPageItem:{},
        cartItems:[]
    },
    reducers:{
        setIndividualPageItem: (state,{payload}) => {
            state.individualPageItem = payload;
        },
        setCartItems: (state,{payload}) => {
            state.cartItems = payload;
        }
    }
});

export const {
    setIndividualPageItem,
    setCartItems
} = applicationSlice.actions;

export default applicationSlice.reducer;