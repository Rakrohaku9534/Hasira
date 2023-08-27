import {getRandom} from "../lib/myfunc.js" 
import {TelegraPh} from '../lib/uploader.js'
import "../settings.js"
import fs from "fs"

export async function register(m,makeid,isCmd,isOwner,body,isCommand){
const user = global.db.data.users[m.sender]
const chat = global.db.data.chats[m.chat] 

if (multi){
var prefix = /^#.!¦|\\^/.test(body) ? body.match(/^#.!¦|\\^/gi) : '.'
var thePrefix = "Multi Prefix"
}                        
//const prefix = '.'

if(isCmd || isOwner){
if (user) {
if (!('name' in user)) user.name = m.pushname
if (!('id' in user)) user.id = m.senderNumber
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.level)) user.level = 1
if (!isNumber(user.hit)) user.hit = 1
if (!isNumber(user.balance)) user.balance = 1500
if (!isNumber(user.limit)) user.limit = 15
if (!isNumber(user.glimit)) user.glimit = 20
if (!('serial' in user)) user.serial = makeid(4).toUpperCase()
if (!isNumber(user.afk)) user.afk = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.pc)) user.pc = 0
if (!('autolevelup' in user)) user.autolevelup = false
if (!isNumber(user.pc)) user.pc = 0
if (!user.grade) user.grade = 'Newbie'

} else {
global.db.data.users[m.sender] = {
name: m.pushname,
id: m.senderNumber,
date: calender,
exp: 100,
level: 1,
hit: 0,
balance: 1500,
limit: 15,
glimit: 20,
serial: makeid(4).toUpperCase(),
lastclaim: 0,
afk: -1,
pc: 0,
grade: 'Newbie',
autolevelup: false 
}





}
}// akhir if(iscmd)






if (m.isGroup){
if (chat) {
if (!('name' in chat)) chat.name = m.groupNmae
if (!isNumber(chat.add)) chat.add = 0
if (!('welcome' in chat)) chat.welcome = false
if (!('detect' in chat)) chat.detect = true
if (!('sWelcome' in chat)) chat.sWelcome = ''
if (!('sBye' in chat)) chat.sBye = ''
if (!('sPromote' in chat)) chat.sPromote = ''
if (!('sDemote' in chat)) chat.sDemote = ''
if (!('desc' in chat)) chat.desc = true
if (!('descUpdate' in chat)) chat.descUpdate = true
if (!('stiker' in chat)) chat.stiker = false
if (!('antiLink' in chat)) chat.antiLink = false
if (!isNumber(chat.expired)) chat.expired = 0
if (!('antiBadword' in chat)) chat.antiBadword = false
if (!('antilinkgc' in chat)) chat.antilinkgc = false
if (!('antispam' in chat)) chat.antispam = false
if (!('antidelete' in chat)) chat.antidelete = false
if (!('antitroli' in chat)) chat.antitroli = false
if (!('antivirtex' in chat)) chat.antivirtex = false
if (!('antitoxic' in chat)) chat.antitoxic = false
if (!('simi' in chat)) chat.simi = false
if (!('viewonce' in chat)) chat.viewonce = false
if (!('banned' in chat)) chat.banned = true
if (!('clear' in chat)) chat.clear = false
if (!isNumber(chat.cleartime)) chat.clearTime = 0
} else global.db.data.chats[m.chat] = {
name: m.groupName,
add: 0,
welcome: false,
detect: true,
sWelcome: '',
sBye: '',
sPromote: '',
sDemote: '',
desc: true,
descUpdate: true,
autostiker: false,
antilink: false,
antilinkgc: false,
antidelete: false,
antiasing: false,
banchat: false,
expired: 0,
antibadword: false,
antitoxic: false,
antispam: false,
antitroli: false,
antivirtex: false,
antihidetag: false,
viewonce: false,
banned: true,
simi: false,
clear: false,
clearTime: 0
}
}

//if (global.db.data) await global.db.write()
  

} //akhir fungsi register