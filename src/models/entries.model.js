import mongoose from 'mongoose';

const entrySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
  value: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Entry = mongoose.model('Entry', entrySchema);

export default Entry;
