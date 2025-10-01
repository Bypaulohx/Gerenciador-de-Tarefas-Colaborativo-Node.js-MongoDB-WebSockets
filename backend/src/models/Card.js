import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
  content: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Card', cardSchema);
