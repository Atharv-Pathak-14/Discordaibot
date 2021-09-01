const { MessageEmbed } = require('discord.js');
const moment = require("moment");
require('moment-duration-format');

module.exports = {
    help: {
        name: 'uptime',
        aliases: ['uptime'],
        description: 'Shows the Bot\'s uptime',
        category: __dirname.split("Commands\\")[1]
    },
    run: async (client, message, args) => {

        let uptime = moment.duration(client.uptime).format("D [ days] h[ hours] m[ minutes] s[ seconds]")

        const duration = moment.duration(client.uptime)
        let bicon = client.user.displayAvatarURL()
        const botembed = new MessageEmbed()
            .setTitle("കൊച്ചുമുതലാളി Bot Project")
            .setColor(config.embedcolor)
            .setDescription(`<a:pyramid:757488922354909184> **കൊച്ചുമുതലാളി has been active for** \`${uptime}\`. \n <a:pyramid:757488922354909184> **The ping is currently** \`${bot.ws.ping} ms\`. \n\n  ❗  **__Attention!__** **കൊച്ചുമുതലാളി is restarting himself after \`10 to 15 hours\` for a good quality and lagless sound!**`)
            .setTimestamp()
            .setFooter('© കൊച്ചുമുതലാളി ', 'https://images.hdqwalls.com/wallpapers/neon-bot-ck.jpg')
            .setThumbnail(bicon);
        message.channel.send(botembed);
    }
}