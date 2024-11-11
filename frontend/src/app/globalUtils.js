import axios from "axios";

export const NumberToString = (price) => {
    return `Rs ${price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export const postService = async (apiURL, payload,additionalHeaders = {}) => {
    try {
        const result = await axios.post(apiURL,payload,{
            headers:{
                "Content-Type":"application/json",
                ...additionalHeaders
            },
        });
        return result;
    } catch (error) {
        console.log(`${apiURL} failed to run`)
        // return { success: false, message: error.message };
    }
}

export const getService = async (apiURL,additionalHeaders = {}) => {
    try {
        const result = await axios.get(apiURL,{
            headers:{
                "Content-Type":"application/json",
                ...additionalHeaders
            }
        });
        return result;
    } catch (error) {
        console.log(`${apiURL} failed to run`)
    }
}