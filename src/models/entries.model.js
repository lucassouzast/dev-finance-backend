import mongoose from 'mongoose';
import User from './Users';

const entrySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
  value: { type: Number, required: true },
});

const Entry = mongoose.model('Entry', entrySchema);

export default Entry;
