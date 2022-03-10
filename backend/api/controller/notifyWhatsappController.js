exports.notifyPatient = async (req, res, next) => {
  const accountSid = "AC7beeac6ed43a82a751a36e9c07b86478";
  const authToken = "edb4ccd01e651334d84a0cba59859cc0";
  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      body: "You have to call your Family Members at 7 PM!",
      from: "whatsapp:+14155238886",
      to: "whatsapp:+917738771175",
    })
    .then((message) => res.status(200).send("Message was sent successfully !"))
    .done();
};
