const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if(args && args.length > 1){
        message.channel.send(`${message.author.username} has paid their respect for **${args.join(' ')}** <:MafuHearty:596554617349865493>`)
    }else{
        message.channel.send(`${message.author.username} has paid their respect <:MafuHearty:596554617349865493>`)
    }
};
module.exports.config = {
    name: "F",
    description: "Paid some respect",
    usage: "h.f",
    accessableby: "Members"
}