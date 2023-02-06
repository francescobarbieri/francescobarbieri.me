const Mailjet = require("node-mailjet");
import rp from "request-promise";

export default async function addNewsletter(req, res) {
    // Init mailjet client
    const mailjet = new Mailjet({
        apiKey: process.env.MAILJET_PUBLIC,
        apiSecret: process.env.MAILJET_SECRET,
    });

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
        // Add user to contacts
        const addToContacts = await mailjet.post("contact").request({
            IsExcludedFromCampaigns: false,
            Email: req.body.email,
        });

        // Add user to contact list

        const addToList = await mailjet
            .post("contact")
            .id(req.body.email)
            .action("managecontactslists")
            .request({
                ContactsLists: [
                    {
                        Action: "addForce",
                        ListID: "37254",
                    },
                ],
            });

        // Send welcome email

        const sendEmail = await mailjet
        .post("send", {'version': 'v3.1'})
        .request({
            Messages: [
                {
                    From: {
                        Email: "news@francescobarbieri.blog",
                        Name: "Francesco Barbieri's Blog"
                    },
                    To: [
                        {
                            Email: req.body.email,
                            Name: "Dear Reader"
                        },
                    ],
                    TemplateID: 4561017,
                    Subject: "Welcome"
                }
            ]
        })

        res.status(200).end(String(addToList));
    } else {
        res.status(500).end("catastrofe");
    }
}
