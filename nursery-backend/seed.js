const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./models/Product");

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log("Connected to DB, clearing old products...");
    await Product.deleteMany({});

    console.log("Adding new products...");
    await Product.insertMany([
      {
        name: "Tulsi (Holy Basil)",
        price: 100,
        description: "Sacred Indian medicinal plant used in Ayurveda, boosts immunity.",
        category: "Outdoor",
        image: "/images/tulsi.webp",
        stock: 15,
        sunlight: "Full Sun",
        water: "Daily"
      },
      {
        name: "Neem Plant",
        price: 200,
        description: "Powerful medicinal tree known for antibacterial and antifungal properties.",
        category: "Outdoor",
        image: "/images/neem.jpg",
        stock: 10,
        sunlight: "Full Sun",
        water: "Weekly"
      },
      {
        name: "Money Plant (Indian)",
        price: 120,
        description: "Popular indoor plant in India believed to bring prosperity.",
        category: "Indoor",
        image: "/images/Money_Plant.webp",
        stock: 25,
        sunlight: "Low",
        water: "Weekly"
      },
      {
        name: "Areca Palm",
        price: 350,
        description: "Common Indian indoor palm that improves air quality.",
        category: "Indoor",
        image: "/images/arecapalm.jpg",
        stock: 15,
        sunlight: "Indirect Sunlight",
        water: "Weekly"
      }
    ]);
    console.log("Products seeded successfully!");
    process.exit();
  })
  .catch((err) => {
    console.error("Error seeding products:", err);
    process.exit(1);
  });
