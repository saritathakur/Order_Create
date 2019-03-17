import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const inventorySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    outOfStock: { type: Boolean },
    manageStock: { type: Boolean },
    currency: { type: Array },
    logo: { type: Object },
    shippingCharge: { type: Number },
    emailCc: { type: String },
    createdOn: { type: String },
    allCategories: { type: Boolean },
    categoriesTree: { type: Array },
    excludeProduct: { type: Array }
});
export default mongoose.model('Inventory', inventorySchema);