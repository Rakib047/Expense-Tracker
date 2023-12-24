const TransactionModel = require("../models/TransactionModel")


//@desc GET all trans
//@route GET /api/v1/trans
//@access Public
exports.getTransactions = async(req,res)=>{
    
    try {
        const transactionList=await TransactionModel.find()

        return res.status(200).json(
            {
                success:true,
                count:transactionList.length,
                data:transactionList
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success:false,
                error:"Server error"
            }
        )
    }
}
//@desc add trans
//@route POST /api/v1/trans
//@access Public
exports.addTransaction = async(req,res)=>{
    try {
        const {text,amount}=req.body

        const transaction=await TransactionModel.create(req.body)

        return res.status(201).json(
            {
                success:true,
                data:transaction
            }
        )

    } catch (err) {
       if(err.name==='ValidationError'){
            const messages=Object.values(err.errors).map(val=>val.message)

            return res.status(400).json(
                {
                    success:false,
                    error:messages
                }
            )
       }
       else{
            return res.status(500).json(
                {
                    success:false,
                    error:"Server error"
                }
            )
       } 
    }
}
//@desc GET all trans
//@route GET /api/v1/trans/:id
//@access Public
exports.deleteTransaction = async(req,res)=>{
    res.send("hello!delete transaction")
}