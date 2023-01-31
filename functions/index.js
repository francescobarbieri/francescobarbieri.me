const functions = require("firebase-functions");
const axios = require("axios");

exports.checkRecaptcha = functions.https.onRequest((request, response) => {
    
    if(request.method === 'OPTIONS') {
        response.set('Access-Control-Allow-Origin', '*');
        response.status(204).send('');
    }
    else {
        const token = req.body.token;
        const email = req.body.email;

        response.set('Access-Control-Allow-Origin', '*');
        response.send("Hello world")
    }
});
