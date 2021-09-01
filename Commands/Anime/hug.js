const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
const { resolveMember } = require('../../Base/Functions')

module.exports = {
    help: {
        name: 'hug',
        aliases: ['hug'],
        description: 'Get a gif for Hugging someone :eyes:.',
        category: __dirname.split("Commands\\")[1]
    },
    run: async (client, message, args) => {

        let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first() : message.author) || message.author;
        await fetch("https://nekos.life/api/v2/img/hug")
            .then(res => res.json())
            .then(body => {
                const embed = new MessageEmbed()
                    .setColor(config.embedcolor)
                    .setTitle("Here's your Hug, 🤗")
                    .setDescription(`${victim} is hugged by ${message.author}`)
                    .setImage(body.url)
                    .setTimestamp()
                    .setFooter(`© കൊച്ചുമുതലാളി `, "https://images.hdqwalls.com/wallpapers/neon-bot-ck.jpg")

                message.channel.send(embed);
            });
    },
};