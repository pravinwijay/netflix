// src/models/log.js
import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  action: String,        // 'create', 'update', 'delete'
  filmName: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.models.Log || mongoose.model('Log', logSchema);