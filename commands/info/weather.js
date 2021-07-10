const Discord = require("discord.js");
const weather = require("weather-js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "weather",
  aliases: [],
  description: "Shows the weather at a given place.",
  usage: "Weather <Location>",
  run: async (client, message, args) => {
    //Start


    if (!args[0]) return message.channel.send("Ok buddy, please give a location where you want to know the weather. Lets not get into this again.");

    weather.find({ search: args.join(" ") }, function(error, result) {
      if (error) return message.channel.send("Big oof, something went wrong.");

      if (result === undefined || result.length === 0)
        return message.channel.send("Such a noob. Give a valid location next time!");

      var current = result[0].current;
      var location = result[0].location;

      const Weather = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`${location.name} Weather!`)
        .setDescription(`${current.skytext}`)
        .setThumbnail(current.imageUrl)
        .addField("Degree Type", location.degreetype, true)
        .addField("Temperature", `${current.temperature}°`, true)
        .addField("Humidity", `${current.humidity}%`, true)
        .addField("Wind", current.winddisplay, true)
        .addField("Feels Like", `${current.feelslike}°`, true)
        .addField("Timezone", `UTC${location.timezone}`, true)
        .setTimestamp();

      message.channel.send(Weather);
    });

    //End
  }
};
