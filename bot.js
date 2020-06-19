const Discord = require("discord.js")
const client = new Discord.Client()
client.on('ready', () => {
    client.user.setActivity("Built by jaydan")
})
client.on("message", msg => {
  if (msg.content === "help") {
      msg.reply("This bot is for staff only I am sorry about that :(")
  }
}) 
client.on("message", (message) => {
if (message.content.startsWith("///kick")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send("white_check_mark" + member.displayName + " Was kicked");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied to Lounge Moderation :x:");
        });
    }
});

client.on("message", (message) => {
    if (message.content.startsWith("///ban")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // ban
        member.ban().then((member) => {
            // Successmessage
            message.channel.send(":white_check_mark:" + member.displayName + " Has been banned :white_check_mark: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied to Lounge Moderation :x:");
          });
    }
});

client.on("message", msg => {
  if (msg.content === "///afk") {
    msg.reply("Done your AFK")
  }
})

client.on("message", msg => {
  if (msg.content === "///unafk") {
    msg.reply("Your now not afk")
  }
})

client.on("message", msg => {
  if (msg.content === "///Hi") {
    msg.reply("I just said hi to jaydans computer")
    console.log("Somebody wanted to say hi ");
  }
})



client.login("process.env.BOT_TOKEN");
