// src/tools/mongo.js
import mongoose from 'mongoose';

const connectMongo = async () => {
  try {
    if (mongoose.connection.readyState === 1) return;

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connecté à MongoDB");
  } catch (error) {
    console.error("Erreur de connexion MongoDB :", error);
  }
};

export default connectMongo;