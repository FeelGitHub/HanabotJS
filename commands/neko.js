const Discord = require('discord.js');
const superagent = require('superagent');
exports.run = async (client, message, args, tools) => {
    const { body } = await superagent
    .get("https://nekos.life/api/neko");
    link = body.neko;
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle("Here's Your Neko OwO")
    .setImage(body.neko) 
    message.channel.send({embed})
};
module.exports.config = {
    name: "Neko",
    usage: "h.neko",
    accessableby: "Members"
}