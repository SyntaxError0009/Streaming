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
    .setURL('https://m.twitch.tv/YTdevRayan') // Dast kare ama Maka 
    .setState('HAMA')
    .setName('HAMA')
    .setDetails(`YT DEV HAMA`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1189325229219127346/1195121231230419106/48e1d557cd942fde3d376b399bb6a89b.png?ex=65b2d661&is=65a06161&hm=c01c14ebb7d517900d9ea2deee060e7cac8fa1d0db19742615ea26880eb68462&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('MN ON TOP') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1189325229219127346/1195121231230419106/48e1d557cd942fde3d376b399bb6a89b.png?ex=65b2d661&is=65a06161&hm=c01c14ebb7d517900d9ea2deee060e7cac8fa1d0db19742615ea26880eb68462&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Hama is here') //Text when you hover the Small image
    .addButton('Visa', 'https://discord.com/invite/XrVkwJtUaT')
    .addButton('MN', 'https://discord.com/invite/moon-night01');

  client.user.setActivity(r);
  client.user.setPresence({ status: "online" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `YT DEV HAMA`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const targetGuild = client.guilds.cache.find(guild => guild.id === "1132415107968798730");//lera Away dane Id server
  const targetChannel = targetGuild.channels.cache.find(channel => channel.id === "1188916605342716014");// Lera id channel dane
  const connection = joinVoiceChannel({
    channelId: targetChannel.id,
    guildId: targetGuild.id,
    adapterCreator: targetGuild.voiceAdapterCreator,
  });
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
/// Aghdar ba Token Lera damane Bro Bashe 🔒Secrets
