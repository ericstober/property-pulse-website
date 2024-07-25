import { Schema, model, model } from "mongoose";

const MessageSchema = new Schema(
  {
    sender: {
      type: Schema.Type.ObjectId,
      ref: "User",
      required: true,
    },
    recipient: {
      type: Schema.Type.ObjectId,
      ref: "User",
      required: true,
    },
    property: {
      type: Schema.Type.ObjectId,
      ref: "Property",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phone: {
      type: String,
    },
    body: {
      type: String,
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Message = models.Message || model("Message", MessageSchema);

export default Message;
