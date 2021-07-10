const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "kick",
  aliases: [],
  description: "Kick a kickworthy member!",
  usage: "Kick <Mention Member>",
  run: async (client, message, args) => {
    //Start

    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send(
        "You don't have the perms to kick LMAO."
      );

    let Member = message.mentions.users.first();

    if (!Member)
      return message.channel.send(
        "Mention a member that you wish to kick pls."
      );

    if (!message.guild.members.cache.get(Member.id))
      return message.channel.send("That user doesn't exist, try again.");

    if (Member.id === message.author.id)
      return message.channel.send("Um... lets not kick ourselves.");

    if (Member.id === client.user.id)
      return message.channel.send("You want to kick me, eh? F*ck you.");

    if (Member.id === message.guild.owner.user.id)
      return message.channel.send("STOP TRYING TO KICK THE OWNER HE CAN BAN YOU Y'KNOW!");

    let Reason = args.slice(1).join(" ");

    let User = message.guild.member(Member);

    if (!User.kickable)
      return message.channel.send("Meh, I can't kick that guy.");

    try {
      console.log(`Member Is Going To Get Kick!`);

      setTimeout(function() {
        User.kick({ reason: `${Reason || "No Reason Provided!"}` });
      }, 2000);
      let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`Member Kicked!`)
        .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
        .addField(`Kicked Member`, `${Member.tag} (${Member.id})`)
        .addField(`Reason`, `${Reason || "No Reason Provided!"}`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();
      if (User && Member.bot === false)
        Member.send(
          `You've been kicked from **${message.guild.name}** for ${Reason ||
            "No Reason Provided!"}`
        );
      message.channel.send(embed);
      console.log(
        `User: ${Member.tag} (${Member.id}) just got kicked from ${
          message.guild.name
        } for ${Reason || "No Reason Provided!"}`
      );
    } catch (error) {
      return message.channel
        .send(
          "Lol, I can't kick that guy. Maybe the given member's role is higher than mine, idk."
        )
        .then(() => console.log(error));
    }

    //End
  }
};
