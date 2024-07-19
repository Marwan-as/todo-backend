import mongoose, { Schema } from "mongoose";

const TodoSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Todo", TodoSchema);
