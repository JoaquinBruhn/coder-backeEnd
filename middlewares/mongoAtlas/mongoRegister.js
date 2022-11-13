const User = require("../../modals/user");
const bcrypt = require("bcrypt");
const { loggerApiError } = require("../log4js/class32");

function mongoRegister(reqBody) {
  try {
    const { username, email, phone, age, address, password } = reqBody;
    User.findOne({ username }, async (err, user) => {
      if (err) console.log(err);
      if (user) res.render("pages/register-error");
      if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
          username,
          email,
          phone,
          age,
          address,
          password: hashedPassword,
        });

        await newUser.save();
      }
    });
  } catch (error) {
    loggerApiError.error("Register error", "n/", `${error}`);
  }
}

module.exports = mongoRegister;
