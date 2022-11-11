import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: { type: String },
  username: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  mainImage: { type: String, required: true },
  friends: [{ id: String, username: String, image: String }],
  subscribers: [{ id: String, username: String, image: String }],
  images: { type: Array, required: false },
  videos: { type: Array, required: false },
  musics: { type: Array, required: false },
  articles: { type: Array, required: false},
  status: { type: String, required: false },
  interestedIn: { type: String, reqiured: false },
  phone: { type: String, required: false },
  country: { type: String, required: false },
  city: { type: String, required: false },
  website: { type: String, required: false },
});

export default mongoose.model("User", userSchema);
