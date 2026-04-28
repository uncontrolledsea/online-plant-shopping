const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
exports.registerUser = async (req, res) => {
  const { name, email, password, isAdmin } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new User({ name, email, password, isAdmin: isAdmin || false });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    // Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d"
    });

    res.json({ token, name: user.name, isAdmin: user.isAdmin });

  } catch (error) {
    res.status(500).send("Server error");
  }
};

// Login
exports.loginUser = async (req, res) => {
  const { email, password, isAdmin } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    if (isAdmin && !user.isAdmin) {
      return res.status(403).json({ msg: "Access denied. You are not registered as an Admin." });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d"
    });

    res.json({ token, name: user.name, isAdmin: user.isAdmin });

  } catch (error) {
    res.status(500).send("Server error");
  }
};