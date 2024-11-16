export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    createdDate: Date;
    lastLogin: Date;
    loginCount: number;
    emailConfirmed: boolean;
  }