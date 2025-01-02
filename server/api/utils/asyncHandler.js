const asyncHandler = (func) => {
    return (req,res,next) => {
        Promise.resolve(func(req,res,next)).catch((error) => {
            console.error('Error in asyncHandler:', error);
            next(error)
        })
    } 
}
export default asyncHandler;