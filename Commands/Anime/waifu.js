const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    help: {
        name: 'waifu',
        aliases: ['waifu'],
        description: 'Drops random waifu pictures.',
        category: __dirname.split("Commands\\")[1]
    },
    run: async (client, message, args) => {
        await fetch("https://nekos.life/api/v2/img/waifu")
            .then(res => res.json())
            .then(body => {
                const embed = new MessageEmbed()
                    .setColor(config.embedcolor)
                    .setTitle("Here's your Waifu")
                    .setDescription(`${message.author.toString()}`)
                    .setImage(body.url)
                    .setTimestamp()
                    .setFooter(`© കൊച്ചുമുതലാളി `, "https://images.hdqwalls.com/wallpapers/neon-bot-ck.jpg")

                message.channel.send(embed);

            });
    },
};