const functions = require("firebase-functions");
const rp = require('request-promise');
const mailjet = require('node-mailjet')

exports.checkRecaptcha = functions.region('europe-west3').https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    //res.set('Access-Control-Allow-Origin', 'https://francescobarbieri-me.vercel.app/');
    
    if(req.method === 'OPTIONS')
    {
        res.set('Access-Control-Allow-Methods', 'GET');
        res.set('Access-Control-Allow-Headers', 'Content-Type');
        res.set('Access-Control-Max-Age', '3600');
        res.status(204).send('');
    }
    else if(req.method === 'POST')
    {
        mailjet.connect(process.env.MAILJET_PUBLIC, process.env.MAILJET_SECRET);
        const result = await rp({
            uri: 'https://recaptcha.google.com/recaptcha/api/siteverify',
            method: 'POST',
            formData: {
                secret: process.env.RECAPTCHA_SECRET_TEST,
                response: req.body.token
            },
            json: true
        })
        .then(result => {
            if(result.success)
            {
                const firstRequest = mailjet
                    .post("contact", {'version': 'v3'})
                    .request({
                    "IsExcludedFromCampaigns": "false",
                    "Email": req.body.email,
                })

                firstRequest.then((result) => {
                    res.status(200).send(result.body)
                })
                .catch((err) => {
                    res.status(500).send(err.statusCode)
                })

                // ===================================================================
                // Cloud function:
                // 1 - Authentication - CHECKED
                // 2 - Add email to contacts
                // 3 - Add email to list (subscription)
                //
                // ===================================================================
                // Script pitone:
                // 1 - Git commit (per deployare anche su Vercel)
                // 2 - Setup campaign details https://dev.mailjet.com/email/reference/campaigns/drafts#v3_post_campaigndraft_draft_ID_detailcontent
                // 3 - Send a campaign immediatly https://dev.mailjet.com/email/reference/campaigns/drafts#v3_post_campaigndraft_draft_ID_send

            }
            else
            {
                res.status(500).send("ReCAPTCHA failed.");
            }
        });
    }
    else
    {
        res.status(200).send("Please, send a POST request.");
    }
});
