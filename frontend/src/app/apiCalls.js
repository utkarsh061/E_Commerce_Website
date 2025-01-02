
import { 
    loginUrl,
    registerUserUrl,
    getUserAccountDetails,
    getOrderHistory,
    forgotPassword,
    getAllDeliveryAddress,
    addDeliveryAddress,
    placeOrder,
    queryURL
} from "./apiEndPoints"
import { 
    getService, 
    postService 
} from "./globalUtils"
import { 
    setAccoutDetails,
    setIsUserLoggedIn,
    setAllOrders,
    setAddressDetails
} from "./redux/applicationSlice"

export const LoginUser = async (payload,dispatch,router) => {
    let validCredentials = false;
    const resp = await postService(loginUrl,payload)
    if(resp?.data?.data){
        dispatch(setIsUserLoggedIn(resp?.data?.success))
        localStorage.setItem("accessToken",resp.data.data.accessToken)
        validCredentials = true;
        if(resp?.data?.success){
            router.push("/")
        }
    }
    return validCredentials;
}
export const LogOutUser = async (dispatch,router) => {
    localStorage.removeItem("accessToken")
    dispatch(setIsUserLoggedIn(false))
}

export const RegisterUser = async (payload,router) => {
    let registeredSuccessfully = false;
    const resp = await postService(registerUserUrl,payload)
    if(resp?.data?.data){
        if(resp?.data?.success){
            registeredSuccessfully = true;
            router.push("/account")
        }
    }
    return registeredSuccessfully;
}
export const getAccountDetails = async (dispatch) => {
    let registeredSuccessfully = false;
    let accessToken = localStorage.getItem("accessToken")
    const resp = await getService(getUserAccountDetails,{
        "Authorization": `Bearer ${accessToken}`,
    })
    if(resp?.data?.data){
        dispatch(setAccoutDetails(resp?.data?.data))
        registeredSuccessfully = true;
    }
    return registeredSuccessfully;
}
export const getOrderDetails = async (dispatch) => {
    let registeredSuccessfully = false;
    let accessToken = localStorage.getItem("accessToken")
    const resp = await getService(getOrderHistory,{
        "Authorization": `Bearer ${accessToken}`,
    })
    if(resp?.data?.data){
        dispatch(setAllOrders(resp?.data?.data))
        registeredSuccessfully = true;
    }
    return registeredSuccessfully;
}
export const resetPassword = async (payload,router) => {
    let resetPassWordSuccessfull = false;
    const resp = await postService(forgotPassword,payload)
    if(resp?.data?.data){
        if(resp?.data?.success){
            resetPassWordSuccessfull = true;
            router.push("/account")
        }
    }
    return resetPassWordSuccessfull;
}

export const getDeliveryAddress = async (dispatch) => {
    let accessToken = localStorage.getItem("accessToken")
    const resp = await getService(getAllDeliveryAddress,{
        "Authorization": `Bearer ${accessToken}`,
    })
    if(resp?.data?.data){
        dispatch(setAddressDetails(resp?.data?.data))
    }
}
export const addDeliveryAddresApiCall = async (payload,dispatch) => {
    let addressAddedSuccessfully = false;
    let accessToken = localStorage.getItem("accessToken")
    const resp = await postService(addDeliveryAddress,payload,{
        "Authorization": `Bearer ${accessToken}`,
    })
    if(resp?.data?.success){
        addressAddedSuccessfully = true;
    }
    return addressAddedSuccessfully;
    
}
export const placeOrderApiCall = async (payload) => {
    let orderPlacedSuccessfully = false;
    let accessToken = localStorage.getItem("accessToken")
    const resp = await postService(placeOrder,payload,{
        "Authorization": `Bearer ${accessToken}`,
    })
    if(resp?.data?.success){
        orderPlacedSuccessfully = true;
    }
    return orderPlacedSuccessfully;
    
}

export const queryApiCall = async(payload) => {
    let queryPlacedSuccessfully = false;
    const resp = await postService(queryURL,payload)
    if(resp?.data?.success){
        queryPlacedSuccessfully=true
    }
    return queryPlacedSuccessfully;
}