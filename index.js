const Discord = require('discord.js');
const Bot = new Discord.Client();

const token = 'Njk3MDgyMTk4MzYwMTk1MjAz.Xo1nLA.Z3RMpDVRnyMcBMpdsNOPYYBVSiI';
const prefix = '!';

const botname = 'JMBot';
var kirom_ids = [];
var iras_id = [];
var iras = [
    'ay barbie! sabi ko na!',
    'pakyu!',
    'gago!',
    'apotanginamo!',
    'guti utin!',
    'panu mo nasabi?',
    'time out',
    'i know how to handle my time',
    'ho a record',
    'wah! i dunt nu!',
    'ksksksksks',
    'em mama',
    'do you really need that?',
    'khwkhwkhwkh',
    'no time for emotion fags',
    'jesas',
    'jesas my internet',
    'angay gadla, guti emu ulok',
    'deep truth',
    'die all',
    'intindiha kasi anay an chat George',
    'diri kasi for improvement imu criticism honestly',
    'waray bayag!'
];

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
                            '\n\n!kirom @name --> Silences a user' + 
                            '\n!unkirom @name --> Unsilences a user (cant unsilence self)' + 
                            '\n\n!limpyo --> Removes recent commands and bots messages' + 
                            '\n!limpyo "text" --> Removes recent commands and bots messages and recent messages containing "text" (w/o double quotes)' + 
                            '\n\n!iras @name --> The bots replies annoying messages everytime the user sends a message' + 
                            '\n!uniras @name --> Removes the user from hell (cant remove self)' + 
                            '\n!view_iras --> View saved annoying messages' + 
                            '\n!add_iras --> Add annoying messages' + 
                            '\n\nMoi bayot!'
            );
            break;

        case 'sd':
            if (msg.author.username != botname) {
                msg.channel.send('@everyone Your message will self-destruct in 5 seconds...');

                setTimeout(() => {
                    msg.delete();
                }, 5000);
            };
            break;

        case 'kirom':
            if (msg.author.username != botname) {
                if (args[1] && msg.mentions.users.first().id) {
                    if (!kirom_ids.includes(msg.mentions.users.first().id)) {
                        kirom_ids.push(msg.mentions.users.first().id);
                        msg.channel.send(args[1] + ' is kiromed! Maan!');
                    };
                };
            };
            break;

        case 'unkirom':
            if (msg.author.username != botname) {
                var look_id = msg.mentions.users.first().id

                if (!kirom_ids.includes(msg.author.id)) {
                    if (args[1] && look_id) {
                        if (kirom_ids.includes(look_id)) {
                            kirom_ids = kirom_ids.filter(function(e) { return e !== look_id });
                            msg.channel.send(args[1] + ' is unkiromed! press F');
                        };
                    };
                } else {
                    msg.channel.send('pakyu bladi!');
                };
            };
            break;

        case 'limpyo':
            if (msg.author.username != botname) {
                msg.channel.messages.fetch()
                   .then(function(list) {
                        const messagesToDelete = list.filter(msg => (msg.author.username == botname || msg.content.includes('!')));

                        msg.channel.bulkDelete(messagesToDelete).then(function() {
                            if (args[1]) {
                                const messagesToDelete = list.filter(msg => msg.content.includes(args[1]));
                                msg.channel.bulkDelete(messagesToDelete).then(function() {
                                    msg.channel.send("Hi everything! human na ko manlimpyo. mwah!");
                                });
                            } else {
                                msg.channel.send("Hi everything! human na ko manlimpyo. mwah!");
                            };
                        }, function(err) {
                            msg.channel.send("error kulira!");
                        });
                    }, function(err) {
                        msg.channel.send("error kulira!");
                    });
            };
            break;
        case 'add_iras':
            if (msg.author.username != botname) {
                if (args[1]) {
                    var new_iras = '';

                    for (i = 1; i < args.length; i++) {
                        new_iras += args[i] + " ";
                    }

                    iras.push(new_iras);
                    msg.reply('thanks for the new iras');
                };
            };
            break;
        case 'view_iras':
            if (msg.author.username != botname) {
                msg.channel.send(iras);
            };
            break;
        case 'iras':
            if (msg.author.username != botname) {
                if (args[1] && msg.mentions.users.first().id) {
                    if (!iras_id.includes(msg.mentions.users.first().id)) {
                        iras_id.push(msg.mentions.users.first().id);
                        msg.channel.send(args[1] + ' is doomed.');
                    };
                };
            };
            break;
        case 'uniras':
            if (msg.author.username != botname) {
                var look = msg.mentions.users.first().id;

                if (!iras_id.includes(msg.author.id)) {
                    if (args[1] && look) {
                        if (iras_id.includes(look)) {
                            iras_id = iras_id.filter(function(e) { return e !== look });
                            msg.channel.send(args[1] + ' is good');
                        };
                    };
                } else {
                    msg.reply('enenye kene');
                };
            };
            break;
        case 'new_khwkhwkhkwhkwh':
            if (msg.author.username != botname) {
            };
            break;
    };

    if (msg.author.username == botname) {
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

    if (kirom_ids && kirom_ids.includes(msg.author.id)) {
        msg.delete();
    };

    if (iras_id && iras_id.includes(msg.author.id)) {
        var key = Math.floor((Math.random() * iras.length));
        msg.reply(iras[key]);
    };
});

Bot.login(token);