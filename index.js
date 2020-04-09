const Discord = require('discord.js');
const Bot = new Discord.Client();

const token = 'Njk3MDgyMTk4MzYwMTk1MjAz.Xo1nLA.Z3RMpDVRnyMcBMpdsNOPYYBVSiI';
const prefix = '!';
var user_ids = [];

Bot.on('ready', () => {
    console.log('Your Bot is online! Gago!');
})

Bot.on('message', msg => {
    console.log(msg.author);
    let message_id = msg.id;

    let args = msg.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'bulig':
            msg.channel.send('!sd --> Self destruct your message in 5 seconds.' + 
                            '!kirom @name --> Silences a user' + 
                            '!unkirom @name --> Unsilences a user' + 
                            '!limpyo --> Removes commands' + 
                            '!limpyo "text" --> Removes commands and recent messages containing "text" (w/o double quotes)' + 
                            '\nMoi bayot!'
            );
            break;

        case 'sd':
            if (msg.author.username != 'JMBot') {
                msg.reply('@everyone Your message will self-destruct in 5 seconds...');

                setTimeout(() => {
                    msg.delete();
                }, 5000);
            };
            break;

        case 'kirom':
            if (msg.author.username != 'JMBot') {
                if (args[1] && msg.mentions.users.first().id) {
                    if (!user_ids.includes(msg.mentions.users.first().id)) {
                        user_ids.push(msg.mentions.users.first().id);
                        msg.channel.send(args[1] + ' is kiromed! Maan!');
                    };
                };
            };
            break;
        case 'unkirom':
            if (msg.author.username != 'JMBot') {
                var look_id = msg.mentions.users.first().id

                if (!save.includes(msg.author.id)) {
                    if (args[1] && look_id) {
                        if (user_ids.includes(look_id)) {
                            user_ids = user_ids.filter(function(e) { return e !== look_id });
                            msg.channel.send(args[1] + ' is unkiromed! press F');
                        };
                    };
                } else {
                    msg.channel.send('pakyu bladi!');
                };
            };
        case 'limpyo':
            if (msg.author.username != 'JMBot') {
                msg.channel.messages.fetch()
                   .then(function(list) {
                        const messagesToDelete = list.filter(msg => msg.content.includes('!'));

                        msg.channel.bulkDelete(messagesToDelete).then(function() {
                            if (args[1]) {
                                const messagesToDelete = list.filter(msg => msg.content.includes(args[1]));
                                msg.channel.bulkDelete(messagesToDelete).then(function() {
                                    msg.channel.send("Hi everything, human na ko manlimpyo. mwah!");
                                });
                            };
                        });
                    }, function(err) {
                        msg.channel.send("ERROR: ERROR CLEARING CHANNEL.");
                    });
            };
            break;
    };

    if(msg.author.username == 'JMBot') {
        if ((msg.content).includes('@everyone Your message will self-destruct in 5 seconds')) {
            let sec = 5;

            setTimeout(() => {
                msg.delete();
                clearInterval(interval);
            }, 5000)

            let interval = setInterval(() => {
                sec = sec - 1;

                let sec_lbl = 'seconds';
                if (sec <= 1) { sec_lbl =  'second' }

                msg.edit('@everyone Your message will self-destruct in ' + sec + ' ' + sec_lbl + '...')
            }, 1000);
        };
    };

    if (user_ids && user_ids.includes(msg.author.id)) {
        msg.delete();
    };
});

Bot.login(token);