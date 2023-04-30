const router = require("express").Router();
const chat = require("../models/chat");

router.route('/').get(async (req, res) => {
  try {
    //const senderId = req.query.senderId;
    const messages = await chat.find({}).populate("sender", "name")

    // Send the messages back to the client
    res.json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Endpoint for customers to send a message to the admin
router.post('/', async (req, res) => {

  const {message, reply, createdAt } = req.body;

  try {
    const newMessage = new chat({
      message: message,
      reply: reply,
      createdAt: createdAt
    });

    await newMessage.save();

    // Send the message back to the client
    res.status(201).json(newMessage);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});
  
  module.exports = router;