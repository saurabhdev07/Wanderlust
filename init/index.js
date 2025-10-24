const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});

  // Add owner to each object properly
  const listingsWithOwner = initData.data.map((obj) => ({
    ...obj,
    owner: "68e784e8434ba63096eef95b",
  }));

  await Listing.insertMany(listingsWithOwner);
  console.log("data was initialized");
};

initDB();