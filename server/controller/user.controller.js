const formModel = require("../model/form.model");
const userModel = require("../model/user.model");
const { setUser } = require("../utils/auth");

async function handleSocialAuth(req, res) {
  const { name, email, googleId, image } = req.body;

  try {
    // Check if user already exists
    const user = await userModel.find({ email: email });

    if (user) {
      const token = setUser(user);
      res.cookie("token", token);
      return res.status(200).json({
        message: "User already exist and signed in",
        token: token,
      });
    } else {
      // Create a new user if they don't exist
      const newUser = await userModel.create({
        name: name,
        email: email,
        phone: 9999999999,
        googleId: googleId,
        avatar: image,
        password: googleId,
      });

      const token = setUser(newUser);
      res.cookie("token", token);
    }

    return res.status(201).json({
      message: "User created successfully",
      token: token,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error storing user in the database" });
  }
}

async function handleSignup(req, res) {
  const { name, email, phone, password } = req.body;

  const isEmailExist = await userModel.findOne({ email });
  if (isEmailExist) {
    return res.status(400).json({
      message: "User already exist",
    });
  }
  const user = await userModel.create({
    name: name,
    email: email,
    phone: phone,
    password: password,
  });

  const token = setUser(user);
  res.cookie("token", token);

  return res.status(201).json({
    message: "User created successfully",
    user: token,
  });
}

async function handleSignin(req, res) {
  const tokenHeader = req.cookies?.token;
  if (tokenHeader) {
    return res.status(400).json({
      message: "You are already signed in",
    });
  }
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(401).json({
      message: "Please enter valid Email",
    });
  }
  const passwordMatched = await userModel.matchPassword(
    user.password,
    password
  );
  if (!passwordMatched) {
    return res.status(401).json({
      message: "Please enter valid Password",
    });
  }

  const token = setUser(user);
  res.cookie("token", token);

  return res.status(200).json({
    message: "signin successfully",
    token,
  });
}

async function handleGetAllForms(req, res) {
  const user = req.user;

  const userMail = req.body?.session?.user?.email;
  if (!user && !userMail) {
    return res.status(400).json({
      message: "Signin to get all forms",
    });
  }

  try {
    if (user) {
      const forms = await formModel.find({ user: user.email });
      return res.status(200).json({
        forms: forms,
      });
    } else if (userMail) {
      const forms = await formModel.find({ user: userMail });
      return res.status(200).json({
        forms: forms,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error occured in handleGetAllForms",
    });
  }
}

module.exports = {
  handleSocialAuth,
  handleSignup,
  handleSignin,
  handleGetAllForms,
};
