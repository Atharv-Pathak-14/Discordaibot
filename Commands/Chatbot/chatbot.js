const Discord = require('discord.js')
const { db } = require('../../Structures/Database')

module.exports = {
    help: {
        name: 'chatbot',
        aliases: ['chatbot'],
        description: 'Shows the Chatbot config.',
        category:  __dirname.split("Commands\\")[1]
    },
    run: async(client, message) => {
       
        const embedd = new Discord.MessageEmbed()
        .setThumbnail(client.user.avatarURL())
        .setDescription(
          `🤖 ChatBot Configuration 
  
          **${emotes.info} Usage :**
           Type \`${config.prefix}setchatbotchannel\` - To Set a Channel 
           Type \`${config.prefix}disablechatbotchannel\` - To Disable a Channel.
           ChatBot Channel Set - None
  
          **${emotes.info} Examples :**
           \`${config.prefix}setchatbotchannel\` <#${message.channel.id}>
           \`${config.prefix}disablechatbotchannel\` <#${message.channel.id}>`
        )

        .addField(
          "Developer:",
          `**[Click Here!](https://albinpraveen.ml)**`,
          true
        )
        .setTimestamp()
        .setFooter(
          "© കൊച്ചുമുതലാളി",
          "https://images.hdqwalls.com/wallpapers/neon-bot-ck.jpg"
        )
        .setColor(config.embedcolor);
      
       let channel1 = await db.fetch(`chatbot_${message.guild.id}`);
      if(!channel1) return message.channel.send(embedd)
      var sChannel = message.guild.channels.cache.get(channel1);
      let embedvch = "<#" + sChannel.id + ">"
      
      const embed = new Discord.MessageEmbed()
      
        .setThumbnail(client.user.avatarURL())
        .setDescription(
          `**🤖 ChatBot Configuration** 
  
          **${emotes.info} Usage :**
           Type \`${config.prefix}setchatbotchannel\` - To Set a Channel 
           Type \`${config.prefix}disablechatbotchannel\` - To Disable a Channel.
           ChatBot Channel Set - ${embedvch} 
  
          **${emotes.info} Examples :**
           \`${config.prefix}setchatbotchannel\` <#${message.channel.id}>
           \`${config.prefix}disablechatbotchannel\` <#${message.channel.id}>`
                       )

        .addField(
          "Developer:",
          `**[Click Here!](https://albinpraveen.ml)**`,
          true
        )
        .setTimestamp()
        .setFooter(
          "© കൊച്ചുമുതലാളി",
          "https://cdn.discordapp.com/attachments/725019921159028808/739770316754256012/Screenshot_20200803-1459592.png"
        )
        .setColor(config.embedcolor);
      message.channel.send(embed);

    }
}