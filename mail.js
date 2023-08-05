const nodemailer = require("nodemailer");
require("dotenv").config();

// module.exports = async () => {
 
// }

const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: false,
    auth: {
      user: process.env.email,
      pass: process.env.password
    }
});

var mailOptions = {
    from: process.env.email,
    to: 'dipeshraval0007@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
});