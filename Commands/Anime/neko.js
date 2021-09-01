const fetch = require('node-fetch')
const { MessageEmbed } = require('discord.js');

module.exports = {
    help: {
        name: 'neko',
        aliases: ['neko'],
        description: 'Drops random Neko Pictures.',
        category: __dirname.split("Commands\\")[1]
    },
    run: async (client, message, args) => {

        fetch('https://shiro.gg/api/images/neko')
        .then(res => res.json())
        .then(response => {
                const embed = new MessageEmbed()
                    .setTitle("Here's your Neko")
                    .setImage(response.url)
                    .setColor(config.embedcolor)
                    .setTimestamp()
                    .setFooter(`© കൊച്ചുമുതലാളി `, "https://images.hdqwalls.com/wallpapers/neon-bot-ck.jpg")
                    .setURL(response.url);
                message.channel.send(embed);
            });
    },
};