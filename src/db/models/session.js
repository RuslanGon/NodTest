import { required } from "joi";
import { Schema, model } from "mongoose";

export const sessionSchema = new Schema({
    refreshToken: { type: String, required: true },
    accessToken: { type: String, required: true },
    refreshTokenValidUntil: { type: Date, required: true },
    accessTokenValidUntil: { type: Date, required: true },
    userId: {type: Schema.ObjectId, required: true, unique: true}
}, {
    timestamps: true,
    versionKey: false
});

sessionSchema.method.toJSON = function () {
const obj = this.toObject();
delete obj.password;
return obj;
};

export const Session = model('session', sessionSchema);
