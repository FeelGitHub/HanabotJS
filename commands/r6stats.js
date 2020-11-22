const R6StatsAPI = require('r6statsapi').default;
const Discord = require('discord.js');
const config = require("../jsonFiles/config.json");
const API = new R6StatsAPI(config.R6stats_APIKEY);

function secToTime(secs) {
  let d = secs / 8.64e4 | 0;
  let H = (secs % 8.64e4) / 3.6e3 | 0;
  let m = (secs % 3.6e3)  / 60 | 0;
  let s = secs % 60;
  let z = n=> (n < 10? '0' : '') + n;
  return `${d}d ${z(H)}h ${z(m)}m`
}

exports.run = async (client, message, args) =>{
    let userStats = await API.getGenericStats(args[0], args[1], 'all').catch(e => {
      message.channel.send('There was an unexpected error. Please try again later.')
      return;
    })
    if(args[1] == 'pc' || args[1] == 'PC'){
      var icon = "https://i.imgur.com/BSc4Ft5.png";
    } else if (args[1] == 'ps4' || args[1] == 'PS4'){
      var icon = "https://i.imgur.com/BSc4Ft5.png";
    } else if (args[1] == 'xbox' || args[1] == 'XBOX'){
      var icon = "https://i.imgur.com/BSc4Ft5.png";
    } else {
      message.channel.send("Please use : h.r6stats <username> <pc, xbox, ps4>");
      return true;
    }

    if(!userStats) {
      message.channel.send(`No stats for the username \`${args[0]}\` on \`${args[1]}\` could be found.`)
      return;
    }
        
    if(userStats.status === 'error') {
      if(userStats.error === 'no_records_found') {
        message.channel.send(`No stats for the username \`${args[0]}\` on \`${args[1]}\` could be found.`)
        return;
      } else {
        message.channel.send('There was an unexpected error. Please try again later.')
        return;
      }
    }

    const embed = new Discord.MessageEmbed()
      .setColor('#ffcccc')
      .setTitle('View Full Stats for '+userStats.username)
      .setURL('https://r6stats.com/stats/'+userStats.uplay_id)
      .setAuthor(userStats.username, 'https://i.imgur.com/BSc4Ft5.png', 'https://r6stats.com/stats/'+userStats.uplay_id)
      .setThumbnail('https://ubisoft-avatars.akamaized.net/'+userStats.uplay_id+'/default_146_146.png')
      .addFields(
        { name: 'About', 
        value: '**Level**: '+ userStats.progression.level
        +'\n**Playtime**: '+ secToTime(userStats.stats.general.playtime)
        +'\n**Alpha Pack Chance**: '+ userStats.progression.lootbox_probability
        , inline: true},
        { name: 'Kills/Deaths', 
        value: '**Kills**: '+ userStats.stats.general.kills
        + '\n**Deaths**: '+ userStats.stats.general.deaths
        +'\n**Assists**: '+ userStats.stats.general.assists
        +'\n**K/D**: '+ userStats.stats.general.kd
        , inline: true},
        { name: 'Wins/Losses', 
        value: '**Wins**: '+ userStats.stats.general.wins
        +'\n**Losses**: '+ userStats.stats.general.losses
        +'\n**W/L**: '+ userStats.stats.general.wl
        , inline: true},
        { name: 'Kills Breakdown', 
        value: '**Headshots**: '+ userStats.stats.general.headshots
        +'\n**Blind Kills**: '+ userStats.stats.general.blind_kills
        +'\n**Melee Kills**: '+ userStats.stats.general.melee_kills
        +'\n**Penetration Kills**: '+ userStats.stats.general.penetration_kills
        , inline: true},
        { name: 'Misc.', 
        value: '**Revives**: '+ userStats.stats.general.revives
        +'\n**Suicides**: '+ userStats.stats.general.suicides
        +'\n**Barricades**: '+ userStats.stats.general.barricades_deployed
        +'\n**Reinforcements**: '+ userStats.stats.general.reinforcements_deployed
        +'\n**Rappel Breaches**: '+ userStats.stats.general.rappel_breaches
        +'\n**DBNOs**: '+ userStats.stats.general.dbnos
       , inline: true}
     )
     .setTimestamp()
     .setFooter('Stats Provided by R6Stats.com', 'https://imgur.com/20Rpbxv.png')

     message.channel.send(embed);
     
  }

module.exports.config = {
  name: "R6stats",
  usage: "h.r6stats <username> <pc, xbox, ps4>",
  accessableby: "Members"
}