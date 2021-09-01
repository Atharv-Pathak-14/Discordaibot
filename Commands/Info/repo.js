const { MessageEmbed } = require('discord.js');

module.exports = {
    help: {
        name: 'repo',
        aliases: ['repo'],
        description: 'Link to the Github Repository',
        category: __dirname.split("Commands\\")[1]
    },
    run: async (client, message, args) => {

        const embed = new MessageEmbed()
            .setThumbnail(client.user.avatarURL())
            .setDescription("**കൊച്ചുമുതലാളി Bot Project** \n\n<:GitHub:803579137759379497> **കൊച്ചുമുതലാളി Bot is Open Source! [Click Here](https://github.com/ALBINPRAVEEN/Discordaibot) to check the Github!\n" + emotes.flyinghearts + "Contributions are Welcomed, Thanks for supporting me.** ❤️")
            .addField("Invite Link: ", `**[Click Here!](https://discord.com/api/oauth2/authorize?client_id=882156367778021387&permissions=8&scope=bot)**`, true)
            .addField("Developer: ", `**[Click Here!](https://albinpraveen.ml)**`, true)
            .setFooter("© കൊച്ചുമുതലാളി", "https://images.hdqwalls.com/wallpapers/neon-bot-ck.jpg")
            .setColor(config.embedcolor);
        message.channel.send(embed) 
    }
}