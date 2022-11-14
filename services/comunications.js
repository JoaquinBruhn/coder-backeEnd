const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const twilioPhone = process.env.TWILIO_ACCOUNT_PHONE;
const adminEmail = process.env.ADMIN_EMAIL;
const mail_key = process.env.MAIL_KEY;
const nodem_email = process.env.NODEMAILER_EMAIL;
const nodem_pass = process.env.NODEMAILER_PASS;

const { createTransport } = require("nodemailer");
const { loggerApiError, loggerDefault } = require("../middlewares/log4js/class32.js");

const transporter = createTransport({
  // service: "gmail",
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: nodem_email,
    pass: nodem_pass,
  },
});

class Comunications {
  static async sendAdminMail(registerData) {
    try {
      const emailContent = {
        from: nodem_email,
        to: nodem_email,
        subject: "New user registered",
        html: `<h1>${registerData.username}</h1><h4>Email: ${registerData.email}</h4><h4>Phone number: ${registerData.phone}</h4><h4>Age: ${registerData.age}</h4><h4>Address: ${registerData.address}</h4><h4>Cart ID: ${registerData.cart}</h4>`,
      };
      const info = await transporter.sendMail(emailContent);
      loggerDefault.info("Email data:", "n/", info);
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }

  static async informPurchase(userName, userEmail, userPhone, purchase) {
    try {
      let purchaseList = "";
      purchase.map((el) => {
        purchaseList += `<h1>${el.title}</h1><h4>Product ID: ${el._id}</h4><h4>Price: $${el.price}</h4><h4>Stock: ${el.stock}</h4><h4>Description: ${el.description}</h4><h4>Timestamp: ${el.timestamp}</h4><br>`;
      });

      const emailContent = {
        from: nodem_email,
        to: nodem_email,
        subject: `New purchase from ${userName} - ${userEmail}`,
        html: purchaseList,
      };
      const info = await transporter.sendMail(emailContent);
      loggerDefault.info("Email data:", "n/", info);
      client.messages
        .create({ body: `Hello, ${userName} your purchase is being processed.`, from: twilioPhone, to: userPhone })
        .then((message) => console.log(message.sid));
    } catch (error) {
      loggerApiError.error("there has been an error", "n/", error);
    }
  }
}

module.exports = Comunications;
