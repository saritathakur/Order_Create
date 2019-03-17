import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const orderSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  orderStatus: { type: String, required: true, initial: true, noedit: true },
  orderCashPaid: { type: Number, noedit: true },
  numberOfItems: { type: Number, noedit: true },
  orderDate: { type: Date },
  userId: { type: String, required: true, initial: true, noedit: true },
  userIPAddress: { type: String, noedit: true },
  userName: { type: String, noedit: true },
  userPhoneNumber: { type: String, noedit: true },
  userEmail: { type: String, noedit: true },
  paymentMethod: { type: String, noedit: true },
  paymentStatus: { type: String, noedit: true },
  shippingAddressLine1: { type: String, noedit: true },
  shippingAddressLine2: { type: String, noedit: true },
  shippingAddressLine3: { type: String, noedit: true },
  shippingPinCode: { type: Number, noedit: true },
  shippingCity: { type: String, noedit: true },
  shippingState: { type: String, noedit: true },
  shippingCountry: { type: String, noedit: true },
  shippingCharge: { type: Number },
  productsItems: [{
    productSkuCode: String,
    quantity: Number,
    productName: String,
    productId: String,
    category: [String]
  }]
});
export default mongoose.model('Order', orderSchema);