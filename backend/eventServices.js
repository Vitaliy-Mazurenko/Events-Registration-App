import { Events } from "./models/Events.js";

export const updateChat = async ({ id, data }) => {
  return Events.findOneAndUpdate({ id }, data, { new: true });
};
