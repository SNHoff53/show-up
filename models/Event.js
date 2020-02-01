const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  eventId: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  upvotes: {
    type: Number
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: Date,
    required: true
  },
  venue: {
    type: String,
    trim: true,
    required: true
  },
  location: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: true
  },
  genre: {
    type: String,
    trim: true,
    required: true
  },
  imgur: {
    type: String,
    trim: true,
    required: true
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

module.exports = mongoose.model("Event", EventSchema);
