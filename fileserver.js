const express = require('express');
const fs = require('fs');
const https = require('https');
const privateKey = fs.readFileSync('./key.pem', 'utf8');
const certificate = fs.readFileSync('./cert.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };

absolutepathofhtml = __dirname + "/html/";

const app = express();


app.get("/",(req,res) => {

    res.sendFile(absolutepathofhtml+"home.html");
});
httpsServer.listen(8443);








console.log("Server listening https on port 8443");