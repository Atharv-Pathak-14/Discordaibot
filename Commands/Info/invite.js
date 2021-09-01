const { MessageEmbed } = require('discord.js');

module.exports = {
    help: {
        name: 'invite',
        aliases: ['inv'],
        description: 'Link for Bot\'s Invite',
        category: __dirname.split("Commands\\")[1],
    },
    run: async (client, message, args) => {

        const embed = new MessageEmbed()
            .setThumbnail(client.user.avatarURL())
            .setDescription("**കൊച്ചുമുതലാളി Bot Project** \n\n**👋 Hey!\n Do you want Invite me? [Click Here](https://discord.com/api/oauth2/authorize?client_id=882156367778021387&permissions=8&scope=bot) to Invite me!\nThanks for supporting me.** ❤️")
            .addField("Developer: ", `**[Click Here!](https://albinpraveen.ml)**`, true)

            .setFooter("© കൊച്ചുമുതലാളി", "https://images.hdqwalls.com/wallpapers/neon-bot-ck.jpg")
            .setColor(config.embedcolor);
        message.channel.send(embed)
    }
}
