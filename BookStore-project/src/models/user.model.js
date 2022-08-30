import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    FullName: {
      type: String
    },
    EmailID: {
      type: String,
      unique: true
    },
    Password: {
      type: String
    },
    PhoneNumber: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
