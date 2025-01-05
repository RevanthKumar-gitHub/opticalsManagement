exports.asyncHandler = (cb)=>{
    return (req,res,next)=>{
        Promise.resolve(cb).reject(next);
    }
}