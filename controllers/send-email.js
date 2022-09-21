require("dotenv").config()
const nodemailer = require("nodemailer")

const send_email = async (req, res) => {
    try {
        let to = req.body.email

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.FROM,
                pass: process.env.PASS
            },
        });

        let code = Math.floor(100000 + Math.random() * 900000);

        let mailOptions = {
            from: 'shohjahonsohibov0@gmail.com',
            to: to,
            subject: "Email Verification",
            text: `your verification code: ${code}`,
        };

        transporter.sendMail(mailOptions, function (error) {
            if (error) {
                console.log(error);
            } else {
                res.send("Email sent")
            }
        });
    } catch (error) {
        console.log(error)
    }
}

module.exports = send_email