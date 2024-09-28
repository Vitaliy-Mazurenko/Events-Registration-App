import ctrlWrapper from "./decorators/ctrlWrapper.js";
import * as eventServices from "./eventServices.js";
import HttpError from "./utils/HttpError.js";
import { Events } from "./models/Events.js";

const getAllEvents = async (req, res) => {
  //   Events.create([]) 
  Events.find()
      .then(events => res.send(events))
      .catch(err => res.send(err));
};

const registration = async (req, res) => {
  const { participants } = req.body;
  const { eventId: id } = req.params;

  if (!participants) {
    throw HttpError(400, "participants is required");
  }
  const newParticipants = await eventServices.updateChat({
    id: id,
    data: {
      participants
    },
  });

  if (!newParticipants) {
    throw HttpError(404, "Event not found " + newParticipants);
  }

  res.status(200).json({
    status: 200,
    message: "newParticipants updated successfully",
    newParticipants,
  });

}; 


export default {
  getAllEvents: ctrlWrapper(getAllEvents),
  registration: ctrlWrapper(registration),
};
