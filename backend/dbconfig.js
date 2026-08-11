// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//      "mongodb+srv://<johncarterrr001_db_user>:8QmhgpeNLKlvs2lw@cluster0.wwymijo.mongodb.net/?appName=Cluster0"
//     );

//     console.log("✅ Database Connected");
//   } catch (err) {
//     console.log("❌ Error while connecting with database", err);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;



const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 5000
    });

    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.log("❌ Error while connecting with database:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;