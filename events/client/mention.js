
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")
const config = require("../../botconfig/main")
const client = require("../../index")
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES"))
    return;


  // mentioned bot

  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {

    let embed = new MessageEmbed()
      .setTitle(`${client.user.username} IS HERE!`)
      .setDescription(`**Hey!! ${message.author.username},**
        > <a:exe_blueheart:1304704319035146281> This Code Is Provided By <@870179991462236170> 

        > <a:exe_dot:1304701925807357972> Don't Know The Prefix: \`${config.prefix}\` 
        > <a:exe_dot:1304701925807357972> If You Don't Know Where to Start Type :**${config.prefix}help**
        > <a:exe_dot:1304701925807357972> If you continue to have problems [Click Here](https://discord.gg/2QDwvbn23X)
        > <a:exe_dot:1304701925807357972> If Bot is not Responding Type : **${config.prefix}ping**`)
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#87CEEB")
      .setFooter(`Thanks For Using Me`)
    const row2 = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setLabel("Youtube")

          .setStyle("LINK")
          .setEmoji("<:exe_youtube:1304700222999363645>")
          .setURL("https://www.youtube.com/@GamerCodeX"),
        new MessageButton()
          .setLabel("Support Server")

          .setStyle("LINK")
          .setEmoji("<:exe_ticket:1304700220675850240>")
          .setURL("https://discord.gg/2QDwvbn23X"),
        new MessageButton()
          .setLabel("Vote me")

          .setStyle("LINK")
          .setEmoji("<:exe_like:1304700217677053952>")
          .setURL("https://discord.gg/2QDwvbn23X")
      )
    message.channel.send({ embeds: [embed], components: [row2] })

  }

})
