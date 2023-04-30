const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const chatSchema = new Schema({

  message: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
    default: "Admin",
  },
  reply: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
    
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

const chat = mongoose.model("chat", chatSchema)
module.exports = chat;