import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: { type: String },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, required: true },
});

export default mongoose.model("User", userSchema);
