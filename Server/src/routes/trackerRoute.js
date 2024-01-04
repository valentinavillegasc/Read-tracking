const trackerRouter = require("express").Router();
const createTrack = require("../controllers/Tracker/createTracker");

//!Create track
trackerRouter.post("/", async (req, res) => {
  const { startPage, endPage, date, userId } = req.body;

  try {
    const newTrack = createTrack(startPage, endPage, date, userId);

    res.status(200).json({ message: "created", data: newTrack });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = trackerRouter;
