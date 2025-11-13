const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");

const options = {
  auth: {
    api_key: process.env.SENDGRID_API_KEY,
  },
};

const transporter = nodemailer.createTransport(sgTransport(options));

module.exports = async (userEmail, subject, htmlTemplate) => {
  try {
    const mailOptions = {
      from: process.env.APP_EMAIL_ADDRESS,
      to: userEmail,
      subject,
      html: htmlTemplate,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent via SendGrid:", info);
  } catch (error) {
    console.log("SendGrid Error:", error);
    throw error;
  }
};
