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
	let membersCount = client.guilds.cache.map(guild => guild.memberCount).reduce((a, b) => a + b, 0);
	let channelsCount =  client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
	var myInterval = setInterval(function() {
		client.user.setActivity('in ' + client.guilds.cache.size + ' servers. type h.help for help');
		client.user.setActivity('with ' + membersCount  + ' users. type h.help for help');
		client.user.setActivity('in ' + channelsCount  + ' channels. type h.help for help');
	}, 30000);
	
};