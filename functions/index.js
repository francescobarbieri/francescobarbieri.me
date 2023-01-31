const functions = require("firebase-functions");
const axios = require('axios');

exports.checkRecaptcha = functions.region('europe-west3').https.onRequest((req, res) => {
    
    res.set('Access-Control-Allow-Origin', 'https://francescobarbieri-me.vercel.app/');
    
    if(req.method === 'OPTIONS')
    {
        res.set('Access-Control-Allow-Methods', 'GET');
        res.set('Access-Control-Allow-Headers', 'Content-Type');
        res.set('Access-Control-Max-Age', '3600');
        res.status(204).send('');
    }
    else if(req.method === 'POST')
    {
        axios.post('https://recaptcha.google.com/recaptcha/api/siteverify', {
            response: req.body.token,
            secret: process.env.RECAPTCHA_SECRET,
        }).then( (result) => {
            if(result.success) {
                res.status(200).send("Autenticato!");
            } else {
                res.status(500).send("ReCAPTCHA failed.");
            }
        })

        res.status(200).send("Hi, seems to be working!");
    }
    else
    {
        res.status(500).send("Please, send a POST request.");
    }
});
