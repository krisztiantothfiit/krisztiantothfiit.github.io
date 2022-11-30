const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors({origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("The server started on port 3000");
});

app.post("/sendmail", (req, res) => {
  let user = req.body;
  sendMail(user, (err, info) => {
    if (err) {
      res.status(400);
      res.send({ error: "Failed to send email" });
    } else {
      res.send(info);
    }
  });
});

const sendMail = (user, callback) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: 'fancyweb2022@gmail.com',
      pass: ''
    }
  });

  const mailOptions = {
    from: user.email,
    to: 'fancyweb2022@gmail.com',
    subject: `Message from ${user.name}`,
    text: `${user.message} ${user.email}`
  };

  transporter.sendMail(mailOptions, function(error, info){
    callback(error, info);
  });

}







