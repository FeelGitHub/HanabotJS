
const Discord = require('discord.js');
module.exports = (client) => {
	console.log('I am ready to serve you bby!');

	client.user.setStatus('online');

	client.user.setActivity('doing things on ' + client.guilds.cache.size + ' servers, type $help');
};