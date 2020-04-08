const Discord = require('discord.js');
const Bot = new Discord.Client();

const token = 'Njk3MDgyMTk4MzYwMTk1MjAz.XoyIIQ.FK8-61KfNaAQ_4AcT2Idfl-VwG8';

Bot.on('ready', () => {
    console.log('Your Bot is online! Gago!');
})

Bot.on('message', msg => {
    console.log(msg.author);
    let message_id = msg.id;

    if ((msg.content).includes('!bulig')) {
        msg.reply('!sd --> Self destruct your message in 5 seconds. \nMoi bayot!');
    }

    if ((msg.content).includes('!sd') && (msg.author.username != 'JMBot')) {
        msg.reply('Your message will self-destruct in 5 seconds...');

        setTimeout(() => {
            msg.delete();
        }, 5000);
    }

    if(msg.author.username == 'JMBot') {
        if ((msg.content).includes('Your message will self-destruct in 5 seconds')) {
            let sec = 5;

            setTimeout(() => {
                msg.delete();
                clearInterval(interval);
            }, 5000)

            let interval = setInterval(() => {
                sec = sec - 1;

                let sec_lbl = 'seconds';
                if (sec <= 1) { sec_lbl =  'second' }

                msg.edit('Your message will self-destruct in ' + sec + ' ' + sec_lbl + '...')
            }, 1000);
        }
    }

    // if(msg.author.id == '430745967998795777') {
    //     msg.delete();
    // }


})

Bot.login(token);