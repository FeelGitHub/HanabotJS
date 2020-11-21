const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to feed them!");
    if (message.mentions.users.first().id == client.user.id && message.author.id !== "214800392339456000") return message.channel.send("I don't eat tho")
    if (message.mentions.users.first().id == client.user.id && message.author.id == "214800392339456000") return message.reply("Baka Dev-san you know bots don't eat >///< Now give me more RAM :3")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/feed");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`${message.mentions.users.first().username}, you got fed by ${message.author.username} OwO`)
    .setImage(body.url) 

    message.channel.send({embed})
};

module.exports.config = {
    name: "Feed",
    description: "Feed someone",
    usage: "h.feed",
    accessableby: "Members"
}