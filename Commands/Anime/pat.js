const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js')

module.exports = {
    help: {
        name: 'pat',
        aliases: ['pat'],
        description: 'Patto.',
        category:  __dirname.split("Commands\\")[1]
    },
    run: async(client, message, args) => {

        let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first() : message.author) || message.author;
        await fetch("https://nekos.life/api/v2/img/pat")
            .then(res => res.json())
            .then(body => {
                const embed = new MessageEmbed()
                    .setColor(config.embedcolor)
                    .setTitle("Here's your Pat, 👀")
                    .setDescription(`${message.author} pats ${victim}`)
                    .setImage(body.url)
                    .setTimestamp()
                    .setFooter(`© കൊച്ചുമുതലാളി `, "https://images.hdqwalls.com/wallpapers/neon-bot-ck.jpg")

                message.channel.send(embed);
            });

    }
}