const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter;

if (process.env.SMTP_HOST && process.env.SMTP_USER) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
} else {
  // Mock mode for local testing or dev without SMTP configured
  console.log("SMTP not configured. Using Mock email transport.");
  transporter = {
    sendMail: async (mailOptions) => {
      console.log("---------------- MOCK EMAIL SENT ----------------");
      console.log(`To: ${mailOptions.to}`);
      console.log(`Subject: ${mailOptions.subject}`);
      console.log(`Body:\n${mailOptions.text || mailOptions.html}`);
      console.log("-------------------------------------------------");
      return { messageId: "mock-id-12345" };
    },
  };
}

module.exports = transporter;
