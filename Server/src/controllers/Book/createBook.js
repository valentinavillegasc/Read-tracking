const { User, Book } = require("../../db");
const cloudinary = require("cloudinary").v2;
const fs = require("fs").promises;
const path = require("path");

const createBook = async (
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
) => {
  try {
    if (!title || !author || !pages || !gender || !format)
      throw new Error("Missing information");

    const user = await User.findbyPk(userId);

    if (!user) throw new Error("User not found");

    const tempFilePath = path.join(__dirname, "tempFile.jpg");
    await fs.writeFile(tempFilePath, cover);

    const cloudinaryResponse = await cloudinary.uploader.upload(tempFilePath, {
      folder: covers,
    });

    const newBook = await Book.create({
      cover: cloudinaryResponse.secure_url,
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
    });

    await user.addBook(newBook);

    return newBook;
  } catch (error) {
    throw error;
  }
};

module.exports = createBook;
