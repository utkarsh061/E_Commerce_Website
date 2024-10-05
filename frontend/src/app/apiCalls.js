
import { loginUrl } from "./apiEndPoints"
import { postService } from "./globalUtils"
import { setIsUserLoggedIn } from "./redux/applicationSlice"

export const LoginUser = async (payload,dispatch,router) => {
    let validCredentials = false;
    const resp = await postService(loginUrl,payload)
    if(resp?.data?.data){
        dispatch(setIsUserLoggedIn(resp?.data?.success))
        validCredentials = true;
        if(resp?.data?.success){
            router.push("/")
        }
    }
    return validCredentials
}