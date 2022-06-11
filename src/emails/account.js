const maligun = require("mailgun-js");
const api_key = process.env.MALIGUN_API_KEY;
const DOMAIN = "sandboxf0b8a5caf2934e91839bca5051cb1a29.mailgun.org";
const mg = maligun({
  apiKey: api_key,
  domain: DOMAIN,
});

// const data = {
//   from: "Excited User <1yourcrybaby@gmail.com>",
//   to: "1yourcrybaby@gmail.com",
//   subject: "Hello",
//   text: "Testing some Maligun awesomness!",
// };
// mg.messages().send(data, function (error, body) {
//   if (error) {
//     console.log(error);
//   }
//   console.log(body);
// });

const sendWelcomeEmail = (email, name) => {
  mg.messages().send({
    to: email,
    from: "1yourcrybaby@gmail.com",
    subject: "Thanks for joining in",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
  });
};

const sendCancelEmail = (email, name) => {
  mg.messages().send({
    to: email,
    from: "1yourcrybaby@gmail.com",
    subject: "Removing account",
    text: `Hello ${name}. Please, let us know why you are removing account`,
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
