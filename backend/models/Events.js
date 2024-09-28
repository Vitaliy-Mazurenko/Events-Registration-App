import { Schema, model } from "mongoose";
import { mongoSaveError } from "./hooks.js";

const participantsSchema = new Schema({
  name: String,
  email: String,
  dateOfBirth: Date,
  whereHeard: String,
});
const EventsSchema = new Schema(
  {
		id: String,
		_id: String,
		title: String,
		description: String,
		event_date: Date,
		organizer: String,
		participants: [participantsSchema],
}
);
EventsSchema.post("save", mongoSaveError);
export const Events = model('events', EventsSchema);
