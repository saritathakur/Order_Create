import mongoose from 'mongoose';
import Oredr from '../models/order';
const inventoryShema = require("../models/inventoryShema");
import async from 'async';
// create new order
export function createOrder(req, res) {
  const order = new Oredr({
    _id: mongoose.Types.ObjectId(),
    date: req.body.date,
    inventoryId:req.body.inventoryId,
    orderStatus:req.body.orderStatus,
    orderCashPaid:req.body.orderCashPaid,
    numberOfItems:req.body.numberOfItems,
    orderDate:req.body.orderDate,
    userName:req.body.userName,
    userEmail:req.body.userEmail,
    userPhoneNumber:req.body.userPhoneNumber,
    shippingAddressLine1:req.body.shippingAddressLine1,
    shippingAddressLine2:req.body.shippingAddressLine2,
    shippingAddressLine3:req.body.shippingAddressLine3,
    paymentMethod:req.body.paymentMethod,
    paymentStatus:req.body.paymentStatus,
    shippingPinCode: req.body.shippingPinCode,
    shippingCity:req.body.shippingCity,
    shippingState:req.body.shippingState,
    shippingCountry: req.body.shippingCountry,
    shippingCharge:req.body.shippingCharge,
    productsItems: req.body.description,
  });
  let myOrder = new Order.model(order);
  async.waterfall([
    (next)=>inventoryShema.findOne({ _id: myOrder.inventoryId }).lean().exec(next),
    (result, next) => {
      if(result.outOfStock === true){
        res.status(400).json({
          success: false,
          message: 'Product is Out of stock.',
          error: error.message,
        });
      }else{
        myOrder.save((error) => {
          if (error)
              return callback(error, null);
          callback(null, "created successfully");
      });
      }
    }
  ])
} 