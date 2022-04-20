const { count } = require("console")
const orderModel= require("../models/orderModel")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")

const createOrder= async function (req, res) {
    let data= req.body;
    let uId = data.userId;
    let pId = data.productId;
    
    let userValid = await userModel.findById(uId)
    if(!userValid) return res.send({msg:"userId invalid"})

    let productValid = await productModel.findById(pId)
    if(!productValid) return res.send({msg:"productId invalid"})
    
    let validation = req.headers.isfreeappuser
    if(validation == "true"){
        data.amount = 0;
       data.isFreeAppUser = true
       let savedData= await orderModel.create(data)
       res.send({msg: savedData})
    }
    if(validation == "false"){
        let productPrice = await productModel.findOne({_id:pId}).select({price:1})
        let userBalance = await userModel.findById(uId).select({balance:1})
        if(productPrice.price > userBalance.balance){
            res.send({msg:"insufficiant balance"})
        }else{
            let deduct = userBalance.balance - productPrice.price
            await userModel.findOneAndUpdate({_id:uId},{balance:deduct})
            data.isFreeAppUser = false
            data.amount = productPrice.price
            let savedData= await orderModel.create(data)
            res.send({msg: savedData})
        }
    }
    

    
}






module.exports.createOrder= createOrder
