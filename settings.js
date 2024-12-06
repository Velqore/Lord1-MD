//base by Velqore
//re-upload? recode? copy code? give credit ya :)
//GitHub: @Velqore
//WhatsApp: +918130784851

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: Velqore" //ur yt chanel name
global.socialm = "GitHub: Velqore" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'lord Bot MD V11' //ur bot name
global.ownernumber = '918130784851' //ur owner number
global.ownername = ' ༺ 𝑉𝒆𝒍𝒒𝒐𝒓𝒆 ༻' //ur owner name
global.websitex = "https://linktr.ee/Nexus_21"
global.wagc = "....."
global.themeemoji = '🪀'
global.wm = "Valqore Bot Inc."
global.botscript = 'https://github.com/Velqore/lord1-MD' //script link
global.packname = "Sticker By"
global.author = " Velqore\n\n+918130784851"
global.creator = "918130784851@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["918130784851"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
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
global.thumb = fs.readFileSync('./VelqoreMedia/theme/lordpic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
