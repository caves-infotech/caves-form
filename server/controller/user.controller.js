const formModel = require("../model/form/form.model");
const parkingFormModel = require("../model/form/parking.model");
const buildingMarginFormModel = require("../model/form/buildingMargin.model");
const potentialFsiFormModel = require("../model/form/potentialFsi.model");
const userModel = require("../model/user.model");
const { setUser, client, transporter, OTPStore } = require("../utils/auth");
const crypto = require("crypto");
const enquiryModel = require("../model/enquiry.model");
const cloudinary = require("cloudinary").v2;

const otpStore = new OTPStore();

async function handleGetUser(req, res) {
  const user = req.user;
  const userMail = req.body.session?.user?.email;
  
  if (!user && !userMail) {
    return res.status(400).json({
      message: "Sign in to get user",
    });
  }

  try {
    if (user) {
      const userData = await userModel.find({ email: user.email });
      return res.status(200).json({
        user: userData,
      });
    } else if (userMail) {
      const userData = await userModel.find({ email: userMail });
      return res.status(200).json({
        user: userData,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error occured in finding user",
    });
  }
}

async function handleUpdateUser(req, res) {
  const user = req.user; // Get user from request
  // const userMail = req.body?.session?.user?.email; // Get email from session
  const userMail = req.body; // Get email from session
  console.log("reqbody: ", userMail);

  // Check if the user is signed in
  if (!user && !userMail) {
    return res.status(400).json({
      message: "Signin to create form",
    });
  }
  console.log(req.body);
  const { email, phone, name } = req.body; 
  const file = req.files?.avatar; 

  // Check if a file was uploaded
  if (!file) {
    return res.status(400).json({ message: "No file uploaded." });
  }

  // Check if a file was uploaded
  if (!file) {
    return res.status(400).json({ message: "No file uploaded." });
  }

  try {
    // Create a promise to upload the file to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      // Use the upload_stream function from Cloudinary
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: "raw", // Specify the file type (raw for PDFs)
          public_id: name, // Optionally set the public ID based on the title
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            return reject(error); // Reject the promise on error
          }
          resolve(result); // Resolve the promise with the upload result
        }
      );

      // Pipe the file data to the upload stream
      // The file.data contains the Buffer data of the file
      uploadStream.end(file.data); // End the stream with the file data
    });

    // Get the secure URL of the uploaded file
    const fileUrl = uploadResult.secure_url;

    const user = await userModel.updateOne({
      name: name,
      email: email,
      phone: phone,
      avatar: fileUrl,
    });

  return res.status(200).json({
    message: "User updated successfully",
  });
} catch (error) {
  console.log("Error: " + error);
  return res.status(500).json({
    message: "Failed to submit enquiry.",
  });
}
}

async function handleSocialAuth(req, res) {
  const { name, email, googleId, image } = req.body;

  try {
    const user = await userModel.find({ email: email });
    let token;

    if (user[0] !== undefined) {      
      token = setUser(user);
      res.cookie("token", token);
      return res.status(200).json({
        message: "User already exist and signed in",
        token: token,
      });
    } else {
      const newUser = await userModel.create({
        name: name,
        email: email,
        phone: 9999999999,
        googleId: googleId,
        avatar: image,
      });

      token = setUser(newUser);
      res.cookie("token", token);
    }

    return res.status(201).json({
      message: "User created successfully",
      token: token,
    });
  } catch (error) {
    console.log("Error storing user in the database", error);
    return res
      .status(500)
      .json({ error: "Error storing user in the database" });
  }
}

async function handleSignup(req, res) {
  const { name, email, phone } = req.body;

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
  });

  const token = setUser(user);
  // res.cookie("token", token);
  res.cookie("token", token, {
    httpOnly: true, // For security, prevents JavaScript access
    secure: process.env.NODE_ENV === "production", // Only send over HTTPS in production
    sameSite: "None", // Allows cross-origin subdomain requests
    domain: ".udcpr.in", // Cookie shared across subdomains
    path: "/", // Available across the entire site
  });

  return res.status(201).json({
    message: "User created successfully",
    token,
  });
}

async function handleSignin(req, res) {
  const tokenHeader = req.cookies?.token;
  if (tokenHeader) {
    return res.status(400).json({
      message: "You are already signed in",
    });
  }

  const { email, emailOtp } = req.body;
  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(401).json({
      message: "Please enter valid Email",
    });
  }

  const otpStoreEmailOtp = otpStore.retrieveOTP(email);
  if (otpStoreEmailOtp == emailOtp) {
    otpStore.removeOTP(email);
    const token = setUser(user);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "None",
      domain: ".udcpr.in",
      path: "/",
    });

    return res.status(200).json({
      message: "signin successfully",
      token,
    });
  } else {
    return res.status(400).json({
      message: "Invalid OTP",
    });
  }
}

async function handleSendOtp(req, res) {
  const { email, phone } = req.body;

  const isEmailExist = await userModel.findOne({ email });
  const isPhoneExist = await userModel.findOne({ phone });

  if (isEmailExist || isPhoneExist) {
    return res.status(400).json({
      message: "User already exist",
    });
  }
  const phoneOtp = crypto.randomInt(100000, 999999).toString();
  const emailOtp = crypto.randomInt(100000, 999999).toString();

  otpStore.storeOTP(phone, phoneOtp);
  otpStore.storeOTP(email, emailOtp);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is ${emailOtp}. It will expire in 10 minutes.`,
  };

  await client.messages
    .create({
      body: `Your OTP is ${phoneOtp}. OTP expires in 10 minutes`,
      from: process.env.PHONE_NUMBER,
      to: "+91" + phone,
    })
    .then((message) => {
      console.log("Phone OTP sent successfully:", message.sid);
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error occurred:", error);
          return res.status(500).json({ message: "Failed to send email OTP" });
        } else {
          console.log("Email OTP sent successfully:", info.response);
          return res.status(200).json({ message: "OTP send Successfully" });
        }
      });
    })
    .catch((error) => {
      console.log("Error occurred:", error);
      return res.status(500).json({ message: "Failed to send phone OTP" });
    });
} 

async function handleSendEmailOtp(req, res) {
  const { email } = req.body;

  const isEmailExist = await userModel.findOne({ email });

  if (!isEmailExist) {
    return res.status(400).json({
      message: "User not exist",
    });
  }
  const otp = crypto.randomInt(100000, 999999).toString();

  otpStore.storeOTP(email, otp);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is ${otp}. It will expire in 10 minutes.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error occurred:", error);
      return res.status(500).json({ message: "Failed to send OTP" });
    } else {
      console.log("Email sent");
      return res.status(200).json({ message: "OTP sent successfully" });
    }
  });
}

function handleVerifyOtp(req, res) {
  const { email, phone, emailOtp, phoneOtp } = req.body;
  if (phoneOtp == "") {
    var otpStoreOtp = otpStore.retrieveOTP(phone);
  }
  const otpStoreEmailOtp = otpStore.retrieveOTP(email);

  if (otpStoreEmailOtp == emailOtp || otpStoreOtp == phoneOtp) {
    if (phoneOtp == "") otpStore.removeOTP(phone);
    otpStore.removeOTP(email);
    return res.status(200).json({
      message: "OTP verified successfully",
    });
  } else {
    return res.status(400).json({
      message: "Invalid OTP",
    });
  }
}

async function handleSignout(req, res) {
  const user = req.user;
  if (user) {
    // res.clearCookie("token");
    res.clearCookie("token", {
      domain: ".udcpr.in", // Ensure domain matches
      path: "/", // Path should match the one used when setting the cookie
      secure: process.env.NODE_ENV === "production", // Match the secure flag
      sameSite: "None", // Same as when the cookie was set
    });
    delete req.headers["authorization"];
    return res.status(200).json({
      message: "Signout successfully",
    });
  } else {
    return res.status(400).json({
      message: "Please login for logout",
    });
  }
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

async function handleGetAllParkingForms(req, res) {
  const user = req.user;

  const userMail = req.body?.session?.user?.email;
  if (!user && !userMail) {
    return res.status(400).json({
      message: "Signin to get all forms",
    });
  }

  try {
    if (user) {
      const forms = await parkingFormModel.find({ user: user.email });
      return res.status(200).json({
        forms: forms,
      });
    } else if (userMail) {
      const forms = await parkingFormModel.find({ user: userMail });
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

async function handleGetAllPotentialFsiForms(req, res) {
  const user = req.user;

  const userMail = req.body?.session?.user?.email;
  if (!user && !userMail) {
    return res.status(400).json({
      message: "Signin to get all forms",
    });
  }

  try {
    if (user) {
      const forms = await potentialFsiFormModel.find({ user: user.email });
      return res.status(200).json({
        forms: forms,
      });
    } else if (userMail) {
      const forms = await potentialFsiFormModel.find({ user: userMail });
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

async function handleGetAllBuildingMarginForms(req, res) {
  const user = req.user;

  const userMail = req.body?.session?.user?.email;
  if (!user && !userMail) {
    return res.status(400).json({
      message: "Signin to get all forms",
    });
  }

  try {
    if (user) {
      const forms = await buildingMarginFormModel.find({ user: user.email });
      return res.status(200).json({
        forms: forms,
      });
    } else if (userMail) {
      const forms = await buildingMarginFormModel.find({ user: userMail });
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

async function handleEnquiryForm(req, res) {
  const user = req.user; // Get user from request
  const userMail = req.body?.session?.user?.email; // Get email from session

  // Check if the user is signed in
  if (!user && !userMail) {
    return res.status(400).json({
      message: "Signin to create form",
    });
  }

  const { message } = req.body; // Get title and message from request body
  const file = req.files?.attachment; // Get the uploaded file

  // Check if a file was uploaded
  if (!file) {
    return res.status(400).json({ message: "No file uploaded." });
  }

  try {
    // Create a promise to upload the file to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      // Use the upload_stream function from Cloudinary
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: "raw", // Specify the file type (raw for PDFs)
          public_id: title, // Optionally set the public ID based on the title
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            return reject(error); // Reject the promise on error
          }
          resolve(result); // Resolve the promise with the upload result
        }
      );

      // Pipe the file data to the upload stream
      // The file.data contains the Buffer data of the file
      uploadStream.end(file.data); // End the stream with the file data
    });

    // Get the secure URL of the uploaded file
    const fileUrl = uploadResult.secure_url;

    // Save the enquiry details to MongoDB, including the file URL
    const response = await enquiryModel.create({
      user: user?.email || userMail, // Use user email or session email
      message: message,
      attachment: fileUrl, // Store the file URL in MongoDB
    });

    console.log(response); // Log the response for debugging

    return res.status(201).json({
      message: "Enquiry created successfully",
      fileUrl: fileUrl, // Include the file URL in the response
    });
  } catch (error) {
    console.log("Error: " + error);
    return res.status(500).json({
      message: "Failed to submit enquiry.",
    });
  }
}

async function handleHomeEnquiryForm(req, res) {
  const user = req.user; 
  const userMail = req.body?.session?.user?.email; 


  const { email, phone, message } = req.body; 
  const file = req.files?.attachment; 

  // Check if a file was uploaded
  if (!file) {
    return res.status(400).json({ message: "No file uploaded." });
  }

  try {
    // Create a promise to upload the file to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      // Use the upload_stream function from Cloudinary
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: "raw", // Specify the file type (raw for PDFs)
          public_id: user, // Optionally set the public ID based on the title
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            return reject(error); // Reject the promise on error
          }
          resolve(result); // Resolve the promise with the upload result
        }
      );

      // Pipe the file data to the upload stream
      // The file.data contains the Buffer data of the file
      uploadStream.end(file.data); // End the stream with the file data
    });

    // Get the secure URL of the uploaded file
    const fileUrl = uploadResult.secure_url;

    // Save the enquiry details to MongoDB, including the file URL
    const response = await enquiryModel.create({
      user: user?.email || userMail || email, // Use user email or session email
      phone: phone,
      message: message,
      attachment: fileUrl, // Store the file URL in MongoDB
    });

    console.log(response); // Log the response for debugging

    return res.status(201).json({
      message: "Enquiry created successfully",
      fileUrl: fileUrl, // Include the file URL in the response
    });
  } catch (error) {
    console.log("Error: " + error);
    return res.status(500).json({
      message: "Failed to submit enquiry.",
    });
  }
}

module.exports = {
  handleGetUser,
  handleUpdateUser,
  handleSocialAuth,
  handleSignup,
  handleSignin,
  handleSendOtp,
  handleSendEmailOtp,
  handleVerifyOtp,
  handleSignout,
  handleGetAllForms,
  handleGetAllParkingForms,
  handleGetAllPotentialFsiForms,
  handleGetAllBuildingMarginForms,
  handleEnquiryForm,
  handleHomeEnquiryForm,
};
