const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args, tools) => {
    const { body } = await superagent
    .get("http://random.dog/woof.json");
    //.get('https://dog.ceo/api/breeds/image/random');
    link = body.url;
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle("Oh look i found a cuty dog :dog:")
    .setImage(body.url) 
    message.channel.send({embed})
};
module.exports.config = {
    name: "dogs",
    usage: "$dogs",
    accessableby: "Members"
}