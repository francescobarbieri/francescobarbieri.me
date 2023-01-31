const functions = require("firebase-functions");

exports.checkRecaptcha = functions.https.onRequest((request, response) => {
    
    response.status(200).send("Hi, seems to be working!");
});
