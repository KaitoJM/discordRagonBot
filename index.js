const Discord = require('discord.js');
const Bot = new Discord.Client();

const token = 'Njk3MDgyMTk4MzYwMTk1MjAz.Xo1qyg.r537Z6J87Iee7i6gRi_tuurAYmw';
const prefix = '!';

const botname = 'JMBot';
var status_summ = {};
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
    'padati dati kana liwat',
    'nulets',
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

bot.on('presenceUpdate', (oldMember, newMember) => {
    var date_today = getDate();
    var status = '';
    var unix_date = '';

    newMember.user.presence.activities.forEach((activity) => {
        status = activity.state;
        unix_date = activity.createdTimestamp;
    });

    if (status_summ[newMember.user.id] == undefined) {
        if (status != '') {
            status_summ[newMember.user.id] = {
                'name' : newMember.user.username,
                'statuses' : {
                    [date_today] : [
                        status
                    ]
                }
            };
        };
    } else {
        if (status != '') {
            if (!status_summ[newMember.user.id].statuses[date_today].includes(status)) {
                status_summ[newMember.user.id].statuses[date_today].push(status);
            };
        };
    };
});

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
                            '\n\n!show_statuses --> Displays the statuses of every user on this channel for today whilst not offline(invisible)' + 
                            '\n!nl --> Adds 100 newline and dashes(-) (para dri madakop si moi)' + 
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
                if (args[1] && msg.mentions.users && msg.mentions.users.first().id) {
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
        case 'show_statuses':
            if (msg.author.username != botname) {
                var when = '';

                if (args[1] != '') {
                    if (args[1] == 'tom' || args[1] == 'yest') {
                        when = args[1];
                    }
                }

                var fetched_date = getDate(when);
                var sum_send = '';

                for (const user in status_summ) {
                    sum_send += "<@" + user + ">" + '\n';

                    var statuses_txt = [];
                    for (const status_key in status_summ[user]['statuses'][fetched_date]) {
                        statuses_txt = status_summ[user]['statuses'][fetched_date][status_key];

                            sum_send += '\t - ' + statuses_txt + '\n';
                    };

                    if (!statuses_txt.length) {
                        sum_send += '\t - wara status - \n';
                    };

                    sum_send += '\n';
                };

                if (sum_send != '') {
                    msg.channel.send(sum_send);
                } else {
                    msg.channel.send('wara pa nakasave nga status. gago');
                };
            };
            break;
        case 'nl':
            if (msg.author.username != botname) {
                var text = '';

                for (i = 1; i < 100; i++) {
                    text += '\n-';
                };

                msg.channel.send(text);
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

function getDate(when = '') {
    var datex = new Date();

    if (when == 'yest') {
        datex.setDate(datex.getDate() - 1);
    } else if (when == 'tom') {
        datex.setDate(datex.getDate() + 1);
    };

    var dd = String(datex.getDate()).padStart(2, '0');
    var mm = String(datex.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = datex.getFullYear();

    datex = mm + '/' + dd + '/' + yyyy;

    return datex;
};

Bot.login(token);