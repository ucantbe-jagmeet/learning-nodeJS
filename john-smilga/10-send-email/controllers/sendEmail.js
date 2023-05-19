const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "domenica.strosin@ethereal.email",
      pass: "AxK8PwUVEJgU5JEz6k",
    },
  });

  let info = await transporter.sendMail({
    from: ' "jagmeet singh" <jagmeetsingh29212@gmail.com>  ',
    to: " bar@example.com",
    subject: "Hello",
    html: " <h2>Sending emails with nodejs</h2>",
  });

  res.json(info);
};

module.exports = sendEmail;
