const router = require("express").Router();
const chat = require("../models/chat");
const user = require("../models/user.model");

// Endpoint for customers to send a message to the admin
router.post('/', async (req, res) => {
    const { message } = req.body;
  
    try {
      // Find the admin user by their username (assuming the admin has a fixed username)
      const admin = await user.findOne({ name: 'A 9080' });
  
      // Create a new message object and save it to the database
      const newMessage = new chat({
        message,
        sender: req.user.user._id, // The customer's user ID
        receiver: admin._id,
      });
  
      await newMessage.save();
  
      // Send the message back to the client
      res.status(201).json(newMessage);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  // Endpoint for customers to get all their messages
  router.get('/', async (req, res) => {
    try {
      // Find all messages where the customer is the sender or receiver
      const messages = await chat.find({
        $or: [{ sender: req.user.user._id }, { receiver: req.user.user._id }],
      });
  
      // Send the messages back to the client
      res.json(messages);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  // Endpoint for the admin to get all customer messages
  router.get('/admin', async (req, res) => {
    try {
      // Find all messages where the receiver is the admin user
      const messages = await chat.find({ receiver: req.user._id });
  
      // Send the messages back to the client
      res.json(messages);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  // Endpoint for the admin to reply to a customer message
  router.post('/admin/reply', async (req, res) => {
    const { messageId, reply } = req.body;
  
    try {
      // Find the message by its ID
      const message = await chat.findById(messageId);
  
      // Update the message with the admin's reply and save it to the database
      message.reply = reply;
      await message.save();
  
      // Send the updated message back to the client
      res.json(message);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  module.exports = router;