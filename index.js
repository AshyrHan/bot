const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '1458703755:AAFBytKrbZhXowPIpdUghXJeZ15xi7MAG04';

const bot = TelegramBot(TOKEN, {polling:true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Hello from Heroku')
})

