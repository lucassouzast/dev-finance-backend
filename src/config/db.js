import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('🟢 MongoDB conectado com sucesso');
  } catch (error) {
    console.error('🔴 Erro ao conectar no MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;
