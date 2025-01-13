exports.asyncHandler = (cb)=>{
    return (req,res,next)=>{
        return Promise.resolve(cb(req,res,next)).catch(next);
    }
}