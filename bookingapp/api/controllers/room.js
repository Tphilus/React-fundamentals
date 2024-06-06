import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from '../utils/error.js';

export const createRoom = async (req, res, next) => {

    const hotelID = req.params.id;
    const newRoom = new Room(req.body)

    try {
        const saveRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelID, {
                $push: { rooms: saveRoom._id }
            })

        } catch (err) {
            next(err)
        }
        res.status(200).json(saveRoom)
    } catch (err) {
        next(err);
    }
};