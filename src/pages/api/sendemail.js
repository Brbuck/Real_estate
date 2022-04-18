
export default function (req, res) {
  const nodemailer = require("nodemailer");

  const { email, message, name, phone } = req.body;
    console.log(req.body);

    let transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "1882ffa11ec524",
        pass: "43a9f50f380f11",
      },
    });

    let emailOptions = {
      from: email,
      to: "teste@sender.com",
      subject: `Message from: ${name} : ${email}`,
      text: message,
      html: `<p>${message} <br/> ${phone}</p>`,
    };

    transport.sendMail(emailOptions, function (err) {
      if (err)
        return res
          .status(400)
          .json({ error: true, msg: "Email not send successfully" });
    });

    return res.json({ error: false, msg: "Email send successfully" });
}
