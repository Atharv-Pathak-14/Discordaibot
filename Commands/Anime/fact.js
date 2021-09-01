const { MessageEmbed } = require("discord.js");
const AnimeFact = require("anime-facts");
const api = new AnimeFact(config.FACT_API)

module.exports = {
    help: {
        name: 'fact',
        aliases: ['fact'],
        description: 'Gets random Anime Facts.',
        category: __dirname.split("Commands\\")[1]
    },
    run: async (client, message, args) => {

        api.getFact().then((r) => {
            const embed = new MessageEmbed()
                .setColor(config.embedcolor)
                .setTitle("Did you know?")
                .setThumbnail(
                    "https://media.discordapp.net/attachments/711250719675645962/721640740136026202/uhjhyj.gif"
                )
                .setDescription(r.fact)
                .setFooter(`© കൊച്ചുമുതലാളി `, "https://images.hdqwalls.com/wallpapers/neon-bot-ck.jpg")
                .setTimestamp()

            message.channel.send(embed);
        });
    },
};