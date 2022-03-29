const dotenv = require('dotenv').config()
const { Telegraf } = require('telegraf')
const express = require('express')
const expressApp = express()

const bot = new Telegraf(process.env.BOT_TOKEN)
expressApp.use(bot.webhookCallback('/hoox'))
bot.telegram.setWebhook('https://heimdallv2.pages.dev/hoox')

expressApp.get('/', (req, res) => {
  res.send('Heimdall reconfigured. Pull latest image..... clx/heimdall-v2-edge')
})

expressApp.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
