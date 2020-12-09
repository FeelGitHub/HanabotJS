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
	client.user.setStatus('online');
	client.user.setActivity('h. | ' + client.guilds.cache.size + ' servers.');
	let membersCount = client.guilds.cache.map(guild => guild.memberCount).reduce((a, b) => a + b, 0);
	var myInterval = setInterval(function() {

		client.user.setActivity('h. | ' + client.guilds.cache.size + ' servers.');

		con.query(`UPDATE stats SET stats.value = ${client.guilds.cache.size} WHERE name="servers";`, (err, rows) => {if(err) throw err; })

		con.query(`UPDATE stats SET stats.value = ${membersCount} WHERE name="users";`, (err, rows) => {if(err) throw err; })
		console.log('Servers :'+client.guilds.cache.size+'\nUsers: '+membersCount);
		
	}, 1800000);
	
};