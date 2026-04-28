const mongoose = require("mongoose");
const User = require("./models/User");
require("dotenv").config();

async function makeAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB.");
    
    const result = await User.updateMany({}, { isAdmin: true });
    console.log(`Updated ${result.modifiedCount} users to Admin.`);
    
    process.exit(0);
  } catch (error) {
    console.error("Error updating users:", error);
    process.exit(1);
  }
}

makeAdmin();
