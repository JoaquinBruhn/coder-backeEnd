const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_ACCOUNT_PHONE;
const client = require("twilio")(accountSid, authToken);
const adminEmail = process.env.ADMIN_EMAIL;

client.messages
  .create({ body: "Hi there", from: "+15017122661", to: "+15558675310" })
  .then((message) => console.log(message.sid));

class Comunications {
  static async sendAdminMail(registerData) {
    try {
    } catch (error) {}
  }

  static async informPurchase(userName, userPhone, purchase) {
    client.messages
      .create({ body: "Hello, your purchase is being processed.", from: twilioPhone, to: userPhone })
      .then((message) => console.log(message.sid));
    try {
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Comunications;
