const bookRouter = require("express").Router();
const uploadMiddleware = require("../handlers/uploadMiddleware");
const createBook = require("../controllers/Book/createBook");

bookRouter.post("/", uploadMiddleware, (req, res) => {
  const {
    title,
    author,
    pages,
    startDate,
    endDate,
    gender,
    format,
    sinopsis,
    review,
    quotes,
    stars,
    userId,
  } = req.body;
  const { buffer: cover } = req.file;
  try {
    const newBook = createBook(
      cover,
      title,
      author,
      pages,
      startDate,
      endDate,
      gender,
      format,
      sinopsis,
      review,
      quotes,
      stars,
      userId
    );
    res.status(200).json({ message: "created", data: newBook });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = bookRouter;
