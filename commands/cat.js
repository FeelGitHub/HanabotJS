const Discord = require('discord.js');
const superagent = require('superagent');
const sf = require("snekfetch");

exports.run = async (client, message, args) => {
    const { body } = await superagent
    .get("http://aws.random.cat/meow");

    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle("Here's Your Cat")
    .setImage(body.file) 
    message.channel.send({embed});
};

module.exports.config = {
    name: "Cat",
    description: "Send a cute cat",
    usage: "h.cat",
    accessableby: "Members"
}