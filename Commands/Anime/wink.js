const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    help: {
        name: 'wink',
        aliases: ['wink'],
        description: 'Winky Wink.',
        category:  __dirname.split("Commands\\")[1]
    },
    run: async(client, message, args) => {
        fetch('https://some-random-api.ml/animu/wink')
        .then(res => res.json())
        .then(response => {
                const embed = new MessageEmbed()
                    .setTitle("Here's your Wink 😉")
                    .setImage(response.link)
                    .setColor(config.embedcolor)
                    .setTimestamp()
                    .setFooter(`© കൊച്ചുമുതലാളി `, "https://images.hdqwalls.com/wallpapers/neon-bot-ck.jpg")
                    .setURL(response.url);
                message.channel.send(embed);
            });
    }
}