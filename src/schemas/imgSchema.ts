import { Schema, model } from "mongoose";

interface Images {
    _id: string;
    buffer: string;
    ext: string;
    createdAt: Date;
}

const imgSchema = new Schema<Images>({
    _id: { type: String, required: true },
    buffer: { type: String, required: true },
    ext: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default model<Images>("Images", imgSchema);