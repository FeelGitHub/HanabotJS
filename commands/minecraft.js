exports.run = async (client, message, args) => {
    var farts = [
        './sounds/Minecraft/Son1.ogg',
        './sounds/Minecraft/Son2.ogg',
        './sounds/Minecraft/Son3.ogg',
        './sounds/Minecraft/Son4.ogg',
        './sounds/Minecraft/Son5.ogg',
        './sounds/Minecraft/Son6.ogg',
        './sounds/Minecraft/Son7.ogg',
        './sounds/Minecraft/Son8.ogg',
        './sounds/Minecraft/Son9.ogg',
        './sounds/Minecraft/Son10.ogg',
        './sounds/Minecraft/Son11.ogg',
        './sounds/Minecraft/Son12.ogg',
        './sounds/Minecraft/Son13.ogg',
        './sounds/Minecraft/Son14.ogg',
        './sounds/Minecraft/Son15.ogg',
        './sounds/Minecraft/Son16.ogg',
        './sounds/Minecraft/Son17.ogg',
        './sounds/Minecraft/Son18.ogg',
        './sounds/Minecraft/Son19.ogg',
        './sounds/Minecraft/Son20.ogg',
        './sounds/Minecraft/Son21.ogg'
    ];
    
    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(farts[Math.floor(Math.random()*farts.length)], { volume: 1})});
            message.delete();
    } else {
        message.reply('You need to join a voice channel first!');
    }
};

module.exports.config = {
    name: "Minecraft",
    description: "Play a random Minecraft music",
    usage: "$minecraft",
    accessableby: "Members"
}
