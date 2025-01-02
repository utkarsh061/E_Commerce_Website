const localApiUrl = "http://localhost:8000/api";


// Users URLs
export const loginUrl = `${localApiUrl}/users/login`;
export const registerUserUrl = `${localApiUrl}/users/register`;
export const forgotPassword = `${localApiUrl}/users/forgotPassword`;
export const getUserAccountDetails = `${localApiUrl}/users/accountDetails`;
export const getAllDeliveryAddress = `${localApiUrl}/users/allDeliveryAddress`;
export const getUpdateAccountDetails = `${localApiUrl}/users/updateAccountDetails`;
export const addDeliveryAddress = `${localApiUrl}/users/addDeliveryAddress`;


//Orders URLs
export const getOrderHistory = `${localApiUrl}/orders/orderHistory `;
export const placeOrder = `${localApiUrl}/orders/placeOrder`;

//Query URL
export const queryURL = `${localApiUrl}/users/query`;

