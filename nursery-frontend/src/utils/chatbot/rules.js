export const rules = [
  {
    condition: (i) => i.includes("low water") || i.includes("less water") || i.includes("drought"),
    result: ["aloe", "cactus", "snake", "neem", "jade"],
    reason: "These plants are highly drought-tolerant and need very little water."
  },
  {
    condition: (i) => i.includes("forget to water") || i.includes("forgetful") || i.includes("busy"),
    result: ["cactus", "snake", "jade", "aloe"],
    reason: "These plants survive extended periods without watering — perfect for forgetful owners."
  },
  {
    condition: (i) => i.includes("daily water") || i.includes("water every day"),
    result: ["tulsi", "banana", "hibiscus"],
    reason: "These plants thrive with daily watering."
  },
  {
    condition: (i) => i.includes("once a week") || i.includes("weekly water"),
    result: ["lavender", "aloe", "orchid", "peacelily"],
    reason: "These plants do well with weekly watering."
  },
  {
    condition: (i) => i.includes("overwater") || i.includes("water a lot") || i.includes("moist soil"),
    result: ["fern", "mint", "peacelily", "bamboo"],
    reason: "These plants prefer consistently moist or wet soil."
  },
  {
    condition: (i) => i.includes("rainy season") || i.includes("monsoon"),
    result: ["tulsi", "bamboo", "banana", "hibiscus"],
    reason: "These plants love rain and high humidity during monsoon season."
  },
  {
    condition: (i) => i.includes("water twice") || i.includes("water 2"),
    result: ["rose", "tomato", "basil", "money"],
    reason: "These plants are best watered every 2–3 days."
  },
  {
    condition: (i) => i.includes("no rain") || i.includes("dry area") || i.includes("arid"),
    result: ["cactus", "aloe", "neem", "jade", "bougainvillea"],
    reason: "These plants excel in dry, low-rainfall conditions."
  },
  {
    condition: (i) => i.includes("full sun") || i.includes("direct sun") || i.includes("lots of sunlight"),
    result: ["tulsi", "neem", "rose", "sunflower", "tomato", "cactus"],
    reason: "These plants need 6–8+ hours of direct sunlight daily."
  },
  {
    condition: (i) => i.includes("partial sun") || i.includes("partial shade") || i.includes("some sun"),
    result: ["mint", "jasmine", "chrysanthemum", "marigold"],
    reason: "These plants do well with 3–6 hours of sun per day."
  },
  {
    condition: (i) => i.includes("low light") || i.includes("no window") || i.includes("dark room"),
    result: ["pothos", "snake", "peacelily", "fern"],
    reason: "These plants thrive in low-light indoor environments."
  },
  {
    condition: (i) => i.includes("indirect light") || i.includes("indirect sun") || i.includes("bright room"),
    result: ["pothos", "rubber", "orchid", "spider", "money"],
    reason: "These plants prefer bright but indirect light — away from harsh direct sun."
  },
  {
    condition: (i) => i.includes("shade") || i.includes("no sun"),
    result: ["fern", "peacelily", "pothos", "snake"],
    reason: "These plants can grow in shade or very low-light conditions."
  },
  {
    condition: (i) => i.includes("balcony") || i.includes("terrace"),
    result: ["tulsi", "mint", "basil", "marigold", "lemon"],
    reason: "These plants are perfect for balcony or terrace gardening in containers."
  },
  {
    condition: (i) => i.includes("windowsill"),
    result: ["aloe", "cactus", "jade", "snake", "pothos"],
    reason: "These compact plants are ideal for windowsill placement."
  },
  {
    condition: (i) => i.includes("indoor") || i.includes("inside") || i.includes("inside house"),
    result: ["money", "snake", "pothos", "peacelily", "spider", "rubber"],
    reason: "These are popular, low-maintenance indoor plants."
  },
  {
    condition: (i) => i.includes("outdoor") || i.includes("garden") || i.includes("outside"),
    result: ["rose", "marigold", "sunflower", "hibiscus", "neem", "guava"],
    reason: "These plants thrive outdoors in garden settings."
  },
  {
    condition: (i) => i.includes("apartment") || i.includes("flat") || i.includes("small space"),
    result: ["pothos", "snake", "spider", "aloe", "money"],
    reason: "These compact plants are perfect for apartments and small spaces."
  },
  {
    condition: (i) => i.includes("office") || i.includes("desk") || i.includes("workspace"),
    result: ["snake", "pothos", "spider", "jade"],
    reason: "These low-maintenance plants are ideal for office desks."
  },
  {
    condition: (i) => i.includes("bedroom"),
    result: ["snake", "peacelily", "lavender", "spider"],
    reason: "These plants are great for bedrooms — some even improve sleep quality."
  },
  {
    condition: (i) => i.includes("bathroom"),
    result: ["fern", "pothos", "peacelily", "spider"],
    reason: "These humidity-loving plants thrive in bathrooms."
  },
  {
    condition: (i) => i.includes("kitchen"),
    result: ["mint", "basil", "aloe", "pothos"],
    reason: "These useful plants are great near kitchens for herbs and first-aid."
  },
  {
    condition: (i) => i.includes("hot climate") || i.includes("summer") || i.includes("heat"),
    result: ["cactus", "aloe", "neem", "sunflower", "hibiscus", "bougainvillea"],
    reason: "These plants are excellent at tolerating high heat and hot climates."
  },
  {
    condition: (i) => i.includes("cold") || i.includes("winter") || i.includes("frost"),
    result: ["chrysanthemum", "lavender", "snake", "pothos"],
    reason: "These plants can tolerate or even prefer cooler temperatures."
  },
  {
    condition: (i) => i.includes("tropical") || i.includes("humid") || i.includes("india"),
    result: ["tulsi", "banana", "hibiscus", "mango", "curryleaf", "guava"],
    reason: "These plants are native to or thrive in tropical, humid conditions like India."
  },
  {
    condition: (i) => i.includes("dry") || i.includes("desert") || i.includes("low humidity"),
    result: ["cactus", "aloe", "jade", "lavender"],
    reason: "These drought-tolerant plants do well in dry, low-humidity conditions."
  },
  {
    condition: (i) => i.includes("all season") || i.includes("year round") || i.includes("perennial"),
    result: ["tulsi", "aloe", "snake", "money", "neem"],
    reason: "These plants grow year-round with minimal seasonal care."
  },
  {
    condition: (i) => i.includes("spring") || i.includes("new growth"),
    result: ["rose", "marigold", "sunflower", "chrysanthemum"],
    reason: "These plants bloom beautifully in spring with fresh growth."
  },
  {
    condition: (i) => i.includes("autumn") || i.includes("fall"),
    result: ["chrysanthemum", "marigold"],
    reason: "These plants bloom in autumn and are perfect for fall gardens."
  },
  {
    condition: (i) => i.includes("sandy soil"),
    result: ["cactus", "aloe", "lavender", "neem", "jade"],
    reason: "These plants prefer or tolerate sandy, well-draining soil."
  },
  {
    condition: (i) => i.includes("clay soil") || i.includes("heavy soil"),
    result: ["bamboo", "sunflower", "guava"],
    reason: "These plants are more tolerant of heavier clay soils."
  },
  {
    condition: (i) => i.includes("loamy soil") || i.includes("fertile soil"),
    result: ["tomato", "rose", "tulsi", "basil", "mango"],
    reason: "These plants thrive in rich, loamy, fertile soil."
  },
  {
    condition: (i) => i.includes("well drained") || i.includes("well-drained"),
    result: ["lavender", "cactus", "rose", "lemon", "aloe"],
    reason: "These plants need excellent drainage to prevent root rot."
  },
  {
    condition: (i) => i.includes("potting mix") || i.includes("pot") || i.includes("container"),
    result: ["pothos", "snake", "aloe", "jade", "orchid", "money"],
    reason: "These plants do excellently in containers with standard potting mix."
  },
  {
    condition: (i) => i.includes("water propagate") || i.includes("grow in water"),
    result: ["money", "pothos", "mint"],
    reason: "These plants can easily grow and propagate in water alone."
  },
  {
    condition: (i) => i.includes("medicinal") || i.includes("medicine") || i.includes("herbal"),
    result: ["tulsi", "aloe", "neem", "mint", "curryleaf"],
    reason: "These plants have significant medicinal and herbal properties."
  },
  {
    condition: (i) => i.includes("cook") || i.includes("kitchen herb") || i.includes("edible"),
    result: ["tulsi", "mint", "basil", "curryleaf"],
    reason: "These aromatic herbs are widely used in cooking."
  },
  {
    condition: (i) => i.includes("fruit") || i.includes("fruiting") || i.includes("edible fruit"),
    result: ["mango", "guava", "lemon", "banana", "tomato"],
    reason: "These plants produce edible fruits."
  },
  {
    condition: (i) => i.includes("flower") || i.includes("blooming") || i.includes("colourful"),
    result: ["rose", "marigold", "hibiscus", "sunflower", "chrysanthemum", "bougainvillea", "orchid"],
    reason: "These plants produce vibrant, beautiful flowers."
  },
  {
    condition: (i) => i.includes("fragrant") || i.includes("smell good") || i.includes("aroma") || i.includes("scent"),
    result: ["jasmine", "lavender", "rose", "mint", "tulsi"],
    reason: "These plants are known for their wonderful fragrance."
  },
  {
    condition: (i) => i.includes("air purif") || i.includes("clean air") || i.includes("oxygen"),
    result: ["snake", "pothos", "peacelily", "spider", "rubber", "aloe"],
    reason: "These plants are NASA-tested air purifiers and excellent oxygen producers."
  },
  {
    condition: (i) => i.includes("pest") || i.includes("mosquito") || i.includes("insect repel"),
    result: ["neem", "lavender", "marigold", "tulsi", "mint"],
    reason: "These plants are natural pest and mosquito repellents."
  },
  {
    condition: (i) => i.includes("lucky") || i.includes("good luck") || i.includes("vastu") || i.includes("feng shui"),
    result: ["money", "jade", "tulsi", "bamboo"],
    reason: "These plants are considered lucky and auspicious in various traditions."
  },
  {
    condition: (i) => i.includes("privacy") || i.includes("hedge") || i.includes("fence"),
    result: ["bamboo", "neem", "bougainvillea"],
    reason: "These fast-growing plants make excellent natural privacy screens."
  },
  {
    condition: (i) => i.includes("shade tree") || i.includes("large tree"),
    result: ["neem", "mango", "guava", "banana"],
    reason: "These are large, shade-providing trees suitable for open spaces."
  },
  {
    condition: (i) => i.includes("beginner") || i.includes("easy") || i.includes("first plant") || i.includes("new to"),
    result: ["pothos", "snake", "spider", "marigold", "money"],
    reason: "These are the most forgiving and easiest plants for beginners."
  },
  {
    condition: (i) => i.includes("low maintenance") || i.includes("no maintenance") || i.includes("easy care"),
    result: ["snake", "cactus", "aloe", "pothos", "jade"],
    reason: "These plants require minimal care and attention."
  },
  {
    condition: (i) => i.includes("hard to kill") || i.includes("tough") || i.includes("survive"),
    result: ["snake", "pothos", "aloe", "cactus", "neem"],
    reason: "These are among the most resilient and hard-to-kill plants."
  },
  {
    condition: (i) => i.includes("expert") || i.includes("advanced") || i.includes("challenge"),
    result: ["orchid", "bonsai", "rose"],
    reason: "These plants require more skill and attention — great for experienced growers."
  },
  {
    condition: (i) => i.includes("child") || i.includes("kid") || i.includes("school project"),
    result: ["sunflower", "marigold", "tomato", "spider"],
    reason: "These fast-growing, easy plants are great for children's gardening projects."
  },
  {
    condition: (i) => i.includes("pet safe") || i.includes("cat safe") || i.includes("dog safe") || i.includes("non toxic"),
    result: ["spider", "marigold", "basil", "sunflower"],
    reason: "These plants are non-toxic and safe around cats and dogs."
  },
  {
    condition: (i) => i.includes("toxic") || i.includes("poisonous") || i.includes("avoid pet"),
    result: ["snake", "pothos", "peacelily", "rubber"],
    reason: "⚠️ These popular plants are toxic to pets — keep them out of reach!"
  },
  {
    condition: (i) => i.includes("fast grow") || i.includes("quick grow"),
    result: ["bamboo", "sunflower", "pothos", "money", "marigold"],
    reason: "These plants are among the fastest-growing available."
  },
  {
    condition: (i) => i.includes("slow grow") || i.includes("compact"),
    result: ["cactus", "jade", "orchid", "aloe"],
    reason: "These plants grow slowly and stay compact for a long time."
  },
  {
    condition: (i) => i.includes("climber") || i.includes("vine") || i.includes("trailing"),
    result: ["money", "pothos", "bougainvillea", "jasmine"],
    reason: "These plants are natural climbers or trailers, great for vertical growth."
  },
  {
    condition: (i) => i.includes("tall") || i.includes("big plant") || i.includes("large"),
    result: ["bamboo", "neem", "mango", "banana", "rubber"],
    reason: "These plants grow tall and make a bold statement."
  },
  {
    condition: (i) => i.includes("small plant") || i.includes("mini") || i.includes("tiny"),
    result: ["aloe", "jade", "cactus", "mint", "spider"],
    reason: "These plants stay small and are suitable for tiny spaces."
  },
  {
    condition: (i) => i.includes("spread") || i.includes("ground cover"),
    result: ["mint", "marigold", "spider"],
    reason: "These plants spread easily and work well as ground cover."
  },
  {
    condition: (i) => i.includes("succulent"),
    result: ["aloe", "jade", "cactus"],
    reason: "These are popular succulents that store water in their leaves."
  },
  {
    condition: (i) => i.includes("tulsi") || i.includes("holy basil"),
    result: "tulsi",
    reason: "You asked about Tulsi (Holy Basil) — a sacred and medicinal plant."
  },
  {
    condition: (i) => i.includes("aloe vera") || i.includes("aloe"),
    result: "aloe",
    reason: "You asked about Aloe Vera — great for skincare and burns."
  },
  {
    condition: (i) => i.includes("money plant") || i.includes("pothos"),
    result: "money",
    reason: "You asked about Money Plant (Pothos) — an easy, lucky indoor plant."
  },
  {
    condition: (i) => i.includes("neem"),
    result: "neem",
    reason: "You asked about Neem — a powerful medicinal and pest-repellent tree."
  },
  {
    condition: (i) => i.includes("rose"),
    result: "rose",
    reason: "You asked about Rose — the most beloved flowering plant."
  },
  {
    condition: (i) => i.includes("jasmine"),
    result: "jasmine",
    reason: "You asked about Jasmine — famous for its incredible fragrance."
  },
  {
    condition: (i) => i.includes("cactus"),
    result: "cactus",
    reason: "You asked about Cactus — the ultimate low-maintenance succulent."
  },
  {
    condition: (i) => i.includes("sunflower"),
    result: "sunflower",
    reason: "You asked about Sunflower — cheerful, fast-growing, and sun-loving."
  },
  {
    condition: (i) => i.includes("bamboo"),
    result: "bamboo",
    reason: "You asked about Bamboo — the fastest growing plant on earth."
  },
  {
    condition: (i) => i.includes("lavender"),
    result: "lavender",
    reason: "You asked about Lavender — calming fragrance and drought tolerant."
  },
  {
    condition: (i) => i.includes("mint"),
    result: "mint",
    reason: "You asked about Mint — a fast-spreading culinary herb."
  },
  {
    condition: (i) => i.includes("basil"),
    result: "basil",
    reason: "You asked about Basil — a must-have cooking herb."
  },
  {
    condition: (i) => i.includes("tomato"),
    result: "tomato",
    reason: "You asked about Tomato — a rewarding vegetable to grow at home."
  },
  {
    condition: (i) => i.includes("marigold"),
    result: "marigold",
    reason: "You asked about Marigold — easy to grow and a great companion plant."
  },
  {
    condition: (i) => i.includes("hibiscus"),
    result: "hibiscus",
    reason: "You asked about Hibiscus — vibrant tropical blooms."
  },
  {
    condition: (i) => i.includes("fern"),
    result: "fern",
    reason: "You asked about Fern — lush and beautiful in humid environments."
  },
  {
    condition: (i) => i.includes("snake plant") || i.includes("sansevieria"),
    result: "snake",
    reason: "You asked about Snake Plant — one of the best air purifiers."
  },
  {
    condition: (i) => i.includes("peace lily"),
    result: "peacelily",
    reason: "You asked about Peace Lily — elegant and excellent in low light."
  },
  {
    condition: (i) => i.includes("spider plant"),
    result: "spider",
    reason: "You asked about Spider Plant — non-toxic and great for beginners."
  },
  {
    condition: (i) => i.includes("rubber plant") || i.includes("rubber tree"),
    result: "rubber",
    reason: "You asked about Rubber Plant — a bold, glossy statement plant."
  },
  {
    condition: (i) => i.includes("jade plant") || i.includes("jade"),
    result: "jade",
    reason: "You asked about Jade Plant — long-lived and very low maintenance."
  },
  {
    condition: (i) => i.includes("orchid"),
    result: "orchid",
    reason: "You asked about Orchid — exotic and elegant, but needs special care."
  },
  {
    condition: (i) => i.includes("curry leaf") || i.includes("curry plant"),
    result: "curryleaf",
    reason: "You asked about Curry Leaf — essential in South Indian cooking."
  },
  {
    condition: (i) => i.includes("banana"),
    result: "banana",
    reason: "You asked about Banana — a tropical plant that fruits in 1–2 years."
  },
  {
    condition: (i) => i.includes("lemon") || i.includes("lemon tree"),
    result: "lemon",
    reason: "You asked about Lemon Tree — great for home gardens and balconies."
  },
  {
    condition: (i) => i.includes("guava"),
    result: "guava",
    reason: "You asked about Guava — easy to grow and rich in Vitamin C."
  },
  {
    condition: (i) => i.includes("mango"),
    result: "mango",
    reason: "You asked about Mango — the king of tropical fruits."
  },
  {
    condition: (i) => i.includes("bougainvillea"),
    result: "bougainvillea",
    reason: "You asked about Bougainvillea — drought-tolerant and strikingly colourful."
  },
  {
    condition: (i) => i.includes("chrysanthemum") || i.includes("mum"),
    result: "chrysanthemum",
    reason: "You asked about Chrysanthemum — a classic autumn-blooming flower."
  },
  {
    condition: (i) => i.includes("fertilizer") || i.includes("feed") || i.includes("nutrient"),
    result: ["tomato", "rose", "hibiscus", "banana"],
    reason: "These heavy feeders benefit most from regular fertilizing."
  },
  {
    condition: (i) => i.includes("repot") || i.includes("transplant"),
    result: ["orchid", "rubber", "snake", "money"],
    reason: "These plants commonly need repotting every 1–2 years as they grow."
  },
  {
    condition: (i) => i.includes("propagate") || i.includes("cutting") || i.includes("grow more"),
    result: ["pothos", "mint", "spider", "money", "basil"],
    reason: "These plants are very easy to propagate from cuttings or offshoots."
  },
  {
    condition: (i) => i.includes("attract butterfly") || i.includes("pollinator") || i.includes("bee"),
    result: ["marigold", "lavender", "sunflower", "hibiscus", "jasmine"],
    reason: "These flowering plants attract bees, butterflies, and other pollinators."
  },
  {
    condition: (i) => i.includes("gift") || i.includes("gifting") || i.includes("present"),
    result: ["money", "orchid", "rose", "jade", "lavender"],
    reason: "These plants make beautiful and meaningful gifts."
  },
  {
    condition: (i) => i.includes("religious") || i.includes("pooja") || i.includes("temple") || i.includes("worship"),
    result: ["tulsi", "marigold", "jasmine"],
    reason: "These plants are sacred and commonly used in Indian religious rituals."
  }
];
