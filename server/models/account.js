import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const accountSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
	email: { type: String, initial: true, required: true, index: true },
	phoneno: {type: Number},
	password: { type: String, initial: true, required: true },
	resetPasswordToken: { type: String, hidden:true },
	resetPasswordExpires: { type: String, hidden:true },
	isReset: { type: Boolean, hidden:true },
	signUpPasswordToken: { type: String, hidden:true },
    isActive: { type: Boolean, hidden:true },
	address1: { type: String },
	address2: { type: String },
	address3: { type: String },
	pinCode: { type: Number },
	city: { type: String },
	state: { type: String },
	country: { type: String },
	store: { type: String, ref: 'Store', required: true, initial: true },
}, 'Role', {
		isAdmin: { type: Boolean, label: 'Is Admin', index: true },
		permission: { type: Object, ref: 'Permission', many: true },
	}
);
export default mongoose.model('Account', accountSchema);