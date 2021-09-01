const { MessageEmbed } = require('discord.js');
const Zalgo = require('to-zalgo');

module.exports = {
    help: {
        name: 'zalgo',
        aliases: ['zalgo'],
        description: 'Converts your text into Zalgo ',
        category: __dirname.split("Commands\\")[1]
    },
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setColor(config.embedcolor)
            .setDescription(`${Zalgo(args.join(" "))}`)
            .setTimestamp()
            .setFooter('© കൊച്ചുമുതലാളി ', 'https://images.hdqwalls.com/wallpapers/neon-bot-ck.jpg')
        message.channel.send(embed)
    }
}