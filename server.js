
const Discord = require('discord.js');
 const ytdl = require('ytdl-core');

 const client = new Discord.Client();

 client.on('ready', () => {

   console.log(`Logged in as ${client.user.tag}!`); 
 
   console.log(`[Start] ${new Date} `);
     console.log(`Bot Name | ${client.user.tag}`); 
 });

 client.on('message', message => {
     if (message.content === '!play') {
         if (message.channel.type === 'dm') return;

         const voiceChannel = message.member.voice.channel;

         if (!voiceChannel) {
             return message.reply('please join a voice channel first!');
         }

         voiceChannel.join().then(connection => { 
       
     const stream = ytdl('https://www.youtube.com/watch?v=AgG2TDn1Ohs', { filter: 'audioonly' }); 
             const dispatcher = connection.play(stream,{seek:0,volume:1}); 
 message.react('✅')
client.user.setActivity('علي جابر',{type:'LISTENING'})
           dispatcher.on('finish', () => voiceChannel.leave()); 
         });
     }
 });
client.on('message', message => {
     if (message.content === '!stop') {
const voiceChannel = message.member.voice.channel;
if (!voiceChannel) {
             return message.reply('please join a voice channel first!');
         }
voiceChannel.leave()
  message.react('✅')
}
}
 );
 client.on('message', message => {
     if (message.content === '!play2') {
         if (message.channel.type === 'dm') return;

         const voiceChannel = message.member.voice.channel;

         if (!voiceChannel) {
             return message.reply('please join a voice channel first!');
         }

         voiceChannel.join().then(connection => { 
       
     const stream = ytdl('https://www.youtube.com/watch?v=j1UCZt0z6PE', { filter: 'audioonly' }); 
             const dispatcher = connection.play(stream,{seek:0,volume:1}); 
 message.react('✅')
client.user.setActivity('هأنذا بدون موسيقى',{type:'LISTENING'});

           dispatcher.on('finish', () => voiceChannel.leave()); 
         });
     }
 });
client.on('message', message => {
     if (message.content === '!play3') {
         if (message.channel.type === 'dm') return;

         const voiceChannel = message.member.voice.channel;

         if (!voiceChannel) {
             return message.reply('please join a voice channel first!');
         }

         voiceChannel.join().then(connection => { 
       
     const stream = ytdl('https://www.youtube.com/watch?v=9-oGnGaI9Ps', { filter: 'audioonly' }); 
             const dispatcher = connection.play(stream,{seek:0,volume:1}); 
 message.react('✅')
client.user.setActivity('ياسر الدوسري',{type:'LISTENING'})
           dispatcher.on('finish', () => voiceChannel.leave()); 
         });
     }
 });
 client.login('NDg4NDk2NjM2MTYzNzg0NzA0.W5Wx8Q.tTtA_h4Xfpjj83z1LN8a3kkTqF0');
