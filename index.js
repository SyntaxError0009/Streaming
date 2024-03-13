const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1193148904104001576')
    .setType('LISTENING')
    .setURL('https://m.twitch.tv/HamaisHere') // Dast kare ama Maka 
    .setState('HAMA')
    .setName('HAMA')
    .setDetails(`DEV HAMA`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/avatars/476666339927523329/48e1d557cd942fde3d376b399bb6a89b.png?size=1024') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Las Vegas ON TOP') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/avatars/476666339927523329/48e1d557cd942fde3d376b399bb6a89b.png?size=1024') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Hama is here') //Text when you hover the Small image
    .addButton('Las v', 'https://discord.com/invite/las-vegas')
    .addButton('Las v', 'https://discord.com/invite/las-vegas');

  client.user.setActivity(r);
  client.user.setPresence({ status: "online" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `DEV HAMA`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 10000); // Update every second
});

const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const targetGuild = client.guilds.cache.find(guild => guild.id === "1186730870699196566");//lera Away dane Id server
  const targetChannel = targetGuild.channels.cache.find(channel => channel.id === "1212816059082473512");// Lera id channel dane
  const connection = joinVoiceChannel({
    channelId: targetChannel.id,
    guildId: targetGuild.id,
    adapterCreator: targetGuild.voiceAdapterCreator,
  });
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
/// Aghdar ba Token Lera damane Bro Bashe 🔒Secrets
