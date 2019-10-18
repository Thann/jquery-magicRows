#!/usr/bin/env node
'use strict';

const express = require('express');
const options = {
	port: 3009,
};

console.log(' ==== Starting server ====');
const app = express();
app.use(require('body-parser').json());

// Serve static files
const exStatic = express.static('.');
app.use(function(req, res, next) {
	console.log("=", req.url);
	if (req.url === '/') {
		req.url = 'demo.html';
	}
	exStatic(req, res, next);
});

// Handle errors
app.use(function errorHandler(err, request, response, next) {
	console.error('ERROR:', err);
	next(err);
});

// Handle async errors
if (process.listenerCount('unhandledRejection') === 0) {
	process.on('unhandledRejection', function(err, p) {
		console.error('UHR', err, p);
	});
}

app.listen(options.port, function() {
	console.log(' == Listening on', options.port);
});
