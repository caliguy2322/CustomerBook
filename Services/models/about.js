const mongoose = require("mongoose");

var friendSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
});

const aboutSchema = new mongoose.Schema({
  index: { type: Number },
  guid: { type: String },
  isActive: { type: String },
  balance: { type: String },
  picture: { type: String },
  age: { type: Number },
  eyeColor: { type: String },
  name: { type: String },
  gender: { type: String },
  company: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  about: { type: String },
  registered: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
  tags: [{ type: String }],
  friends: [friendSchema],
  greeting: { type: String },
  favoriteFruit: { type: String },
});

module.exports = mongoose.model("aboutSchema", aboutSchema);
