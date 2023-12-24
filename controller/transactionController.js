//@desc GET all trans
//@route GET /api/v1/trans
//@access Public
exports.getTransactions = (req,res)=>{
    res.send("hello!GET transactions")
}
//@desc add trans
//@route POST /api/v1/trans
//@access Public
exports.addTransaction = (req,res)=>{
    res.send("hello!POST transactions")
}
//@desc GET all trans
//@route GET /api/v1/trans/:id
//@access Public
exports.deleteTransaction = (req,res)=>{
    res.send("hello!delete transaction")
}