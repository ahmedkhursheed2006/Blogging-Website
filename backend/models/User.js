import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: function() { return this.authType !== "google"; } },
  email: { type: String, required: true, unique: true },
  password: { 
    type: String, 
    required: function() { return this.authType !== "google"; } // Only require password for non-Google users
  },
}, { timestamps: true });

export default model("User", UserSchema);
