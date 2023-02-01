const Mailjet = require("node-mailjet");

export default async function removeNewsletter(req, res) {

    // Init mailjet client
    const mailjet = new Mailjet({
        apiKey: process.env.MAILJET_PUBLIC,
        apiSecret: process.env.MAILJET_SECRET,
    });

    // Remove user from contact list
    const removeFromList = await mailjet
        .post("contact")
        .id(req.body.email)
        .action("managecontactslists")
        .request({
            ContactsLists: [
                {
                    Action: "remove",
                    ListID: "37254",
                },
            ],
        });
    
    res.status(200).json({success: true});
}
