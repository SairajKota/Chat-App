const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const http = require('http');
const container = require('./container');

container.resolve(function(users){

    const app = SetupExpress();

    function SetupExpress(){
        const app = express();
        const server = http.createServer(app);
        server.listen(3000, function(){
            console.log('Listening to port 3000..!!')
        })
    
        ConfigureExpress(app);
        const router = require('express').Router();
       //const router = require('express-promise-router')(); A simple wrapper for Express 4's Router that allows middleware to return promises. This package makes it simpler to write route handlers for Express when dealing with promises by reducing duplicate code.
        users.SetRouting(router);
        //test.SetRouting(router); send as param in
        app.use(router);
    }



    function ConfigureExpress(app){
        app.use(express.static('public'));
        app.set('view engine','ejs');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
    }

});