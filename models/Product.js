import { model, Schema, models } from "mongoose";

const ProductSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
});

// Check if the model already exists in `models` before defining it
export const Product = models.Product || model('Product', ProductSchema);
