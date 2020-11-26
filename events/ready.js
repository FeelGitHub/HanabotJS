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
	var myInterval = setInterval(function() {

		var description = [
			'in ' + client.guilds.cache.size + ' servers. Type h.help for help',
			'with ' + membersCount  + ' users. Type h.help for help',
		];

		client.user.setActivity(description[Math.floor(Math.random()*description.length)]);

		con.query(`UPDATE stats SET stats.value = ${client.guilds.cache.size} WHERE name="servers";`, (err, rows) => {if(err) throw err; })

		con.query(`UPDATE stats SET stats.value = ${membersCount} WHERE name="users";`, (err, rows) => {if(err) throw err; })
		console.log('Servers :'+client.guilds.cache.size+'\nUsers: '+membersCount);
		
	}, 1800000);
	
};