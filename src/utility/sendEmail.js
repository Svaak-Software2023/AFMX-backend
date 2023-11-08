const nodemailer = require("nodemailer");

const sendResetPasswordEmail = (email, subject, data) => {
  try {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = () => {
      return {
        from: process.env.FROM_EMAIL,
        to: email,
        subject: subject,
        html: data,
      };
    };

    // Send email
    transporter.sendMail(mailOptions(), (error, info) => {
      if (error) {
        return error;
      } else {
        return info;
      }
    });
  } catch (error) {
    return error;
  }
};

module.exports = sendResetPasswordEmail;
