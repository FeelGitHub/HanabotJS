const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

exports.run = (client, message, args) => {
    randomPuppy('awwnime')
    .then(url => {
        const embed = new Discord.MessageEmbed()
        .setImage(url)
        .setColor('#ff9900')
        return message.channel.send({ embed });
   })
}