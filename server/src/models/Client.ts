import mongoose, { Schema, Document } from "mongoose";

export interface IClient extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  email?: string;
  address?: string;
  phone?: string;
}

const clientSchema = new Schema<IClient>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    email: { type: String },
    address: { type: String },
    phone: { type: String },
  },
  { timestamps: true }
);

const Client = mongoose.model<IClient>("Client", clientSchema);
export default Client;
