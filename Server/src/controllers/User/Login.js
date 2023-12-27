const { User } = require("../../db");
const bcrypt = require("bcrypt");

const login = async (email, password) => {
  if (!email || !password) {
    throw new Error("Missing information");
  }

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("User not found");
    }

    if (password === user.password) {
      return {
        message: "Login successful",
        userId: user.id,
      };
    } else {
      throw new Error("Invalid password");
    }
  } catch (error) {
    throw error;
  }
};

module.exports = login;
