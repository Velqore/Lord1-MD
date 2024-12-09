//base by Valqore
//re-upload? recode? copy code? give credit ya :)
//GitHub: @Valqore
//WhatsApp: +918130784851

const fs = require('fs')
const chalk = require('chalk')


//owmner v card
global.ytname = "YT: Valqore" //ur yt chanel name
global.socialm = "GitHub: Valqore" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname =process.env.Bot_Name || 'Sosuke Aizen', //ur bot name
global.ownernumber = process.env.Owner_number || '918130784851', //ur owner number
global.ownername = process.env.Owner_Name || ' ༺ 𝑉alqore ༻' ,//ur owner name
global.websitex = "https://linktr.ee/Nexus_21"
global.wagc = "....."
global.themeemoji = process.env.themeemoji || '🪀',
global.wm = "Valqore Bot Inc."
global.botscript = 'https://github.com/Valqore/lordBot-MD11', //script link
global.packname = process.env.packname || "Sticker By",
global.author = process.env.author || 'Valqore\n\n',
global.creator = "918130784851"
global.xprefix = process.env.prefix || '$'
global.premium = ["918130784851"] // Premium User
global.hituet = 0
global.theme = process.env.theme || "Aizen", // choose any theme from Aizen, Ichigo, Urahara

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = process.env.autoblocknumber || '92' , //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = process.env.welcome || false //welcome/left in groups
global.anticall = process.env.anticall || false //bot blocks user when called
global.autoswview = process.env.autosview || false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: '𝑐ℎ𝑎𝑙 𝑏𝑟𝑜 𝑏𝑎𝑠𝑠 𝑘𝑎𝑟𝑟 ℎ𝑜𝑔𝑎𝑦𝑎 𝑎𝑏ℎ!',
	nsfw: '𝑁𝑠𝑓𝑤 𝑏𝑎𝑛𝑑 𝑘𝑖𝑦𝑎 ℎ𝑎𝑖 𝑟𝑒 𝑦𝑎ℎ𝑎, 𝑎𝑑𝑚𝑖𝑛 𝑘𝑜 𝑏𝑜𝑙𝑙 𝑜𝑛 𝑘𝑎𝑟𝑛𝑒 𝑘𝑒 𝑙𝑖𝑦𝑒 𝑐ℎ𝑎𝑙𝑙',
    done: '𝐻𝑜𝑔𝑎𝑦𝑎 𝑐ℎ𝑎𝑙𝑜 ❦',
    error: '𝑁𝑎ℎ𝑖 ℎ𝑜𝑟𝑎 𝑏𝑎𝑑𝑚𝑒𝑖𝑛 𝑎𝑎𝑛𝑎!',
    success: '𝑌𝑒 𝑙𝑒 𝑝𝑎𝑘𝑎𝑑.. 𝑜𝑟 𝑘𝑢𝑐ℎ??'
}
//thumbnail
global.thumb = fs.readFileSync(`./ValqoreMedia/theme/${theme}/lordpic.jpg`)

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
