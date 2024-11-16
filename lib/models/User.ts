import { Schema, model, models } from 'mongoose';
import { IUser } from '../interfaces/IUser';



const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: {type: String, required: true, unique: true, maxlength: 10},
  createdDate: { type: Date, default: Date.now },  // Automatically set to the current date
  lastLogin: { type: Date, default: null },         // Updated at each login
  loginCount: { type: Number, default: 0 },         // Incremented with each login
  emailConfirmed: { type: Boolean, default: false },// Set to true when email is confirmed
});

// Before saving, ensure `createdDate` is set (if not already) and `lastLogin` and `loginCount` update on login.
userSchema.pre('save', function(next) {
  if (!this.createdDate) {
    this.createdDate = new Date();
  }
  next();
});

export const User = models.User || model<IUser>('User', userSchema);
