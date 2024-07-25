import { Schema, model } from "mongoose";

export const userSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
}, {
    timestamps: true,
    versionKey: false
});

export const user = model('user', userSchema);
