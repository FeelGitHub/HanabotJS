exports.run = async (client, message, args) => {
    try {
        let msg = await message.channel.send('<@'+message.author.id+'>');
        
        let embed = new client.embed('normal', {
            title: 'Ping',
            description: `Message Trip: ${msg.createTimestamp - message.createTimestamp}ms
            Websocket Heartbeat: ${Math.floor(client.pings[0])}ms
            Average Websocket Heartbeat: ${Math.floor(client.pings.average())}ms`
        });

        msg.edit(embed);
    } catch (err) {
        message.channel.send('There was an error!\n' + err).catch();
    }
};
