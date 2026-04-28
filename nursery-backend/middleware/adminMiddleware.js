const User = require("../models/User");

module.exports = async function (req, res, next) {
  try {
    const user = await User.findById(req.user);

    if (!user || !user.isAdmin) {
      return res.status(403).json({ msg: "Admin access denied" });
    }

    next();
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};