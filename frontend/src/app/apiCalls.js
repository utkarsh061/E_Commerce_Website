
import { loginUrl,registerUserUrl,getUserAccountDetails,getOrderHistory } from "./apiEndPoints"
import { getService, postService } from "./globalUtils"
import { setAccoutDetails, setIsUserLoggedIn,setAllOrders } from "./redux/applicationSlice"

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
export const RegisterUser = async (payload,dispatch,router) => {
    let registeredSuccessfully = false;
    const resp = await postService(registerUserUrl,payload)
    if(resp?.data?.data){
        // dispatch(setIsUserLoggedIn(resp?.data?.success))
        registeredSuccessfully = true;
        if(resp?.data?.success){
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
// export const LogOutUser = async (payload,dispatch,router) => {
//     let validCredentials = false;
//     const resp = await postService(loginUrl,payload)
//     if(resp?.data?.data){
//         dispatch(setIsUserLoggedIn(resp?.data?.success))
//         validCredentials = true;
//         if(resp?.data?.success){
//             localStorage.removeItem("accessToken")
//             router.push("/")
//         }
//     }
//     return validCredentials;
// }