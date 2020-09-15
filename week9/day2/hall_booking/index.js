const express = require("express");
const Joi = require("joi");
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

let rooms = [];
let room_id = 1;
let bookedRooms = [];

app.get("/api/rooms", (req, res) => {
  let result = [];
  rooms.forEach((room) => {
    if (isBooked(room)) {
      let bookedDetails = bookedRooms.filter(
        (bookedRoom) => bookedRoom.roomID == room.id
      );
      bookedDetails = bookedDetails.map((detail) => {
        return {
          customer_name: detail.customer_name,
          date: detail.date,
          startTime: detail.startTime,
          endTime: detail.endTime,
        };
      });
      result.push({
        ...room,
        bookedStatus: true,
        bookingDetails: [...bookedDetails],
      });
    } else {
      result.push({
        ...room,
        bookedStatus: false,
      });
    }
  });
  res.json(result);
});
app.post("/api/rooms", (req, res) => {
  const err = validateRoom(req.body);
  if (err) {
    res.status(400).send("bad request");
  } else {
    rooms.push({
      id: room_id,
      ...req.body,
    });
    res.send({
      message: "room created",
      roomDetails: rooms[rooms.length - 1],
    });
    room_id++;
  }
});

app.get("/api/customers", (req, res) => {
  if (bookedRooms.length > 0) {
    let result = bookedRooms.map((item) => {
      const roomDetails = rooms.find((room) => room.id == item.roomID);
      return {
        customer_name: item.customer_name,
        date: item.date,
        startTime: item.startTime,
        endTime: item.endTime,
        ...roomDetails,
      };
    });
    res.json(result);
  } else {
    res.send("No customers for now");
  }
});

app.post("/api/rooms/book", (req, res) => {
  const err = validateBooking(req.body);
  const startTime = new Date(req.body.startTime);
  const endTime = new Date(req.body.endTime);
  const startHours = startTime.getHours();
  const startMinutes = startTime.getMinutes();
  const endHours = endTime.getHours();
  const endMinutes = endTime.getMinutes();
  const date = new Date(req.body.date).getDate();
  const err1 = checkRoomAvailability(
    date,
    startHours,
    endHours,
    req.body.roomID
  );
  if (err) {
    res.status(400).send("bad request");
  } else if (!err1) {
    res.send("sorry this room is booked for that particular time");
  } else {
    bookedRooms.push({
      ...req.body,
      startTime: `${startHours}:${startMinutes}`,
      endTime: `${endHours}:${endMinutes}`,
    });
    res.send({
      message: "room booked",
      bookingDetails: bookedRooms[bookedRooms.length - 1],
    });
  }
});

app.listen(PORT, () => console.log(`server running on ${PORT}`));

function validateRoom(body) {
  const schema = Joi.object({
    name: Joi.string().required(),
    noOfSeats: Joi.number().min(10).max(100),
    price: Joi.number().required(),
    amenities: Joi.array(),
  });
  const result = schema.validate(body);
  return result.error;
}

function validateBooking(body) {
  const schema = Joi.object({
    customer_name: Joi.string().min(3).required(),
    date: Joi.date().required(),
    startTime: Joi.date().required(),
    endTime: Joi.date().required(),
    roomID: Joi.number().max(room_id).required(),
  });
  const result = schema.validate(body);
  return result.error;
}

function checkRoomAvailability(date, startHours, endHours, roomID) {
  if (bookedRooms.length == 0) {
    return true;
  }
  let rooms = bookedRooms.filter((room) => room.roomID == roomID);
  console.log(rooms);
  if (rooms.length == 0) {
    return true;
  }
  for (let room of rooms) {
    if (room) {
      let startTime = +room.startTime.split(":")[0];
      let endTime = +room.endTime.split(":")[0];
      let startDate = new Date(room.date).getDate();
      if (
        date == startDate &&
        ((startHours >= startTime && startHours <= endTime) ||
          (endHours >= startTime && endHours <= endTime))
      ) {
        return false;
      }
    }
  }
  return true;
}

function isBooked(room) {
  let booked = bookedRooms.find((booked) => booked.roomID == room.id);
  if (booked) {
    return true;
  }
  return false;
}
