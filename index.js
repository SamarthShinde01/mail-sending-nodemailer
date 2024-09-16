const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	secure: true,
	host: "smtp.gmail.com",
	port: 465,
	auth: {
		user: "samarthsshinde@gmail.com",
		pass: "uuhmrmxucqtznaot",
	},
});

const sendMail = async (to, sub, msg) => {
	await transporter.sendMail({
		to: to,
		subject: sub,
		html: msg,
	});

	console.log("mail send");
};

sendMail("samarthsshinde@gmail.com", "testing mail sending", "hello sam bhai");
