const bookRouter = require("express").Router();
const uploadMiddleware = require("../handlers/uploadMiddleware");
const createBook = require("../controllers/Book/createBook");
const getBookById = require("../controllers/Book/getbookbyId");

//! Get book by ID
bookRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const book = await getBookById(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//! Create book
bookRouter.post("/", uploadMiddleware, async (req, res) => {
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
    const newBook = await createBook(
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
