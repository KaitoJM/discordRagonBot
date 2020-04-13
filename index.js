const Discord = require('discord.js');
const Bot = new Discord.Client();

const token = 'Njk3MDgyMTk4MzYwMTk1MjAz.Xo1qyg.r537Z6J87Iee7i6gRi_tuurAYmw';
const prefix = '!';

Bot.on('ready', () => {
    console.log('Your Bot is online! Gago!');
})

Bot.on('message', msg => {
    let message_id = msg.id;

    let args = msg.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'bulig':
            msg.reply('\n \
                !sd     --> Self destruct your message in 5 seconds. \n \
                !limpyo --> Clear all Bots messages. \n \
                Moi bayot!'
                );
            break;

        case 'sd':
            if (msg.author.username != 'JMBot') {
                msg.reply('Your message will self-destruct in 5 seconds...');

                setTimeout(() => {
                    msg.delete();
                }, 5000);
            }
            break;

        case 'liya':
            if (msg.author.username != 'JMBot') {
                msg.reply('pakyu! yu kanat dipit may san!');
            }
            break;

        case 'test':
            // const botMessages = msg.channel.messages.filter(msg => msg.author.bot);
            // msg.channel.bulkDelete(botMessages);
            // messagesDeleted = botMessages.array().length; // number of messages deleted
    
            // // Logging the number of messages deleted on both the channel and console.
            // msg.channel.send("Deletion of messages successful. Total messages deleted: " + messagesDeleted);
            // console.log('Deletion of messages successful. Total messages deleted: ' + messagesDeleted)
            break;
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