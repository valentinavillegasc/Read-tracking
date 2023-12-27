const userRouter = require("express").Router();
const registerUser = require("../controllers/User/registerUser");
const confirmEmail = require("../controllers/User/confirmEmail");
const login = require("../controllers/User/Login");

//! Register
userRouter.post("/register", async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    const newUser = await registerUser(fullname, email, password);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//!Confirm email
userRouter.get("/confirm/:email/:token", async (req, res) => {
  const { email, token } = req.params;
  try {
    const result = await confirmEmail(email, token);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//!Login

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await login(email, password);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = userRouter;
