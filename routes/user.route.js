const express = require('express');
const User = require('../models/user.model.js');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const showAll = await User.find();
    res.status(200).json(showAll);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) =>
{
  try {
    const { name, email, text } = req.body;
    const userAdded = await User.create({
      name: name,
      email: email,
      text: text,
    });
    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
})

module.exports = router;