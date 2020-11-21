const Discord = require('discord.js');
const mysql = require('mysql');
const config = require("../jsonFiles/config.json");

const con = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database,
});

module.exports = (client) => {
	console.log('I am ready to serve you bby!');
	client.user.setStatus('online');
	client.user.setActivity('in' + client.guilds.cache.size + ' servers, type .help for help');
};