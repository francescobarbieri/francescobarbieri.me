const mailchimp = require("@mailchimp/mailchimp_marketing");
const crypto = require("crypto");
const axios = require("axios");

export default async function removeNewsletter(req, res) {
    // Init mailjet client
    mailchimp.setConfig({
        apiKey: process.env.MAILCHIMP_SECRET,
        server: "us21",
    });

    // Unsub contact
    try {

        const unsub = await mailchimp.lists.updateListMember(
            "f2a56fb6ab",
            crypto.createHash("md5").update(req.body.email.toLowerCase()).digest("hex"),
            { status: "unsubscribed" }
        );

        console.log(unsub);

        res.status(200).json({ success: true });
    } catch (e) {
        res.status(500).json({ success: false });
    }
}
