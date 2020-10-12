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
	client.user.setActivity('doing things on ' + client.guilds.cache.size + ' servers, type $help');

	con.query(`UPDATE funfacts SET funfacts.value = ${client.guilds.cache.size} WHERE name="servers"`, (err, rows) => {
		if(err) throw err;
	})
};