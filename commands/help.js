const Discord = require('discord.js');

exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed()
	.setColor('#FFB6C1')
	.setAuthor('HanaBotJS help', 'https://i.imgur.com/hICIEnz.png', 'https://feellings.eu')
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", "[CLICK TO INVITE BOT TO YOUR SERVER!](https://discord.com/oauth2/authorize?client_id=498261846181019648&permissions=8&scope=bot)")
    .addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', ' Commands:')
    .addField("General - 5", "`$img`, `$math`, `$avatar`, `$serverinfo`, `$duckduckgo`")
    .addField("Games - 2", "`$csgo`, `$csgofloat`")
    .addField("Fun - 9", "`$fart`, `$neko`, `$dogs`, `$cat`, `$kitsune`, `$spank`, `$high-five`, `$kiss`, `$russianroulette`")
    .addField("Admin - 1", "`$deletemsg`")
    .addField("Music - 12", "`$play`, `$stop`, `$pause`, `$skip`, `$queue`, `$nowplaying`, `$joinchannel`, `$deletetrack`, `$volume`, `$playother`, `$ytsearch`")
	.setTimestamp()
	.setFooter('https://github.com/FeelGitHub', 'https://i.imgur.com/hICIEnz.png');

    message.author.send({embed}).catch(e =>{
        if (e) {
        message.channel.send(`Error. You seems to be locking your DMs so I'll send it here instead.`);
        message.channel.send({embed});
        }
      });
      message.reply("Check your DMs!");
}