const Mailjet = require("node-mailjet");
const axios = require('axios')

export default async function removeNewsletter(req, res) {

    // Init mailjet client
    const mailjet = new Mailjet({
        apiKey: process.env.MAILJET_PUBLIC,
        apiSecret: process.env.MAILJET_SECRET,
    });

    // Get user ID

    const getUID = await mailjet
        .get("contact",{'version': 'v3'})
        .id(req.body.email)
        .request();

    const UID = String(getUID.body.Data[0].ID);
    
    // Delete contact

    const response = await axios.delete('https://api.mailjet.com/v4/contacts/' + UID, {
        auth: {
            username: process.env.MAILJET_PUBLIC,
            password: process.env.MAILJET_SECRET
        }
    });
    
    res.status(200).json({ success: true});
}
