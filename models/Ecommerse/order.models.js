import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPricce: {
        type: Number,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItem: {
        type: [orderItemSchema]
    },
    address: {
        type: String,
        required: TextTrackCue
    },
    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DILIVERED"],
        default: "PENDING"
    }
}, { timestamps });

export const Order = mongoose.model("Order", orderSchema);