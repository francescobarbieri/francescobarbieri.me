const mailchimp = require("@mailchimp/mailchimp_marketing");
const crypto = require("crypto");
import rp from "request-promise";

export default async function addNewsletter(req, res) {
    // Recaptcha check
    const recaptchaResult = await rp({
        uri: "https://recaptcha.google.com/recaptcha/api/siteverify",
        method: "POST",
        formData: {
            secret: process.env.RECAPTCHA_SECRET,
            response: req.body.token,
        },
        json: true,
    });

    if (recaptchaResult.success) {

        // Init mailchimp client
        mailchimp.setConfig({
            apiKey: process.env.MAILCHIMP_SECRET,
            server: "us21",
        })

        // Add user to contacts
        const addUser = await mailchimp.lists.setListMember(
            "f2a56fb6ab",
            crypto.createHash("md5").update(req.body.email.toLowerCase()).digest("hex"),
            { email_address: req.body.email, status_if_new: "subscribed"}
        );

        console.log(addUser)

        // Add user to contact list

        // Send welcome email

        res.status(200);
    } else {
        res.status(500).end("catastrofe");
    }
}
