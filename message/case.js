"use strict";
import pkg from 'baileys'
const {generateWAMessageFromContent, proto} = pkg;
import toMs from 'ms'
import chalk from 'chalk'
import fs from "fs"
import fse from 'fs-extra'
import moment from "moment-timezone"
import util from "util"
import { exec, spawn } from "child_process"
import axios from "axios"
import yts from "yt-search"
import ra from "ra-api"
import speed from "performance-now"
import ms from "parse-ms"
import calip from 'caliph-api'
import ytdl from 'ytdl-core'
import maker from 'mumaker'
import os from 'os'
import { performance } from 'perf_hooks'
import fetch from 'node-fetch'
import cheerio from  'cheerio'
import request from "request"
import { join, dirname } from 'path'
import path  from 'path'
import ggs from 'google-it'
import gis from 'g-i-s'
import imageToBase64 from 'image-to-base64'
import { Brainly } from "brainly-scraper-v2"
import { Configuration, OpenAIApi } from 'openai'
import { BitlyClient } from 'bitly'
import { delRequireCache } from 'delete-node-require-cache'
import * as logs from './logs.js'
import { createRequire } from 'module'
import { fileURLToPath, URL } from 'url'
import { Sticker, StickerTypes } from 'wa-sticker-formatter'
import { removeBackgroundFromImageFile } from 'remove.bg'
import { Primbon } from 'scrape-primbon'
const primbon = new Primbon()
import { tiktokdl, tiktokdlv2, tiktokdlv3, savefrom, instagramdlv3, instagramdlv2} from '@bochilteam/scraper'
const __dirname = dirname(fileURLToPath(import.meta.url))
var require = createRequire(import.meta.url) //Bring in the ability to create the 'require' method
//===========================================================//
import { formatp,parseMention,getRandom,generateProfilePicture, getCase,runtime,FileSize,h2k, makeid,kyun,randomNomor,jsonformat, isUrl, fetchJson,pickRandom,getGroupAdmins, sleep, getBuffer, reSize } from "../lib/myfunc.js" 
import { bad,thanks,ken,dosa,katamalem,katasiang,katasore,ohayo,devoloper1,ppSewa,ppMenu,ppPrem,ppPrem2,ppRandom,teksspam,tekssalah,katara,katabot,katakawai,kataaii,ppInfo,ppDonat, badword} from '../message/messages.js'
import { getDateId, resetLevelingXp, userXp, userLeveling, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addUserId } from '../lib/user.js'
import { vnToxic, vnSalam, vnBot, vnAra, vnSpam, vnOwner, vnKawai, vnLove } from '../message/vn.js'
import { stikToxic, stikSpam, stikSalam, stikAdmin, stikOwner, stikOtw, stikThanks, stikNot, stikDel } from '../message/stik.js'
import { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } from "../lib/badword.js"
import { maudio, dmusic } from '../message/musik.js' 
import { TelegraPh } from '../lib/uploader.js'
import { UploadFileUgu } from '../lib/uploader.js' 
import _data from "../lib/totalcmd.js"
import _sewa from '../lib/sewa.js'
import _prem from "../lib/premium.js"
import _scrape from '../lib/scraper.js'
import _error from "../lib/totalerror.js"
import _blockcmd from "../lib/blockcmd.js"
import _spam from '../lib/antispam.js'
import _ban from "../lib/banned.js"
//import mess from "./message.js" 
import {register} from "./register.js"
//===========================================================//
//virtex by tsukasa
import { virtex8 } from './virtex.js'
const thumb = fs.readFileSync('./stik/thumb.jpeg')
var publik = false
//===========================================================//
export const Fearless = async(conn, m, chatUpdate, store) => {
try {
	
//Database
const AntiSpam = db.data.antispam
const DataId = db.data.data
const ban = db.data.banned
const premium = db.data.premium
const listcmdblock = db.data.blockcmd 
const listerror = db.data.listerror
const hitnya = db.data.hittoday
const dash = db.data.dashboard 
const anonChat = db.data.anonymous 
const allcommand = db.data.allcommand 
const sewa = db.data.sewa
const spammer = []
const setiker = JSON.parse(fs.readFileSync('./temp/stick.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
//===========================================================//
var Ownerin = `${devoloper1}@s.whatsapp.net`
var ownerNumber = [`${nomerOwner}@s.whatsapp.net` ,`${nomerOwner2}@s.whatsapp.net`,`6285786539008@s.whatsapp.net`,`${conn.user.jid}`]
const Tnow = (new Date()/1000).toFixed(0)
const seli = Tnow - m.messageTimestamp.low
if (seli > Intervalmsg) return console.log((`Pesan ${Intervalmsg} detik yang lalu diabaikan agar tidak nyepam`))

const { type,args,reply,sender,ucapanWaktu,from,botNumber,senderNumber,groupName,groupId,groupMembers,groupDesc,groupOwner,pushname,itsMe,isGroup,mentionByTag,mentionByReply,users,budy,content,body } = m

if (multi){
var prefix = /^#.!¦|\\^/.test(body) ? body.match(/^#.!¦|\\^/gi) : '.'
var thePrefix = "Multi Prefix"
}                        
//const prefix = "."
const isCmd = body.startsWith(prefix)
const isCommand = isCmd? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() :""
const q = args.join(' ')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const isOwner = ownerNumber.includes(sender) || _data.checkDataId ("owner", sender, DataId) 
const command = isOwner? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCommand
const theOwner = sender == Ownerin 
const timestampp = speed();
const latensi = speed() - timestampp
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 
const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
const Input = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false 
const replyCommand = isCmd? isCmd : allcommand.includes(toFirstCase(command))
const selectedButton = (type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : ''
const user = global.db.data.users[m.sender] 
const leveling = global.db.data.level[m.sender] 
const settings = global.db.data.settings['settingbot']

await (await import('./message.js')).default(prefix,command)
await (await import('./allfake.js')).default(m)
register(m,makeid,isCmd,isOwner)
//===========================================================//  
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isText = (type == 'conversation')
const isReaction = (type == 'reactionMessage')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isViewOnce = (type == 'viewOnceMessage')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessage')
//===========================================================//
//Security / Keamanan
const isBotGroupAdmins = isGroup ? m.isBotAdmin : false
const isGroupOwner = isGroup ? m.isRAdmin : false
const isGroupAdmins = isGroup ? m.isAdmin : false
const isAntiLink = isGroup ? db.data.chats[from].antilink : false
const isAntidelete = isGroup ? db.data.chats[from].antidelete : false
const isKickarea = isGroup ? db.data.chats[from].antiasing : false
const isAntilinkGc = isGroup ? db.data.chats[from].antilinkgc : false
const isBanchat = isGroup ? db.data.chats[from].banchat : false 
const isAntiVirtex = isGroup ? db.data.chats[from].antivirtex : false
const isAntihidetag = isGroup ? db.data.chats[from].antihidetag : false
const isAntiViewOnce = isGroup ? db.data.chats[from].viewonce : false
const isBanned = sender? _ban.check(senderNumber, ban) : false
const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
const gcount = isPremium ? gcounti.prem : gcounti.user
const isToxic = isGroup ? db.data.chats[from].antitoxic : false
const isSimi = isGroup ? db.data.chats[from].simi : false
//===========================================================//  
/*
//User 
const userLevel = user? db.data.users[m.sender].level : false
const userExp = user? db.data.users[m.sender].exp : false
const userId = user? db.data.users[m.sender].id : false
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 1000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = user? db.data.users[m.sender].date : false
*/
//===========================================================//  
if(m.myButton) {return}  
conn.readMessages([m.key])
//Presence Online
if (isCmd){
conn.sendPresenceUpdate('recording', from)
} else {
conn.sendPresenceUpdate('recording', from)
}
//===========================================================//
const _toxic = db.data.toxic 
//PP ORANG
try {
var ppimg = await conn.profilePictureUrl(sender, 'image').catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
} catch (err) {
console.log(err)
}
const its = await getBuffer (ppimg)
const dfrply = await reSize(ppimg, 300, 300)
const vid = { url : `${tutorUrl}`, type : "video/mp4" }
//===========================================================//
//Public & Self And Banchat
if (!publik && !itsMe && !isOwner && !theOwner) {return} 
if (isGroup && isBanchat && !itsMe && !isOwner) {return}

//Console log
if(!isCmd && !isAllMedia && !isReaction && budy.length < 8000 && type !== 'protocolMessage') logs.message(conn,m,budy,AntiSpam)
if(isCmd) logs.commands(m,command) 
//===========================================================//  
//Set Quoted
if(Qoted === "ftoko"){
var setQuoted = ftoko
} else if(Qoted === "fkontak"){
var setQuoted = fkontak
} else if(Qoted === "ftext"){
var setQuoted = ftext
}else if(Qoted === "ftroli"){
var setQuoted = ftroli
} else if(Qoted === "floc"){
var setQuoted = floc
} else if(Qoted === "fimage"){
var setQuoted = fimage
} else if(Qoted === "m"){
var setQuoted = m
} else if(Qoted === "fdoc"){
var setQuoted = fdoc
}
const fvn = { key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999","ptt": "true"}}}
const fke = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: {"imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Pesan Rahasia!`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
const bugkontak = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"contactMessage": {
"displayName": "WhatsApp Support",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Support;WhatsApp;;;\nFN:WhatsApp Support\nORG:WhatsApp Support\nTITLE:\nitem1.TEL;waid=6285712408309:+62 857-8653-9008\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:WhatsApp Support\nEND:VCARD"
}}}
const deploy = (teks) => {
conn.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
}
//===========================================================//
//SetReply
const setReply = async(result,memberr = []) =>{ 
let translate = require('@vitalets/google-translate-api');
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi"
  
if(language == "id"){
  
if(!sender.startsWith("62")){
let toks =  translate(result, {to: "en",})
var teks = toks.text
} else {
var teks = result
}

} else {
let toks =  translate(result, {to: language,})
var teks = toks.text
} 
  
let contextInfo = {
mentionedJid: [sender],
forwardingScore: 999, 
isForwarded: false, 
externalAdReply:{
showAdAttribution: true, 
title: `${TextT}`,
body: `${baileysVersion}`,
previewType:"PHOTO",
thumbnail: its,
sourceUrl: `https://tinyurl.com/2mboggsd`
}
}

if(replyType === "web"){
conn.sendMessage(from, {contextInfo, text: teks}, { quoted: m })
} else if(replyType === "web2"){
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}?text=Hallo+bwang`}}, text: teks},{quoted: m})
} else if(replyType === "mess"){
conn.sendMessage(from, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true,text: teks },{quoted: m});
} else if(replyType === "quoted"){
conn.sendMessage(from,{text: teks}, { quoted: setQuoted });
} else {
conn.sendMessage(from, {text: "Error SetReply Tidak Di Temukan"})
}
}


//Button document ✓
conn.sendButDoc = async(id, text1, desc1, gam1, but = [], options,  options1 = {}) => {	
let buff = /^https?:\/\//.test(gam1) ? await getBuffer(gam1) : gam1

const buttonMessage = {
contextInfo: options,
document:{ url: "https://wa.me/6285786539008" },
mimetype: "application/pdf", 
title : "Footer text", 
fileLength : 999999999999, 
pageCount: 0, 
fileName : ` `, 
caption: text1,
footer: desc1,
buttons: but,
headerType: "DOCUMENT",
jpegThumbnail: buff
}
	
return conn.sendMessage(id, buttonMessage,options1)
} 
//===========================================================//	
//RESPON teks spam
const tete = teksspam
const tiks = tete[Math.floor(Math.random() * tete.length)]

//RESPON teks toxic
const toto = bad
const sexx = toto[Math.floor(Math.random() * toto.length)]

//RESPON teks toxic 2
const toda = dosa
const dosax = toda[Math.floor(Math.random() * toda.length)]

//RESPON teks game salah
const slahu = tekssalah
const salahtu = slahu[Math.floor(Math.random() * slahu.length)]

//RESPON teks trimakasih
const tkns = thanks
const tnksbro = tkns[Math.floor(Math.random() * tkns.length)]

//RESPON teks salam kenal
const kentod = ken
const slken = kentod[Math.floor(Math.random() * kentod.length)]

//RESPON teks kata malam
const mlm = katamalem
const nightt = mlm[Math.floor(Math.random() * mlm.length)]

//RESPON teks kata siang
const siank = katasiang
const syiank = siank[Math.floor(Math.random() * siank.length)]

//RESPON teks kata sore
const sorr = katasore
const soray = sorr[Math.floor(Math.random() * sorr.length)]

//RESPON teks kata sAi
const katai = kataaii
const aiblok = katai[Math.floor(Math.random() * katai.length)]

//RESPON teks kata pagi ohayo
const hayio = ohayo
const mrning = hayio[Math.floor(Math.random() * hayio.length)]

//RESPON teks info
const upp = ppInfo
const infoy = upp[Math.floor(Math.random() * upp.length)]

//RESPON teks donasi
const kont = ppDonat
const donat = kont[Math.floor(Math.random() * kont.length)]

//RESPON teks premium 
const prik = ppPrem2
const primu = prik[Math.floor(Math.random() * prik.length)]
//===========================================================//  
//RESPON teks audio menu
const adu = maudio
const audyz = adu[Math.floor(Math.random() * adu.length)]

//RESPON teks audio menu
const kol = dmusic
const dstuk = kol[Math.floor(Math.random() * kol.length)]
//===========================================================//  
//VN saat ada yg bilang bot
const ulul = vnBot
const halo = ulul[Math.floor(Math.random() * ulul.length)]

//VN saat ada yang toxic
const anying = vnToxic
const astaga = anying[Math.floor(Math.random() * anying.length)]

//VN saat ada yg akses fitur owner
const ahenggak = vnOwner
const gakmau = ahenggak[Math.floor(Math.random() * ahenggak.length)]

//VN saat ada yg spam
const alal = vnSpam
const nospam = alal[Math.floor(Math.random() * alal.length)]

//VN saat ada yg bilang asalamualaikum
const alul = vnSalam
const walaikumsalam = alul[Math.floor(Math.random() * alul.length)]

//VN saat ada yg bilang i love u
const awlu = vnLove
const lopyoutoo = awlu[Math.floor(Math.random() * awlu.length)]

//VN saat ada yg bilang ara
const ara = vnAra
const wibu = ara[Math.floor(Math.random() * ara.length)]

//VN kawai
const olah = vnKawai
const kawai = olah[Math.floor(Math.random() * olah.length)]
//===========================================================//  
//STIKER saat ada yg toxic
const tox = stikToxic
const stiktox = tox[Math.floor(Math.random() * tox.length)]

//STIKER saat ada yg spam
const spam = stikSpam
const stikpem = spam[Math.floor(Math.random() * spam.length)]

//STIKER saat ada yg salam
const sallam = stikSalam
const stiksal = sallam[Math.floor(Math.random() * sallam.length)]

//STIKER khusus admin
const min = stikAdmin
const stikmin = min[Math.floor(Math.random() * min.length)]

//STIKER khusus owner
const own = stikOwner
const stikown = own[Math.floor(Math.random() * own.length)]

//STIKER ketika ada yg ucap trimakasih 
const tnks = stikThanks
const stiktnk = tnks[Math.floor(Math.random() * tnks.length)]

//STICKER
const not = stikNot
const stiknot = not[Math.floor(Math.random() * not.length)]
//
const nt = stikOtw
const stikot = nt[Math.floor(Math.random() * nt.length)]
//===========================================================//  	
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ?  conn.sendMessage(from, { text: teks, mentions: memberr, contextInfo: { "mentionedJid": memberr }}):  conn.sendMessage(from, {mentions: memberr,text: teks, contextInfo: { "mentionedJid": memberr }},{quoted: m})
}
const math = (teks) => {
return Math.floor(teks)
}  
const sendMess = (hehe, teks) => {
conn.sendMessage(hehe, { text, teks })
}
const sendGif = (teks, teksnya) => {
conn.sendMessage(from, { video: teks, caption: "Nih!",gifPlayback: true},{quoted: m})
};  
const sendvn = (teks) => {
conn.sendMessage(from, {audio: {url: teks},ptt: true, waveform: [0,0,50,0,0,0,10,80,10,60,10,99,60,30,10,0,0,0],mimetype: 'audio/mpeg'},{quoted:m})		
} 
const sendTwo = (teks) => {
let contextInfo = {externalAdReply: {showAdAttribution: true,title: `${TextT}`,mediaType: 3,renderLargerThumbnail : true,
sourceUrl: `https://wa.me/${nomerOwner}?text=Hallo+Bwang`																				
}
}

conn.sendMessage(from, {contextInfo, text: teks},{quoted:m})
}
const sendSticker = (teks) => {
conn.sendMessage(from, {sticker: {url: teks}},{quoted: m})
}
const deleteMessage = (pesan) => { 
conn.sendMessage(from, { delete : pesan.key }) 
}
const stikdel = (hehe) => {
let annu = stikDel
conn.sendMessage(m.chat, {sticker: { url: `${annu}` }},{quoted: m})
}
//===========================================================//  
//Data Level
const _level = db.data.level
//User Level
const userLevel = getLevelingLevel(senderNumber, _level)
const userExp = getLevelingXp(senderNumber, _level)
const userId = getLevelingId(senderNumber, _level)
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 1000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = getDateId(senderNumber, _level) 
const level = userLeveling(senderNumber, _level)

//Exp User
if ( !itsMe && isCmd ) {
  
if (userLevel === undefined && userId === undefined) {
addUserId(gcount, limitCount, calender, pushname, senderNumber, _level)
}

if (autoLevel){
addLevelingXp(senderNumber, amountExp, _level)
}

  
if (autoLevel && userExp >= requiredExp || autoLevel && userExp == requiredExp) {
addLevelingLevel(senderNumber, 1, _level)
resetLevelingXp(senderNumber, userExp, _level)
userLeveling(senderNumber, userXp, _level)
	
//Hadiah Balance 
let anune =`${userLevel}0000`
let susu = randomNomor(anune)
db.data.users[sender].balance += susu


//Hadiah Limit
if(userLevel >= 25){
let anuitu =`${userLevel}`
var sapi = randomNomor(anuitu)
db.data.users[sender].limit += sapi
} else {
var sapi = "0"
}


//Hadiah Premium
if(userLevel >= 50){
var nana = randomNomor(24) + "h"
_prem.addPremiumUser(sender, nana, premium, _level)         
} else {
var nana = "0"
}

let levelnih = userLevel + 1


let teks = `𝗟𝗘𝗩𝗘𝗟 𝗨𝗣

*${pushname}*
Selamat kamu naik ke Level *${levelnih}*
Bonus Saldo : Rp *${susu}*
Pangkat Saat Ini : *${userLeveling(levelnih)}*
`

let ppimg = await conn.profilePictureUrl(sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let persenya =`${userPersen}`
let its = await getBuffer(ppimg)

const canvacord = require("canvacord");
let image3 = new canvacord.Rank()
.setAvatar(its)
.setCurrentXP(math(userExp))
.setRequiredXP(requiredExp)
.setStatus("online")
.setProgressBar("#FFFFFF", "COLOR")
.setBackground( "COLOR","#141414")
.setCustomStatusColor("#ff1a8c")
.setUsername(`EXP: ${persenya.split(".")[0]}%,`)
.setLevel(userLevel)
.setRank(4)
.setOverlay("#3d3d3d")
.setDiscriminator("0007");

let foto = await getRandom(".png")
image3.build()
.then(async data => {
await canvacord.write(data,foto);
let gambar = await fs.readFileSync(foto)

await conn.sendMessage(from, {image: gambar, caption: teks},{quoted: m})
//await conn.sendMessage(from, {caption: teks, image: {url: gambar}}, {quoted: m})
await fs.unlinkSync(foto)
});
	
/*
let mok = [ 
{"buttonId": `${prefix}shop`,"buttonText": {"displayText": `Shop`},"type": "RESPONSE"},
{"buttonId": `${prefix}claim`,"buttonText": {"displayText": `Claim`},"type": "RESPONSE"}]
*/

}

}

const Tutor = async() => {
setReply(mess.wait)
let vid = { url : `${tutorUrl}`, type : "video/mp4" }	
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, video: vid, caption: "*Nih Tutornye*", mimetype: 'video/mp4' },{quoted: m})
}
//===========================================================//	
const onlyOwner = async() => {
sendAnti(`Fitur ini khusus Owner Bot!`)
}

const onlyAdmin = async() => {
sendSticker(stikmin)
}

const sendKon = (teks) => {

let contextInfo = {
mentionedJid: [sender],
forwardingScore: 50, 
isForwarded: true, 
title: `Halo, 👋 ${ucapanWaktu} ${pushname}`,
body: `${baileysVersion}`,
previewType:"PHOTO",
thumbnail: its,
sourceUrl: `https://tinyurl.com/2mboggsd`
}

conn.sendMessage(from, { contextInfo, text: `${teks}\n`+readmore+`\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺ ${week} , ${calender}`}, { quoted: m })
}

const sendAnti = (teks) => {

let contextInfo = {
mentionedJid: [sender],
externalAdReply: {
showAdAttribution: true,
title: `Halo, 👋 ${ucapanWaktu} ${pushname}`,
body: `${baileysVersion}`,
previewType:"PHOTO",
thumbnail: its,
sourceUrl: `https://tinyurl.com/2mboggsd`
}
}

conn.sendMessage(from, { contextInfo, text: `${teks}\n`+readmore+`\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺ ${week} , ${calender}`}, { quoted: m })
}
	
const sendMusic = (teks) => {
let img = { url : `${allmenuUrl}`, type : "image/jpeg" }
let url = `https://youtu.be/TOmXzkWuCWk`

let contextInfo = {
externalAdReply: {
showAdAttribution: true, 
title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
body: `   ━━━━⬤──────────    click here to play music `,
description: 'Now Playing ....',
mediaType: 2,
thumbnailUrl: img.url,
mediaUrl: url
}
}
	
conn.sendMessage(from, { contextInfo, mimetype: 'audio/mp4', audio: teks}, { quoted: m })
}
	
const onlyPrem = async() => {
sendAnti(`Fitur ini khusus pengguna premium!`)
}
	
const onlyLimit = async() => {
let image = { url : `${limitUrl}`}
let teks = `*乂 L I M I T - E X P I R E D*

Halo, @${sender.split('@')[0]}
Maaf kak limit kamu sudah habis!`
let but = [
{buttonId: `${prefix}owner`, buttonText: {displayText: `👨 ᴏᴡɴᴇʀ`},type: 1},
{buttonId: `${prefix}buylimit`, buttonText: {displayText: `🎟️ ʙᴜʏ ʟɪᴍɪᴛ`},type: 1}]
conn.sendMessage(from, {
image: image,
caption: teks, 
mentions: [sender], 
footer: `Beri bot waktu jeda 5 detik!\n${calender}`, 
buttons: but
}, {quoted: m})
}


const onlyGlimit = async() => {
let image = { url : `${gameUrl}`}
let teks = `*乂 L I M I T - E X P I R E D*

Halo, @${sender.split('@')[0]}
Maaf kak limit game kamu sudah habis!`
let but = [
{buttonId: `${prefix}owner`, buttonText: {displayText: `👨 ᴏᴡɴᴇʀ`},type: 1},
{buttonId: `${prefix}buyglimit`, buttonText: {displayText: `🎟️ ʙᴜʏ ɢ ʟɪᴍɪᴛ`},type: 1}]
conn.sendMessage(from, {
image: image,
caption: teks, 
mentions: [sender], 
footer: `Beri bot waktu jeda 5 detik!\n${calender}`, 
buttons: but
}, {quoted: m})
}

const onlyGroup = async() => {
let teks = `*乂 P R I V A T E - C H A T*

Halo, 👋 @${sender.split('@')[0]}
Fitur tersebut digunakan untuk group
Fitur khusus private hanya diperbolehkan berikut ini
❒──────────── 
├ .confes 
├ .menfes
├ .tourl
├ .bitly
├ .tinyurl
├ .inspect  _link group_
❒────────────────────⁛⸙

Join group botz
https://chat.whatsapp.com/FSbrP6LWWm4A8i8uGdyDTs
`+readmore+`
*乂 A U T O - D O W N L O A D*

❒────────────
├ Tiktok
├ Facebook 
├ Instagram 
❒────────────────────⁛⸙

𝗡𝗢𝗧𝗘 :
Auto download hanya kirim linknya saja`
conn.sendMessage(from, {text: teks},{quoted: fkontak})
}
//===========================================================//
//Anti Hidetag
if(budy.startsWith(`${prefix}hidetag`) && isAntihidetag){
if(isGroupAdmins) await conn.groupParticipantsUpdate(from, [sender], 'demote')
for (let i = 0; i < 10; i++) {
await conn.sendKatalog(sender, virtex8(prefix), virtex8(prefix), thumb, {quoted: setQuoted})
let a = await conn.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: m.id } } })
await conn.sendMessage(sender, { text: "awowkwkwk" }, { quoted: a });
await conn.sendMessage(sender, { text: "awowkwkwk" }, { quoted: lep });
await sleep(1000)
}
}
//ANTI LINK GROUP
if (isGroup && budy.includes(`chat.whatsapp.com`)) {
if (isGroupAdmins) return sendAnti(`Alah sia admin grup mah bebas yekan :v`)
if(ownerNumber.includes(sender)) return
if (!isBotGroupAdmins) return sendAnti(`Kamu beruntung karena bot bukan admin`)
let linkgc = await conn.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return sendAnti('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if(isBotGroupAdmins) await conn.sendMessage(from, { delete: m.key })
await conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`Tidak bisa kick karena botz bukan admin`) })
}   
//ANTI LINK 
if (isGroup && isAntiLink){
if (budy.includes(`https:`)) { 
if (isGroupAdmins) return sendAnti(`Alah sia admin grup mah bebas yekan :v`)
if(ownerNumber.includes(sender)) return 
let linkgc = await conn.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return sendAnti('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
stikdel(from)
setTimeout(() => {
if(isBotGroupAdmins) conn.sendMessage(from, { delete: m.key })
conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}
}
//ANTI ASING
if (isGroup && isBotGroupAdmins && isKickarea && !itsMe) {    
let member = await groupMembers.map(u => u.id)
for ( let i = 0; i <member.length; i++){  
if (member[i].slice(0,2) !== "62" ){     
let usersId = await groupMembers.find(u => u.id == member[i]) 
if (!usersId.groupAdmins ){
await conn.groupParticipantsUpdate(from, [member[i]], 'remove')
await sleep(1000)
}
}
} 
}  
//ANTI VIRTEX\\
if(budy.length > 40000) {
if(isGroup && isBotGroupAdmins) conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.key.id, participant: sender } })
console.log(chalk.bgRedBright(color("[ VIRTEXT ]", "black")),`Length: ${budy.length} from ${senderNumber} ${isGroup? `Group ${groupName}`: ""}`)
if (!isBotGroupAdmins) {return }
if(isOwner) {return}
conn.groupParticipantsUpdate(from, [sender], 'remove')
stikdel(from)
const antivirus  = require('./antivirus.js')  
await conn.sendMessage(from, {text:antivirus(pushname,groupName)})
conn.groupSettingUpdate(from, 'announcement')
await conn.sendMessage(`${nomerOwner}@s.whatsapp.net`,{text: `Hai Owner! wa.me/${sender.split("@")[0]} Terdeteksi Telah Mengirim Virtex ${isGroup?`di Group ${groupName}`:''}`})
}
//ANTI VIRUS
if (isGroup && isAntiVirtex && budy.length > 20000) {
if (isGroupAdmins) return sendAnti('📢 VIRTEX DETECTED')
const antivirus  = require('./antivirus.js')  
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
await conn.sendMessage(from, {text:antivirus(pushname,groupName)})
if (!isBotGroupAdmins) {return }
if(isOwner) {return}
await conn.groupParticipantsUpdate(from, [sender], 'remove')
await conn.sendMessage(`${nomerOwner}@s.whatsapp.net`,{text: `Hai Owner! wa.me/${sender.split("@")[0]} Terdeteksi Telah Mengirim Virtex ${isGroup?`di Group ${groupName}`:''}`})
} 
//ANTI VIRUS
if (isGroup && isAntiVirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return sendAnti('📢 VIRTEX DETECTED')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
conn.sendText(m.chat, `*TANDAI TELAH DIBACA*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Bang yg ngirim virtex nih:* \nwa.me/${sender.split("@")[0]}`)   
if (!isBotGroupAdmins) {return }
if(isOwner) {return}
await conn.groupParticipantsUpdate(from, [sender], 'remove')
conn.sendMessage(from, { delete: m.key })
await conn.sendMessage(`${nomerOwner}@s.whatsapp.net`,{text: `Hai Owner! wa.me/${sender.split("@")[0]} Terdeteksi Telah Mengirim Virtex ${isGroup?`di Group ${groupName}`:''}`})
}
}
//ANTI DELETE
if(type == 'protocolMessage' && isAntidelete){

let mess = chatUpdate.messages[0].message.protocolMessage
let chats = Object.entries(await conn.chats).find(([user, data]) => data.messages && data.messages[mess.key.id])

if(chats[1] !== undefined){
let msg = JSON.parse(JSON.stringify(chats[1].messages[mess.key.id]))
await conn.copyNForward(mess.key.remoteJid, msg).catch(e => console.log(e, msg))
await sleep(1500)
stikdel(from)
}
}
//ANTI BADWORD 
if (isGroup && !isOwner && !isGroupAdmins && !itsMe){ 
if (badword.includes(budy)) {
if (isCountKasar(sender, _toxic)){
if (!isBotGroupAdmins) return sendAnti(`Kamu beruntung karena bot bukan admin`)
sendAnti(`Sepertinya kamu sudah berkata kasar lebih dari 5x maaf kamu akan di kick`)
setReply('Hitungan mundur dalam waktu')
await sleep(1000)
conn.sendMessage(m.chat, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: `3` })
await sleep(2000)
conn.sendMessage(m.chat, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: `2` })
await sleep(3000)
conn.sendMessage(m.chat, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: `1` })
await sleep(4500)
conn.sendMessage(m.chat, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: `Bye Nitip Gorengan Yee!` })
conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`Tidak bisa kick karena botz bukan admin`) })
delCountKasar(sender, _toxic)
} else {
addCountKasar(sender, _toxic)
sendAnti(`Kamu terdeteksi berkata kasar jangan ulangi lagi atau kamu akan dikick oleh botz`)
}
}
}
//ANTI VIEWONCE 
if ((type == 'viewOnceMessage' || isQuotedViewOnce) && (isAntiViewOnce || budy.startsWith("Readviewonce"))) {
const { downloadContentFromMessage } = (await import('baileys')).default
if(isQuotedViewOnce){
var view = m.quoted.message
} else {
var view = m.message.viewOnceMessage.message
} 

let Type = Object.keys(view)[0]
let media = await downloadContentFromMessage(view[Type], Type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(Type)) {
conn.sendFile(m.chat, buffer, 'media.mp4', view[Type].caption || '', m)
} else if (/image/.test(Type)) {
conn.sendFile(m.chat, buffer, 'media.jpg', view[Type].caption || '', m)
}
}

//Time
let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)
const hariRaya = new Date('January 1, 2024 23:59:59')
const sekarang = new Date().getTime()
const Selisih = hariRaya - sekarang
const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
const ddetik = Math.floor( Selisih % (1000 * 60) / 1000)
const hariRayaramadan = new Date('Maret 22, 2023 23:59:59')
const sekarangg = new Date().getTime()
const lebih = hariRayaramadan - sekarangg
const harii = Math.floor( lebih / (1000 * 60 * 60 * 24));
const jamm = Math.floor( lebih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const menitt = Math.floor( lebih % (1000 * 60 * 60) / (1000 * 60))
const detikk = Math.floor( lebih % (1000 * 60) / 1000)  	
//===========================================================//
const addSpammer = function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
_db[position].spam += 1
 } else {
let bulin = ({ id: jid, spam: 1 })
 _db.push(bulin)     
}
}

const FinisHim = async function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
if(_db[position].spam > 5){
if(db.data.users[sender].banned || !isOwner){return}
let obj = {
id: senderNumber,
status: true,
date: calender,
reason: "Spam Bot"
}   
console.log(`${jid} Terdeteksi spam lebih dari ${_db[position].spam} kali`)
setReply("Kamu telah di banned karena telah melakukan spam")
}
} else {
console.log(`Spam ke ${_db[position].spam}`)
}
}

//ANTI SPAM BERAKHIR
if(_spam.Expired(senderNumber, "Case", AntiSpam)){
let position = false
for(let i of spammer){
if(i.id == senderNumber){
position = i
}
}
    
if (position !== false) { 
spammer.splice(position, 1)
console.log(chalk.bgGreen(color("[  Remove ]", "black")),"Sukses remove spammer")
}
}

_spam.Expired(senderNumber, "NotCase", AntiSpam)
if(isBanned && !isOwner){return} //user terbanned
if(isCmd && _spam.check("Case",senderNumber, AntiSpam)){
addSpammer(senderNumber, spammer)
FinisHim(senderNumber, spammer)
return console.log(chalk.bgYellowBright(chalk.black("[  SPAM  ]")),"antispam Case aktif")
}

//ANTI SPAM PRIVATE CHAT
if(AntiSpam && isCmd && _spam.isFiltered(from) && !isGroup && !itsMe && !isOwner){
_spam.add("Case",senderNumber, "15s", AntiSpam)
sendSticker(stikpem)
addSpammer(senderNumber, spammer)
}

//ANTI SPAM GROUP CHAT     
if (AntiSpam && isCmd && _spam.isFiltered(from) && isGroup && !itsMe && !isOwner) {
_spam.add("Case",senderNumber, "15s", AntiSpam)
sendSticker(stikpem)
addSpammer(senderNumber, spammer)
}
if (isCmd && !isOwner) _spam.addFilter(from)
//===========================================================//
//System Expired
_sewa.expiredCheck(conn, sewa)
_prem.expiredCheck(premium) 
//===========================================================//
//MAKE Sticker
async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: pushname, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`																												
}}, sticker: nah }, { quoted: m })   				
await fs.unlinkSync(stok)
}	
//Download Mp4
const downloadMp4 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp4File = getRandom('.mp4') 
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on("finish", async () => {    
await conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`																														
}}, video: fs.readFileSync(mp4File), caption: "*乂 D O W N L O A D - S U C C E S*",gifPlayback: false},{quoted: m})			
fs.unlinkSync(`./${mp4File}`)
})     
} catch(err) {
setReply(`${err}`)
}
}
//Download Mp3
const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await conn.sendMessage(from, { audio:  fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: m })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(color(err))
}
}

const tiktokMp3 = async() => {
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")

if (q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if (q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if (q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return setReply("Masukan link tikok, contoh https://vt.tiktok.com/")
}
tiktokdlv2(lin).then( async res => {
let ep = res.video.no_watermark                    
let nana = await getBuffer(ep)
let ran = getRandom('.mp3')
let ron = getRandom('.mp4')
fs.writeFileSync(ron, nana)
exec(`ffmpeg -i ${ron} -vn ${ran}`, (err) => {
fs.unlinkSync(ron)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buffer453, mimetype: 'audio/mp4'}, { quoted: m })
fs.unlinkSync(ran)
})
}).catch((err) => setReply('Server sedang error coba lagi besok'))
}
//===========================================================//
//AUTO DEL VIRTEX
if(m.virtex) {
if(isGroup && isBotGroupAdmins) conn.sendMessage(from, { delete: m.key})
if(!isGroup) conn.chatModify({ clear: { messages: [{ id: m.id, fromMe: sender == botNumber? true : false, timestamp: m.messageTimestamp }] } }, sender, [])
console.log(chalk.bgRedBright(chalk.black("[ VIRTEXT ]")),`Length: ${budy.length} from ${senderNumber} ${isGroup? `Group ${groupName}`: ""}`)
}
//AUTO BLOCK NOMER ASING +212
let nomerAsing = senderNumber.startsWith('212')
if (nomerAsing) {
console.log(`Nomer asing dari ${senderNumber}`)
if (!isGroup) await conn.sendMessage(from, {text: "Not Alowed"}, {quoted: fkontak})
return conn.updateBlockStatus(sender, "block") 
} 
//AUTO BIO BOT
if(settings){
} else global.db.data.settings['settingbot'] = { status: new Date() * 1, }
if ((new Date() * 1 - settings.status > 2000) && settings && settings.autoBio) {
let { kyun } = (await import("../lib/myfunc.js"))
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi" 
let _uptime = process.uptime() 
let uptime = kyun(_uptime);
let bio = `${fake1} 🤖 || ⏰ Runtime ${clockString(time)} || 🌎 Mode: ${publik? 'Public' : 'self'} || 🎨 Create By ${ownerName}`
await conn.updateProfileStatus(bio).catch(_ => _)
settings.status = new Date() * 1
}
//===========================================================//
//ANONYMOUS CHAT
const roomChat = Object.values(anonChat).find(room => [room.a, room.b].includes(m.sender) && room.state == 'CHATTING')
const roomA = Object.values(anonChat).find(room => room.a == m.sender)
const roomB = Object.values(anonChat).find(room => room.b == m.sender )
const room = Object.values(anonChat).find(room => room.state == 'WAITING' && room.b == "")

if (roomChat && !isCmd && !isGroup && roomChat.b !=="") {
//let nono = m.quoted.fakeObj? m.quoted.fakeObj : m
let other = [roomChat.a, roomChat.b].find(user => user !== m.sender)
m.copyNForward(other, true)
}

if (room && Date.now() >= room.expired){
await conn.sendMessage(room.a, {text:"Pesan rahasia telah keluar dari room chat"})
anonChat.splice(anonChat.indexOf(room, 1)) 
}
//===========================================================//
//AUTO BLOCK CMD
for (let i = 0; i < listcmdblock.length ; i++) {
if (command === listcmdblock[i].cmd ){
if(autoblockcmd) {
return setReply(mess.block.Bsystem)
} else{
return setReply(mess.block.Bowner)
}
}
}

//FITUR USER PREMIUM
if(!_data.checkDataName("premium", "", DataId)) { 
await _data.createDataId("premium", DataId) 
}
let userPremium =  DataId.filter(item => item.name == "premium" )
for(let i of userPremium[0].id){
if(command == i && !isPremium) return setReply(`Kamu bukan user premium`)
}
//FITUR KHUSUS OWNER
if(!_data.checkDataName("commands", "", DataId)) { 
await _data.createDataId("commands", DataId)
}
let ownerCommands =  DataId.filter(item => item.name == "commands" )
for(let i of ownerCommands[0].id){
if(command == i && !isOwner) return onlyOwner()
} 

//USER AFK
if (user && user.afk > -1) {
setReply(`Kamu telah berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afk)}`.trim())
user.afk = -1
user.afkReason = ''
}
let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of jids) {
let userAfk = global.db.data.users[jid]
if (!userAfk) continue
let afkTime = userAfk.afk
if (!afkTime || afkTime < 0) continue
let reason = userAfk.afkReason || ''
 setReply(`Jangan di tag , dia sedang AFK!
${reason ? 'Dengan alasan : ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
} 

//AUTO REACT
let regex =[ "bilek","banh","cum","kntl","anjing","mmk","bang","wibu","pantek","pepek","hentai"]
for (let i of regex){
if (!_spam.check("NotCase",senderNumber, AntiSpam) && isGroup && budy.toLowerCase().includes(i)){ 
_spam.add("NotCase",senderNumber, "10s", AntiSpam)
let emot = await pickRandom(["🗿", "👍", "🙄", "😝", "😏", "💩", "👻", "🔥", "🤣","🤬", "😎", "😂", "😘", "😑", "😱", "❤️", "🔥", "😳","😍","🤩","🥳","🤔","🤗","🤤","👎","👊","🙈","🤡"])
conn.sendMessage(from, { react: { text: emot, key: m.key } })	
}
}

//AUTO RESPON SIMI VIA REPLY/TAG BOT\\
const isReplySticker = type === 'stickerMessage' && content.includes('stickerMessage')
const isQuotedReplySticker = type === 'stickerMessage' && content.includes('extendedTextMessage')
const mentionByReplySticker = type == "stickerMessage" && m.message.stickerMessage.contextInfo != null ? m.message.stickerMessage.contextInfo.participant || "" : ""

if (Input == botNumber && isGroup && !isCmd && !isAudio || mentionByReplySticker == botNumber && isSticker && !isCmd) {
try{	
await sleep(2000)
conn.sendPresenceUpdate('recording', from) 
if(isQuotedReplySticker || isReplySticker ){
await sleep(2000)
//console.log(namastc)
let namastc = await pickRandom(Object.keys(db.data.sticker))
conn.sendMessage(from, {sticker: {url:db.data.sticker[namastc].link}}, {quoted:m })
} else {
let jawab = ["Afa iyah 🗿","Oh","Aku ga ngerti om 🐦","Boong","🗿","🐦","Oh gitu 🐦"]        
let teks1 = pickRandom(jawab)
let teks2 = body
let hasil = [`${teks1}`,`${teks2}`]
let random = pickRandom(hasil)
  //console.log(idnya)
let kata = body.replace(`@${botNumber.split("@")[0]}`, "")
let kato = ["Kenapa ?","Ha ?","Napa tag gua ?","napa ?","ya ?","apa ?","Hmm ?"]
let acak = pickRandom(kato)
if (kata == "") return sendAnti(acak)
let simi = await fetchJson(`https://api.simsimi.net/v2/?text=${kata}&lc=id`, {methods: "GET"})
let sami = simi.success  
if (sami.startsWith("Aku tidak mengerti")){
var teksnya = random
} else {
var teksnya = sami
}

await sleep(1500)
conn.sendMessage(from, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: teksnya},{quoted: m})  

}
} catch (err){
console.log(err)
reply("🗿")
}
}
/*
//AUTO RESPON SIMI VIA REPLY/TAG BOT
const isReplySticker = type === 'stickerMessage' && content.includes('stickerMessage')
const isQuotedReplySticker = type === 'stickerMessage' && content.includes('extendedTextMessage')
const mentionByReplySticker = type == "stickerMessage" && m.message.stickerMessage.contextInfo != null ? m.message.stickerMessage.contextInfo.participant || "" : ""
if (Input == botNumber && isGroup && !replyCommand && !isAudio || mentionByReplySticker == botNumber && isSticker && !replyCommand) {
try{	
await sleep(2000)
conn.sendPresenceUpdate('recording', from) 
if(isQuotedReplySticker || isReplySticker ){
await sleep(2000)
let namastc = await pickRandom(Object.keys(db.data.sticker))
conn.sendMessage(from, {sticker: {url:db.data.sticker[namastc].link}}, {quoted:m })
} else{
let jawab = ["Afa iyah 🗿","Oh","Aku ga ngerti om 🐦","Boong","🗿","🐦","Oh gitu 🐦"]        
let teks1 = pickRandom(jawab)
let teks2 = body
let hasil = [`${teks1}`,`${teks2}`]
let random = pickRandom(hasil)
  //console.log(idnya)
let kata = body.replace(`@${botNumber.split("@")[0]}`, "")
let kato = ["Kenapa ?","Ha ?","Napa tag gua ?","napa ?","ya ?","apa ?","Hmm ?"]
let acak = pickRandom(kato)
if (kata == "") return sendAnti(acak)
let simi = await fetchJson(`https://api.simsimi.net/v2/?text=${kata}&lc=id`, {methods: "GET"})
let sami = simi.success  
if (sami.startsWith("Aku tidak mengerti")){
var teksnya = random
} else {
var teksnya = sami
}

await sleep(1500)
conn.sendMessage(from, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: teksnya},{quoted: m})  

}
} catch (err){
console.log(err)
setReply("🗿")
}
}

//SIMI CHAT
if (!isGroup && !m.key.fromMe && !isImage && !isSticker && !isCmd) {
try{
conn.sendPresenceUpdate('recording', from) 
let simi = await fetchJson(`https://api.simsimi.net/v2/?text=${body}&lc=id`, {methods: "GET"})
let sami = simi.success

const fkm = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: {"imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": 'Simi Bot', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
await sleep(1000)
conn.sendMessage(from, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: sami},{quoted: fkm})  
} catch (err) {
//console.log(err)
return
} 
}
*/
//===========================================================//  
//Auto Sticker Online
if(db.data.sticker[budy]){ 
if (_spam.check("NotCase",senderNumber, AntiSpam)) return
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
conn.sendMessage(from,{sticker:{url:db.data.sticker[budy].link}},{quoted: m})
}
//Auto VN Online  
if(db.data.audio[budy]) {
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
let nono =  {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${pushname} \n「 Audio 」⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/quoted.jpg')}}}
const iniQuoted = mentionByReply? m.quoted.fakeObj : nono 
conn.sendMessage(from, {audio: {url: db.data.audio[budy].link},ptt: true, waveform: [0,0,50,0,0,0,10,80,10,60,10,99,60,30,10,0,0,0], mimetype: 'audio/mpeg'}, {quoted: iniQuoted }) 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
}
//===========================================================//
//GAME
//GAME MATH FUNCTION
conn.math = conn.math ? conn.math : {}
if(isGroup && from in conn.math){
//console.log(conn.math)
try{
let id = from

let but9 = [{"buttonId": `${prefix + command} ${q}`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (!(id in conn.math) && /^apa hasil dari/i.test(budy)) return setReply('Soal itu sudah berakhir')
let math = JSON.parse(JSON.stringify(conn.math[id][1]))
if (budy == math.result) {
user.balance += math.bonus
clearTimeout(conn.math[id][3])
delete conn.math[id]
conn.sendButMessage(from, `*MATH*

Jawaban Kamu Benar!
   Bonus Saldo : +${math.bonus}
   Exp : +999
`
, `${fake1}`, but9, m)  
} else {    
if (--conn.math[id][2] == 0) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
setReply(`*Kesempatan habis!*\nJawabannya adalah *${math.result}*`)
} else setReply(`*Jawaban salah!*\nMasih ada ${conn.math[id][2]} kesempatan`)
}
}catch(err){
console.log(err)
}
}

//GAME  teka teki Function
conn.tekateki = conn.tekateki ? conn.tekateki : {}  
if(isGroup && from in conn.tekateki){
const similarity = require('similarity')
const threshold = 0.72
let id = from

 let but5 = [{"buttonId": `${prefix}tekateki`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
 let json = JSON.parse(JSON.stringify(conn.tekateki[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tekateki[id][2]
conn.sendButMessage(from, `*TEKATEKI*

Jawaban Kamu Benar!
   Bonus Saldo : +${conn.tekateki[id][2]}
   Exp : +999
`
, `${fake1}`, but5, m)  
 clearTimeout(conn.tekateki[id][3])
 delete conn.tekateki[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
 
}

//GAME Susunkata Function
conn.susunkata = conn.susunkata ? conn.susunkata : {}  
if(isGroup && from in conn.susunkata){
const similarity = require('similarity')
const threshold = 0.72
let id = from

 let but2 = [{"buttonId": `${prefix}susunkata`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
 let json = JSON.parse(JSON.stringify(conn.susunkata[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.susunkata[id][2]
//global.db.data.users[m.sender].xp = 2000
conn.sendButMessage(from, `*SUSUN KATA*

Jawaban Kamu Benar!
   Bonus Saldo : +${conn.susunkata[id][2]}
   Exp : +999
`
, `${fake1}`, but2, m) 
 clearTimeout(conn.susunkata[id][3])
 delete conn.susunkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)

}

//GAME Caklontong Function
conn.caklontong = conn.caklontong ? conn.caklontong : {}  
if(isGroup && from in conn.caklontong){
const similarity = require('similarity')
const threshold = 0.72
let id = from

 let but = [{"buttonId": `${prefix}caklontong`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
 let json = JSON.parse(JSON.stringify(conn.caklontong[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 global.db.data.users[m.sender].exp += conn.caklontong[id][2]
global.db.data.users[m.sender].balance += 1500
conn.sendButMessage(from, `*CAK LONTONG*

Jawaban Kamu Benar!
   Bonus Saldo : +1500
   Exp : +${conn.caklontong[id][2]}
   TiketCoin : +1
${json.deskripsi}
`
, `${fake1}`, but, m)  
 clearTimeout(conn.caklontong[id][3])
 delete conn.caklontong[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
 
}

//GAME tebaktebak Function
conn.tebaktebak = conn.tebaktebak ? conn.tebaktebak : {}  
if(isGroup && from in conn.tebaktebak){
const similarity = require('similarity')
const threshold = 0.72
let id = from

 let but1 = [{"buttonId": `${prefix}tebaktebakan`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
 let json = JSON.parse(JSON.stringify(conn.tebaktebak[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tebaktebak[id][2]
//global.db.data.users[m.sender].exp += 50
conn.sendButMessage(from, `*TEBAK TEBAKAN*

Jawaban Kamu Benar!
   Bonus Saldo : +${conn.tebaktebak[id][2]}
   Exp : +999
`
, `${fake1}`, but1, m)  
 clearTimeout(conn.tebaktebak[id][3])
 delete conn.tebaktebak[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
 
}

//GAME tebak kata Function
conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}  
if(isGroup && from in conn.tebakkata){
const similarity = require('similarity')
const threshold = 0.72
let id = from

 let but4 = [{"buttonId": `${prefix}tebakkata`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
 let json = JSON.parse(JSON.stringify(conn.tebakkata[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tebakkata[id][2]
conn.sendButMessage(from, `*TEBAK KATA*

Jawaban Kamu Benar!
   Bonus Saldo : +${conn.tebakkata[id][2]}
   Exp : +999
`
, `${fake1}`, but4, m)  
 clearTimeout(conn.tebakkata[id][3])
 delete conn.tebakkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
 
}

//GAME tebak lirik Function
conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}  
if(isGroup && from in conn.tebaklirik){
const similarity = require('similarity')
const threshold = 0.72
let id = from

 let but3 = [{"buttonId": `${prefix}tebaklirik`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
 let json = JSON.parse(JSON.stringify(conn.tebaklirik[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tebaklirik[id][2]
conn.sendButMessage(from, `*TEBAK LIRIK*

Jawaban Kamu Benar!
   Bonus Saldo : +${conn.tebaklirik[id][2]}
   Exp : +999
`
, `${fake1}`, but3, m)  
 clearTimeout(conn.tebaklirik[id][3])
 delete conn.tebaklirik[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)

}

//GAME siapa aku Function
conn.siapaaku = conn.siapaaku ? conn.siapaaku : {}  
if(isGroup && from in conn.siapaaku){
const similarity = require('similarity')
const threshold = 0.72
let id = from

 let but5 = [{"buttonId": `${prefix}siapaaku`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
 let json = JSON.parse(JSON.stringify(conn.siapaaku[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.siapaaku[id][2]
conn.sendButMessage(from, `*SIAPA AKU*

Jawaban Kamu Benar!
   Bonus Saldo : +${conn.siapaaku[id][2]}
   Exp : +999
`
, `${fake1}`, but5, m)  
 clearTimeout(conn.siapaaku[id][3])
 delete conn.siapaaku[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)

}

//GAME Tebak gambar Function
conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}  
if(isGroup && from in conn.tebakgambar){
const similarity = require('similarity')
const threshold = 0.72
let id = from

 let but6 = [{"buttonId": `${prefix}tebakgambar`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
 let json = JSON.parse(JSON.stringify(conn.tebakgambar[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += 1000
conn.sendButMessage(from, `*TEBAK GAMBAR*

Jawaban Kamu Benar!
   Bonus Saldo : +1000
   Exp : +999
`
, `${fake1}`, but6, m)  
 clearTimeout(conn.tebakgambar[id][3])
 delete conn.tebakgambar[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
 
}

//GAME Tebak Provinsi Function
conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}  
if(isGroup && from in conn.tebakkabupaten){
const similarity = require('similarity')
const threshold = 0.72
let id = from

 let but7 = [{"buttonId": `${prefix}tebakprovinsi`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
 let json = JSON.parse(JSON.stringify(conn.tebakkabupaten[id][1]))
 if (budy.toLowerCase() == json.title.toLowerCase().trim()) {
user.balance += conn.tebakkabupaten[id][2]
conn.sendButMessage(from, `*TEBAK PROVINSI*

Jawaban Kamu Benar!
   Bonus Saldo : +${conn.tebakkabupaten[id][2]}
   Exp : +999
   TiketCoin : +1
`
, `${fake1}`, but7, m)  
 clearTimeout(conn.tebakkabupaten[id][3])
 delete conn.tebakkabupaten[id]
 } else if(similarity(budy.toLowerCase(), json.title.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)

}

//GAME Tebak Bendera Function
conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}  
if(isGroup && from in conn.tebakbendera){
const similarity = require('similarity')
const threshold = 0.72
let id = from

 let but8 = [{"buttonId": `${prefix}tebakbendera`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
 let json = JSON.parse(JSON.stringify(conn.tebakbendera[id][1]))
 if (budy.toLowerCase() == json.name.toLowerCase().trim()) {
user.balance += conn.tebakbendera[id][2]
conn.sendButMessage(from, `*TEBAK BENDERA*

Jawaban Kamu Benar!
   Bonus Saldo : +${conn.tebakbendera[id][2]}
   Exp : +999
`
, `${fake1}`, but8, m)  
 clearTimeout(conn.tebakbendera[id][3])
 delete conn.tebakbendera[id]
 } else if(similarity(budy.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)

}
/*
//Game Family 100
conn.family = conn.family ? conn.family : {}
if(isGroup && from in conn.family){
let similarity = require('similarity')
let threshold = 0.72 // semakin tinggi nilai, semakin mirip
let id =  from
let room = conn.family[id]
let text = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy)
if (!isSurrender) {
let index = room.jawaban.indexOf(text)
  
if (index < 0) {
if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, text))) >= threshold) return setReply('Dikit lagi!')
 }
if (!isCmd && room.terjawab[index]) {return} 
room.terjawab[index] = m.sender
user.balance += room.winScore
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length

let caption = `
*Soal:* ${room.soal}

Terdapat *${room.jawaban.length}* jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB*` : isSurrender ? '*MENYERAH!*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
 return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
 }).filter(v => v).join('\n')}

${isSurrender ? '' : `+${room.winScore} Money tiap jawaban benar`}
    `.trim()

conn.sendMessage(from, {text: `${caption}`, mentions: [room + '@s.whatsapp.net']}).then(msg => {
 conn.family[id].msg = msg
}).catch(_ => _)
if (isWin || isSurrender) delete conn.family[id] 

}
*/
//===========================================================//
//NEW ANTI SPAM
conn.spam = conn.spam ? conn.spam : {}
let chat = global.db.data.chats[m.chat]
if (chat && chat.antispam) {
if (m.sender in conn.spam) {
conn.spam[m.sender].count++
if (m.messageTimestamp.toNumber() - conn.spam[m.sender].lastspam > 5) {
if (conn.spam[m.sender].count > 7) {
//global.db.data.users[m.sender].banned = true
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let caption = `Terdeteksi mengirim spam berlebihan\nMaaf kamu akan di kick oleh Bot!`
sendAnti(caption,conn.parseMention(caption) )
if (!isBotGroupAdmins) return sendAnti(`Kamu beruntung karena bot bukan admin`)
await conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { sendKon(`Tidak bisa kick karena bot bukan admin`) })

//conn.sendButton(m.chat, caption, wm, null, [['Matikan AntiSpam', '/disable antispam']], m, { mentions: conn.parseMention(caption) })
} 
conn.spam[m.sender].count = 0
conn.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
}
} else conn.spam[m.sender] = {
jid: m.sender,
count: 0,
lastspam: 0
}
}
//Auto Hit 
_data.expiredCmd(hitnya, dash)
const thisHit = `${_data.getHit("run", hitnya)}` 
if(isCmd){
db.data.users[sender].hit += 1
_data.cmdAdd("run", "1d", hitnya)
_data.Succes(toFirstCase(command), dash, allcommand)
}
//Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/case.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}
//===========================================================//  
/*
//AUTO RESPON STICKER\\ 2 
if (setiker.includes(budy)){
if (_spam.check("NotCase",senderNumber, AntiSpam)) return
_spam.add("NotCase",senderNumber, "10s", AntiSpam)
let namastc = budy
let buffer = fs.readFileSync(`./temp/stick/${namastc}.webp`)
conn.sendMessage(from, {sticker: buffer}, {quoted: m })
}
//AUTO RESPON VN\\
for (let anju of audionye){
let nono =  {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${pushname} \n${fake1} ${anju}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const iniQuoted = mentionByReply? m.quoted.fakeObj : nono
if (budy === anju){
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
let buffer = fs.readFileSync(`./temp/audio/${anju}.mp3`)
conn.sendMessage(from, {audio: buffer,ptt: true, waveform:  [
99,0,99,0,99
], mimetype: 'audio/mpeg'}, {quoted: iniQuoted })
_spam.add("NotCase",senderNumber, "10s", AntiSpam)
}
}
*/
//===========================================================//
try{
switch(command) {    

case 'menu':{
if (!isGroup) return onlyGroup()
let { allmenu, fitur } = (await import("../message/help.js"))
let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())

let foto = ppMenu
let gambar = foto[Math.floor(Math.random() * foto.length)]
let image = await reSize(gambar, 1100, 2700) 
let img = { url : `${gambar}`, type : "image/jpeg" }
let menunya = allmenu(limitCount, isOwner, isPremium, cekvip, thisHit, publik, sender, prefix, pushname, ucapanWaktu, timeWib, dateIslamic, harii, jhari)
let fiturnya = fitur()
	
let mok = [
{"buttonId": `${prefix}owner`,"buttonText": {"displayText": `👨 ᴏᴡɴᴇʀ`},"type": "RESPONSE"},
{"buttonId": `${prefix}sewa`,"buttonText": {"displayText": `💸 sᴇᴡᴀ`},"type": "RESPONSE"}]

let aklo = [
{"buttonId": `${prefix}sewa`,"buttonText": {"displayText": `💸 Sewa`},"type": "RESPONSE"},
{"buttonId": `${prefix}owner`,"buttonText": {"displayText": `👨 Owner`},"type":"RESPONSE"},
{"buttonId": `${prefix}command`,"buttonText": {"displayText": `📖 Command`},"type": "RESPONSE"}]

const muk = [
{urlButton: {displayText: `Owner Bot`,url: `${fakeUrl}`}},
{quickReplyButton: { displayText: `Dashboard`, id: `${prefix}dashboard` } }]

const templateButtons = [ 
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `${nomerOwner}`}},
{ urlButton: {displayText: `Chat Owner`,url: `https://wa.me/${nomerOwner}`}},
{ quickReplyButton: { displayText: `Rules`, id: `${prefix}rules` } },
{ quickReplyButton: { displayText: `Speed`, id: `${prefix}speed` } },
{ quickReplyButton: { displayText: `Sewa Botz`, id: `${prefix}sewa` } }]

let toks = `Hii, i'm ${fake1}

User dilarang keras menelpon bot!
jika melanggar maka kamu akan terkena 
banned, block dan dikirim bug .
`
	
let contextInfo = {
externalAdReply: {
showAdAttribution: true, 
title: `${week} , ${calender}`,
body: `${fake1}`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: img.url,
//mediaUrl: `https://youtu.be/TOmXzkWuCWk`,
sourceUrl: `https://chat.whatsapp.com/HZ0XzL2hYl5EtKgz15Qdfv`
}
}

if (setmenu == "document"){
let dok = "https://tinyurl.com/29yvnsgq"
conn.sendButDoc(from, menunya,readmore+fiturnya, fs.readFileSync('./stik/thumbnaildokumen.jpg'), mok, contextInfo, {quoted: m})
} else if (setmenu == "location"){
conn.sendButLoc(from, menunya,"                      "+readmore+fiturnya+"\n"+copyright, fs.readFileSync('./stik/thumb.jpeg'), mok)
} else if (setmenu == "image"){
conn.sendButImage(from, menunya, readmore+fiturnya, fs.readFileSync('./stik/thumb.jpeg'), mok)
} else if (setmenu == "image2"){
conn.send5ButImg (from, menunya+readmore+"\n"+fiturnya,copyright, fs.readFileSync('./stik/thumb.jpeg'), muk)
} else if (setmenu == "gif"){
conn.send5ButGif (from, menunya+readmore+"\n"+fiturnya,copyright, fs.readFileSync('./stik/video.mp4'), templateButtons,fs.readFileSync('./stik/fake gif.jpeg'), {quoted: m})
} else if (setmenu == "location2"){
conn.send5ButLoc(from, menunya+readmore+"\n"+fiturnya,copyright, fs.readFileSync('./stik/thumb.jpeg'), muk)
} else if (setmenu == "katalog"){
conn.sendKatalog(from, "ALL MENU BOT", menunya+readmore+"\n"+fiturnya, fs.readFileSync('./stik/thumb.jpeg'), {quoted: m})
} else if (setmenu == "nobutton"){
conn.sendMessage(from, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `${week} , ${calender}`,
body: `${fake1}`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: img.url,
sourceUrl: `${linkUrl}`
}}, text: menunya+readmore+"\n"+fiturnya}, {quoted: m})
} else if (setmenu == "payment"){
let numb = ["7.76","15.48","8.92","10.72","13.48","4.39","5.99","2.56"]
let amont = numb[Math.floor(Math.random() * numb.length)]
conn.relayMessage(from,  {
requestPaymentMessage : {
expiryTimestamp: 0,												
currencyCodeIso4217: 'USD',
amount1000: (amont) * 1000,
requestFrom: `${sender.split('@')[0]}@s.whatsapp.net`,
noteMessage: {
extendedTextMessage: {
text : menunya+readmore+"\n"+fiturnya,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
}
}
}
}
}
}, {})
} else if (setmenu == "livelocation"){
conn.relayMessage(from, { liveLocationMessage: { 
degreesLatitude: 35.676570,
degreesLongitude: 139.762148,
caption : menunya+readmore+"\n"+fiturnya,
sequenceNumber: 1656662972682001, timeOffset: 8600, jpegThumbnail: null,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
containsAutoReply: true,
showAdAttribution: true,
}
}
}
}, {quoted: m})
} else if (setmenu == "document2"){
conn.send5ButDoc(from, menunya, readmore+fiturnya, fs.readFileSync('./stik/thumbnaildokumen.jpg'), mok, contextInfo, {quoted: m})
}
await sleep(1500) 
sendvn(dstuk)
}
break
case 'setmenu':
if(!isOwner) return onlyOwner()
if ((args[0]) === 'katalog'|| (args[0]) === 'product' ){
setmenu = "katalog"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
} else  if ((args[0]) === 'lokasi2'|| (args[0]) === 'prolocation2' ){
setmenu = "location2"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
} else if ((args[0]) === 'image'|| (args[0]) === 'img' ){
setmenu = "image"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
} else if ((args[0]) === 'lokasi' ){
setmenu = "location"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
} else if ((args[0]) === 'image2'|| (args[0]) === 'img2' ){
setmenu = "image2"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
}else if ((args[0]) === 'pptx'){
docType = "pptx"
setmenu = "document"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
} else if ((args[0]) === 'xlsx'){
docType = "xlsx"
setmenu = "document"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
} else if ((args[0]) === 'zip'){
docType = "zip"
setmenu = "document"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
} else if ((args[0]) === 'pdf'){
docType = "pdf"
setmenu = "document"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
} else if ((args[0]) === 'docx'){
docType = "docx"
setmenu = "document"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
} else if ((args[0]) === 'gif'){
setmenu = "gif"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
} else if ((args[0]) === 'nobut'){
setmenu = "nobutton"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
} else if ((args[0]) === 'payment'){
setmenu = "payment"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
} else if ((args[0]) === 'livelocation'){
setmenu = "livelocation"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
}  else if (!q) {
sendAnti(`SETTING MENU

1. Gif
2. Img
3. Lokasi2
4. Lokasi
5. image2
6. katalog

--- No Button ---

1. nobut
2. payment
3. livelocation`)
} else {
setReply("Menu tidak di temukan om")
}
break 	
case 'sc':
case 'script':
case 'sourcecode':{
let teks = `Halo, ${ucapanWaktu} kak @${sender.split('@')[0]}

❒─────────────
├ Runing On
├ Replit : https://replit.com/@Fahrul6868
❒──────────────────────⁛⸙

𝗡𝗢𝗧𝗘 :
Nih bwang SC bot nye, free salin aje linknye
Terus misalnya loe udeh masuk tinggal *FORK*
Atau bisa juga langsung Run ye .`
sendAnti(teks)
await sleep(2000)
Tutor(from)
}
break
case 'confes':
case 'confess':
case 'menfes':
case 'menfess':
case 'pesanrahasia':{
if (isGroup) return setReply('Khsus Private Chat Bot')
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
try {
if (args.length < 1) return setReply(`Penggunaan ${prefix + command} 62xnxx|dari siapa|pesan rahasia`)
if (args[0].startsWith('08')) return setReply('Awali nomor dengan 62') 
//if (roomA || roomB == "CHATTING" ) return reply(`Kamu masih berada di dalam chat, ketik *${prefix}stop* untuk keluar dari chatmu`)
let nomor = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") 
let org = q.split("|")[1];
let dari = q.split("|")[2];

let foto = ppRandom
let gambar = foto[Math.floor(Math.random() * foto.length)]

let image = { url : `${gambar}`, type : "image/jpeg" }		
let pesan = `${ucapanWaktu} kak, ada Pesan Rahasia nih buat kamu!

Dari : *${org}*
*Pesan :*
"${dari}"
`
let butprofile = [
{ buttonId: `${prefix}stop`, buttonText: { displayText: `ᴏᴜᴛ ᴄʜᴀᴛ` }, type: 1 },
{ buttonId: `${prefix}startmenfes ${senderNumber}`, buttonText: { displayText: `✍️ ʙᴀʟᴀs` }, type: 1 } ];
let buttonMessage = {
image: image,
caption: pesan,
footer: `Pesan ini ditulis oleh seseorang\nBotz hanya menyampaikan saja :)`,
buttons: butprofile,
headerType: 4
}	

await conn.sendMessage(nomor+'@s.whatsapp.net', buttonMessage, {quoted : fke})
await sleep(1500)
conn.sendMessage(from, {text:`Sukses mengirim pesan tunggu di balas ya kak\nJika tidak dibalas kirim *${prefix}stop* untuk keluar dari room chat`},{quoted:fkontak})   

} catch (err){
console.log(err)
setReply(`*Ketik yang bener dong kak!*\nContoh : ${prefix + command} +62xxx|dari siapa|pesan rahasia`)
}
db.data.users[sender].limit -= 1
}
break
case 'stop':
case 'keluar': {
//if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Untuk Group!')
if(roomA && roomA.state == "CHATTING"){

await conn.sendMessage(roomA.b, { text: `Pengirim mu telah meninggalkan chat`})
await setTimeout(() => {
setReply("Kamu telah keluar dari chat")
roomA.a = roomA.b
roomA.b = ""
roomA.state = "WAITING"
roomA.expired = Date.now() + toMs("5m")
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))

},1000)

} else if(roomA && roomA.state == "WAITING"){
reply("Kamu telah keluar dari chat")
//anonChat.splice(roomA, 1)
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))

anonChat.splice(anonChat.indexOf(roomA, 1)) 
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
} else if(roomB && roomB.state == "CHATTING"){
await conn.sendMessage(roomB.a,{ text: `Pengirim mu telah meninggalkan chat`})
reply("Kamu telah keluar dari chat")
  
roomB.b =""
roomB.state = "WAITING"
roomB.expired = Date.now() + toMs("5m")
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
} else reply(`Kamu sedang tidak berada di dalam chat`)
}
break
case 'startmenfes': {
if (isGroup) return setReply('Khusus Chat Bot!')
if(!q) return setReply("Masukan nomer yang mau di chat")
if (roomA || roomB == "CHATTING" ) return reply(`Kamu masih berada di dalam chat, ketik *${prefix}stop* untuk keluar dari chatmu`)
let id = + new Date
const obj = {
id,
a: m.sender,
b: Input,
state: "CHATTING",
expired: "INFINITY"
}
anonChat.push(obj)
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
reply(`Kamu telah membuat room chat sekarang kamu bisa mengirim pesan, kirim perintah ${prefix}stop untuk keluar chat`)
conn.sendText(`${Input}`, `Nomer yang kamu kirim telah menerima pesan kamu\nSekarang kamu bisa mengirim pesan, Ketik .stop untuk keluar`)
}
break  
case 'bcgc':{
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply('Teksnya?')
let getGroups = await conn.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi" 
setReply(`Mengirim Broadcast Ke ${anus.length} Chat, Waktu Selesai ${anus.length * 0.5 } detik`)
let yesnih = [
{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
{"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]

let muk = [{urlButton: {displayText: `Sewa`,url: `https://wa.me/p/8960486383991478/6285786539008`}}]
let teks = `${q}`

if (isImage || isQuotedImage) { //Image
let buff = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
//let buffer = fs.readFileSync(file)
for (let i of anus) {
await sleep(1000)
await conn.sendMessage(i, {caption: teks, image: fs.readFileSync(buff)}, { quoted: ftroli})
}
fs.unlinkSync(buff)
} else  if (isVideo || isQuotedVideo) { //Video
let buff = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
for (let i of anus) {
await sleep(1000)
await conn.sendMessage(i, {caption: teks, video: buff}, { quoted: ftroli})
}
fs.unlinkSync(buff)
} else if (isAudio || isQuotedAudio) { //Audio
let buff = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
for (let i of anus) {
await sleep(1000)
await conn.sendMessage(i, {caption: teks, audio: fs.readFileSync(buff)}, { quoted: ftroli})
}
fs.unlinkSync(buff)
} else {
for (let i of anus) {
let toks = `${q}
`+readmore+`     
⫹⫺ Date : ${calender}
⫹⫺ Time : ${timeWib}
⫹⫺ Runtime : ${clockString(time)}`

await sleep(1000)
await conn.sendMessage(i, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: toks })
//await conn.sendMessage(i, { text : toks }, { forwardingScore: 50, isForwarded: true } ) 
}
}
setReply(`Sukses Mengirim Broadcast Ke ${anus.length} Group`)
}
break 
case  'dashboard':{
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || 'lamanya'
const d = (await import("lowdb")).default;
const getFolderSize = (await import("get-folder-size")).default;
let storage = await getFolderSize.loose('.');
let moduls = await getFolderSize.loose('./node_modules');
let session = await getFolderSize.loose('./session')
let databse = await getFolderSize.strict('./database/database.json');
for (let i of hitnya){
let cekvipp = ms(i.expired - Date.now())
var resetnye = `${cekvipp.hours} jam ${cekvipp.minutes} menit`             
} 

 
  
let teks =`
*Dashboard*     
Runtime : ${clockString(time)}
Reset : ${resetnye}
Total Hit : ${thisHit.toLocaleString()}

*Storage*
Internal : ${FileSize(storage)}
Modules : ${FileSize(moduls)}
Session : ${FileSize(session)}
Database : ${FileSize(databse)}
`
let fall ="*Commands Today*  \n"
let totalFail =[]
let totalSuc = []
let total = 0
let tot = 0
await dash.map(async function(e, i){
fall += "*•*"+` ${e.cmd} : ${e.succes+e.failed} \n`   
await totalFail.push(e.failed)
await totalSuc.push(e.succes)
});
 
for(let i = 0; i < totalFail.length; i++){
total += totalFail[i]
} 

  for(let a = 0; a < totalSuc.length; a++){
  tot += totalSuc[a]
  } 
 
let akoh = `Total : ${dash.length} used`
let tod ="*Command Failed*\n"
let filteredArray = await dash.filter(item => item.failed > 0 )
await filteredArray.map(async function(e, i){
tod += "*•*"+` ${e.cmd} : ${e.failed} \n`   

});
let aw = `Total : ${filteredArray.length} failed`    
let tekz = teks+"\n\n"+fall+"\n"+akoh+"\n\n"+"*Command Status* \n"+" *•* Succes : "+tot+"\n"+" *•* Failed : "+total+"\n\n"+tod+"\n\n"
setReply(tekz)                                                        
}
break
//==================================================================================================// 
case 'play': 
case 'ytmp3': 
case 'ytaudio':
case 'playmusik':
case 'playmusic': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (!q) return setReply("Kirim perintah judul lagu/link youtube nya bwang")
try {
sendSticker(stikot)
let rus = await yts(q)
if (rus.all.length == "0") return setReply("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')
try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
try{
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/default.jpg`
}
let inithumb = await getBuffer(thumbnya)
let teks = `*乂 Y O U T U B E - M P 3*

> Channel : ${res.author.name}
> Viewers : ${h2k(res.views)} Kali
> Duration : ${res.timestamp}
> Url : ${res.url}`

conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true, 
title: `${res.title}`,
body: `${week} , ${calender}`,																													
mediaType: 2,  
renderLargerThumbnail : true,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}}, image: {url: inithumb},text: teks},{quoted: m})                                        
downloadMp3(`${res.url}`) 
} catch (err){
console.log(err)
setReply(`Server sedang error`)
}
db.data.users[sender].limit -= 1  
}
break
case 'ytmp4':
case 'playmp4':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (!q) return setReply("Kirim link youtube nya bwang")

sendSticker(stikot)
if (q.includes("https://youtube.com/channel/")) return setReply("Goblok luh kak itu bukan link videonya bangsat")
if (q.includes("https://youtu.be/")){
var videoId = q.replace('https://youtu.be/', '')
} else if (q.includes("https://youtube.com/watch?v=")){
var videoId = q.split('=')[1]
} else if (q.includes("https://youtube.com/shorts/")){
var videoId = q.replace('https://youtube.com/shorts/', '')
}  else {
return setReply("Link tidak tersedia atau mungkin kadaluarsa")
}
let link =`https://youtube.com/watch?v=${videoId}`
let anu = await yts(link)
if (anu.all.length == "0") return setReply("Video tidak di temukan")
try{
var foto = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
} catch (err){
var foto = anu.all[0].image
}
const inithumb = await getBuffer(foto)
try{
let info = await ytdl.getInfo(link);
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
if (Number(format.contentLength) > 40000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)
let teks = `*乂 Y O U T U B E - M P 4*

> Channel : ${anu.all[0].author.url}
> Ext : 360p
> Size : ${FileSize(format.contentLength)}
> Duration : ${anu.all[0].timestamp}
> Url : ${anu.all[0].url}}

*_Tunggu sebentar ya kak sedang mengirim Video!_*`

conn.sendMessage(from, { contextInfo: { externalAdReply: {showAdAttribution: true, 
title: `${anu.all[0].title}`,
body: `${week} , ${calender}`,																													
mediaType: 2,
renderLargerThumbnail : true,
thumbnail: inithumb,
mediaUrl: anu.all[0].url,
sourceUrl: anu.all[0].url
}}, text: teks},{quoted: m}) 
downloadMp4(q) 
} catch (err){
console.log(err)
setReply(`Bjir durasinya ${anu.all[0].timestamp} 😤\nAu ah ga mau download`)
}
db.data.users[sender].limit -= 1 
}
break
case 'yts':
case 'ytsearch':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (!q) return setReply('Apa yang mau dicari bwang ?')

try {
sendSticker(stikot)
let rus = await yts(q)
let res = await rus.all.filter(v => v.type == 'video')
let videoID = res[0].videoId

try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let teks = `*乂 S E A R C H - V I D E O*

🌐 Upload : ${res[0].ago}
⏱️ Durasi : ${res[0].timestamp}
🎥 Channel : ${res[0].author.name}
🖇️ Link : ${res[0].url}

*_Tunggu sebentar ya kak sedang mengirim Video!_*`
let imag = await getBuffer(res[0].image)
conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true, 
title: `${res[0].title}`,
body: `${week} , ${calender}`,	
mediaType: 2,  
renderLargerThumbnail : true,
thumbnail: imag,
mediaUrl: res[0].url,
sourceUrl: res[0].url
}}, image: {url: imag},text: teks},{quoted: m})         
downloadMp4(`${res[0].url}`)
} catch (err){
console.log(err)
setReply(`Bjir durasinya ${res[0].timestamp} 😤\nAu ah ga mau download`)
}
db.data.users[sender].limit -= 1 
}
break  
case 'playmp3':
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (!isUrl) return setReply("Masukan link youtube nya bwang")

sendSticker(stikot)
try{
let info = await ytdl.getInfo(q);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
try{
var low = audioFormats[2].contentLength
} catch (err){
var low = audioFormats[0].contentLength
}
if (Number(low) > 15000000 ) return setReply(`Bjir sizenya ${FileSize(low)}\nAu ah ga mao download 😤`)
if (audioFormats[0].contentLength == "undefined"){
var rus = await yts(q)
//var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]
if (res.timestamp.split(":") > "10") return setReply("Tidak bisa mendownload audio lebih dari 10 menit")
}
downloadMp3(q) 
} catch (err){
console.log(err)
db.data.users[sender].limit -= 1 
}
break
case 'twitterdl': {
if (!isGroup) return onlyGroup()
if (!q) return setReply (`Linknya mana bwang ?\nContoh: ${prefix + command} https://twitter.com/Ceice/status/1568760979332239363?t=Fu5RjUmQB1KELXt0Toj8FA&s=19`)

sendSticker(stikot)
let results = await twitterdlv2(q)
for (const { url } of results) await conn.sendMedia(from, url, m, {caption: "*[ ✓ ] S U C C E S*"})
console.log(results)
}
break
case 'fbdl':
case 'facebook':{
if (!isGroup) return onlyGroup()
try{
if (!q) return setReply ('Linknya?')

sendSticker(stikot)
let res = await savefrom(args[0])
conn.sendMessage(from, {caption: "*[ ✓ ] S U C C E S*", video: {url: res.url[0].url}}, {quoted: m})
} catch (err){
return setReply ("Sedang erorr coba lagi nanti")
}
}
break
case 'twitter': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (!q) throw 'Input URL'
async function twitterDl(url) {

sendSticker(stikot)
let id = /twitter\.com\/[^/]+\/status\/(\d+)/.exec(url)[1]
if (!id) throw 'Invalid URL'
let res = await fetch(`https://tweetpik.com/api/tweets/${id}`)
if (res.status !== 200) throw res.statusText
let json = await res.json()
if (json.media) {
let media = []
for (let i of json.media) {
if (/video|animated_gif/.test(i.type)) {
let vid = await (await fetch(`https://tweetpik.com/api/tweets/${id}/video`)).json()
vid = vid.variants.pop()
media.push({
url: vid.url,
type: i.type
})
} else {
media.push({
url: i.url,
type: i.type
})
}
}
return {
caption: json.text,
media 
}
} else throw 'No media found'
}

let res = await twitterDl(q)
await setReply('Please wait...')
for (let x = 0; x < res.media.length; x++) {
let caption = x === 0 ? res.caption.replace(/https:\/\/t.co\/[a-zA-Z0-9]+/gi, '').trim() : ''
//conn.sendFile(m.chat, res.media[x].url, '', caption, m)
conn.sendMedia(from, res.media[x].url, m, {caption: caption})
}
db.data.users[sender].limit -= 1 
}
break
case 'zippy':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
let { extract } = await import( 'zs-extract')
let { lookup } =  await import( 'mime-types')
if (!args[0]) return setReply(`Masukkan URL zippyshare yang ingin didownload.\n\nContoh: ${prefix + command} https://www83.zippyshare.com/v/wD7mX1i0/file.html`)
if (!args[0].includes('zippyshare.com')) return setReply( 'Invalid URL!\nPastikan URL merupakan URL zippyshare.')

sendSticker(stikot)
for (let i = 0; i < args.length; i++) {
if (!args[i].includes('zippyshare.com/v')) continue
let res = await extract(args[i])
let mimetype = await lookup(res.download)
conn.sendMessage(m.chat, { document: { url: res.download }, fileName: res.filename, mimetype }, { quoted: m})
}
db.data.users[sender].limit -= 1 
}
break
case 'song': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (q === 'help') {
return setReply(`Command : ${command}\n🧩 Category : Search\n🛠 ️Usage : ${prefix + command} back in black\n\n📚 Description : Sends song in Whatsapp `)
}
if (!args.join(" ")) return setReply(`Example : ${prefix + command} Back in black`)
let search = await yts(q)
let listSerch = []
let teskd = `📂 Youtube Search by *${fake1}*\n🎵 Result From : *${args.join(" ")}*`
for (let i of search.all) {
listSerch.push({
title: i.title,
rowId: `${prefix}playmp3 ${i.url}`,
description: `👤 Author : ${i.author.name} / ${i.timestamp}`
})
}
const sections = [
{
title: "─────────── 「 SILAHKAN DI PILIH ^_^ 」───────────",
rows: listSerch
}
]
const listMessage = {
text: teskd,
buttonText: "ᴄʟɪᴄᴋ ʜᴇʀᴇ!",
sections
}
conn.sendMessage(from, listMessage, {quoted: m})
db.data.users[sender].limit -= 1 
}
break  
case 'mediafire':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
const { mediafiredl } = require('@bochilteam/scraper')

if (q.startsWith("https://www.mediafire.com")){
let nana = await mediafiredl(q)
if (nana.filename == "") return setReply("Error itu bukan file, kalo ga tau cara make mediafire mending ga usah make") 
console.log(nana)
let image = { url : "https://telegra.ph/file/0a45359703b3a8fdffb8c.jpg"}
let teks = `*乂 M E D I A F I R E*

📂 File Name : ${nana.filename}
📄 File Size : ${nana.filesizeH}
🌐 Upload : ${nana.aploud}

*_Tunggu sebentar ya kak sedang mengirim File!_*`	

const contextInfo = {
mentionedJid: [sender],
externalAdReply:{
showAdAttribution: true, 
title: `${week} , ${calender}`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: image.url,
sourceUrl: `${nana.url}`
}
}  
conn.sendMessage(from ,{ text : teks, contextInfo},{quoted:m})
if (nana.filesize > 400000 && !isOwner){
if (sender.startsWith("62"))
await setReply("File size melebihi batas,\nbatas yang di tentukan adalah 400mb")              
return
}
await conn.sendMedia (from, nana.url, m, {fileName: nana.filename})
db.data.users[sender].limit -= 1 
}
}
break
case 'gdrive': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
const { sizeFormatter } = await import( 'human-readable')
let image = { url : "https://telegra.ph/file/980b0d179669359c650f3.jpg"}
let formatSize = sizeFormatter({
std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`
})
	
async function GDriveDl(url) {
let id
if (!(url && url.match(/drive\.google/i))) return setReply( 'Link gdrivenya mana ?')
id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
if (!id) return setReply( 'ID Not Found')
let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
method: 'post',
headers: {
'accept-encoding': 'gzip, deflate, br',
'content-length': 0,
'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
'origin': 'https://drive.google.com',
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
'x-drive-first-party': 'DriveWebUi',
'x-json-requested': 'true'
}
})
let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
if (!downloadUrl) return setReply( 'Link Download Limit!')
let data = await fetch(downloadUrl)
if (data.status !== 200) throw data.statusText
return { downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type') }
}
	
if (!q) return setReply( 'Input URL' )
GDriveDl(args[0]).then(async (res) => {
let teks = `*乂 G D R I V E - D O W N L O A D*

📂 File Name : ${res.fileName}
📄 File Size : Not Found
🌐 Mimetype : ${res.mimetype}

*_Tunggu sebentar ya kak sedang mengirim File!_*`	
	
const contextInfo = {
mentionedJid: [sender],
externalAdReply:{
showAdAttribution: true, 
title: `${week} , ${calender}`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: image.url,
sourceUrl: `${res.downloadUrl}`
}
}  
conn.sendMessage(from ,{ text : teks, contextInfo},{quoted:m})
await sleep(1000)
conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
})
db.data.users[sender].limit -= 1 
}
break
case 'ig2':
case 'igdl2':
case 'instagram2':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
try{

sendSticker(stikot)
if (!q) return setReply (`Linknya?\nContoh: ${prefix + command} https://www.instagram.com/reel/CiWiVlhpFwQ/?igshid=YmMyMTA2M2Y=`)
let igreel = budy.includes("https://www.instagram.com/reel/")
let igtv = budy.includes("https://www.instagram.com/tv/")
let igp = budy.includes("https://www.instagram.com/p/")

if (igreel){
let results = await instagramdlv3(q)
for (const { url } of results) await conn.sendMedia(from, url, m, {caption: "*[ ✓ ] S U C C E S*"})
console.log(results)

} else if (igtv){
Download.insta_post(q).then(async (data) => {
conn.sendMessage(from, {caption: data.title, video: {url: data.post1.url} }, {quoted: m})
console.log(data)
console.log(data.url)
})
} else if (igp){
let results = await instagramdlv3(args[0])
for (const { url } of results) await conn.sendMedia(from, url, m, {caption: "*[ ✓ ] S U C C E S*"})
console.log(results)
db.data.users[sender].limit -= 1 
} 
/*
else {
(q).then(async (data) => {
conn.sendMedia(from, data.data, m)
console.log(data)
})
*/
} catch (err){
return setReply ('Server sedang error coba lagi besok')
}
}
break
case 'igdl': 
case 'instagramdl':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
try{
if (!q) return setReply("Masukan link ig nya bwang")

sendSticker(stikot)
if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi)) return setReply( `*Link salah! Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!*\n\ncontoh:\n${prefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_medium=copy_link`)
const {instagramdlv3} = await import("@bochilteam/scraper")
let igreel = q.includes("https://www.instagram.com/reel/")
let results = await instagramdlv3(args[0])
for (const { url } of results) await conn.sendMedia(from, url, m, {caption: "*[ ✓ ] S U C C E S*"})
} catch(err){
const instagramGetUrl = require('instagram-url-direct')
const results = (await instagramGetUrl(args[0])).url_list[0]
conn.sendFile(m.chat, results, 'instagram.mp4', `*[ Done ]*`, m)
}
db.data.users[sender].limit -= 1 
}
break
case 'ig': 
case 'instagram':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

sendSticker(stikot)
if (q.startsWith("http")){
const instagramGetUrl = require('instagram-url-direct')
const results = (await instagramGetUrl(args[0])).url_list[0]
conn.sendFile(m.chat, results, 'instagram.mp4', `*[ ✓ ] S U C C E S*`, m)
} else {
if (!q) setReply(`Example use ${prefix}${command} <username>`)
  
}
db.data.users[sender].limit -= 1 
}
break
case 'tt': 
case 'tiktok':
case 'ttnowm':
case 'tiktoknowm':{
if (!isGroup) return onlyGroup()
if (args.length < 1) return setReply('Link nya mana kak ?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

sendSticker(stikot)
if (q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if (q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if (q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return setReply("Masukan link tikok, contoh https://vt.tiktok.com/")
}
//Jika tiktok error ganti dengan tiktokdlv2 , tiktokdlv3
const { tiktokdlv2 } = await require('@bochilteam/scraper')
const { author: { nickname }, video, like, description } = await tiktokdlv2(args[0])
tiktokdlv2(lin).then(res => {
let ep = res.video.no_watermark
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, caption: `*[ ✓ ] S U C C E S*\n\nAuthor : ${nickname}${description ? `\nDescription : ${description}` : ''}`, video: {url: ep}},{quoted: m})
setTimeout( () => {
tiktokMp3(`${args[0]}`)
}, 2000)
.catch((err) => setReply('Server sedang error coba lag besok!'))
})
db.data.users[sender].limit -= 1 
}
break   
case 'tiktok2': 
case 'ttnowm2':
case 'tiktoknowm2':{
if (!isGroup) return onlyGroup()

try{  
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (!isUrl) return setReply (`Masukan link tiktok dengan benar\nContoh: ${prefix + command} https://vm.tiktok.com/ZSRfArwXH/`)
if (args.length < 1) return setReply(`Link?\nContoh: ${prefix + command} https://vm.tiktok.com/ZSRfArwXH/`)

sendSticker(stikot)
savefrom(q).then(res => {

conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, caption: `*[ ✓ ] S U C C E S*\n\nAutor : ${res.meta.source}\nDesc : ${res.meta.title}`, video: {url: res.url[0].url}},{quoted: m})
setTimeout( () => {
tiktokMp3(`${args[0]}`)
}, 2000)   
}).catch(async _ =>  calip.downloader.tiktok(args[0]).then(res => {
console.log(res)

conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, caption: `*[ ✓ ] S U C C E S*\n\nAutor : ${res.author}\nDesc : ${res.title}`},{quoted: m})
setTimeout( () => {
tiktokMp3(`${args[0]}`)
}, 2000)
}))

} catch (err){
return setReply ('Link Erorr, Video Tidak di Temukan!!')
}
db.data.users[sender].limit -= 1 
}
break  
case 'ttaudio':
case 'tiktokaudio':
case 'tiktokmusik':{ 
if (!isGroup) return onlyGroup()
if (args.length < 1) return setReply('Kirim linknk nya bwang')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")

sendSticker(stikot)
if (q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if (q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if (q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return setReply("Masukan link tikok, contoh https://vt.tiktok.com/")
}
tiktokdl(lin).then( async res => {
let ep = res.video.no_watermark                    
let nana = await getBuffer(ep)
let ran = getRandom('.mp3')
let ron = getRandom('.mp4')
fs.writeFileSync(ron, nana)
exec(`ffmpeg -i ${ron} -vn ${ran}`, (err) => {
fs.unlinkSync(ron)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buffer453, mimetype: 'audio/mp4'}, { quoted: m })
fs.unlinkSync(ran)
})
}).catch((err) => setReply('Server sedang error coba lagi besok'))
}
break
case 'speed':
sendAnti(`〽️ Speed: ${latensi.toFixed(4)} Second`)
break   	   
case 'runtime':{
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || 'lamanya'
let teks =`⏰ Bot aktif selama ${clockString(time)}`
sendAnti(teks)
}
break  
//==================================================================================================// 
case 'resize':
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (isQuotedImage || isImage) {
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi" 
if (!q) return setReply(`Masukan ukuran panjangxlebar, contoh ${prefix+command} 300x300`)

sendSticker(stikot)
let panjang = q.split('x')[0] 
let lebar = q.split('x')[1] 
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.jpeg')
exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar}  ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, mimetype: 'image/jpeg', image: buffer453, caption: `*[ Done kak ]* ${q}`}, { quoted: m })		
fs.unlinkSync(ran)
})
} else {
setReply("Reply Imagenya")
db.data.users[sender].limit -= 1 
}
break     
case  'pinterest':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi" 
let { pinterest } = (await import("../lib/pinterest.js"))
if (args.length < 2) return setReply(`Kirim perintah ${command} teks atau ${command} teks --5`)

sendSticker(stikot)
var jumlah;
if (q.includes('--')) jumlah = q.split('--')[1]
pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
if (q.includes('--')) {
if (data.result.length < jumlah) {
jumlah = data.result.length
setReply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
}
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(from, { image: { url: data.result[i] }})
}
} else {
let buttons = [{buttonId: `${prefix + command} ${q}`,buttonText:{displayText: `➡️ ɴᴇxᴛ ᴘʜᴏᴛᴏ`},type:1}]                            
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: { url: pickRandom(data.result) }, caption: `*[ ✓ ] S U C C E S*`, buttons: buttons , footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lag besok!'))
}
})
db.data.users[sender].limit -= 1 
}
break
case 'google':{
if (!q) return setReply('Apa yang mau di cari bwang')
if (q == undefined || q == ' ') return setReply(`*Hasil Pencarian : ${q}* tidak ditemukan`)

setReply(mess.wait)
 ggs({'query': q, 'no-display': true}).then(res => {

let vars =``
vars += `*-------「 GOOGLE SEARCH 」-------*\n\n_*Hasil Pencarian: ${q}*_\n`
for (let i = 0; i < res.length; i++) {
vars +=  `\n═════════════════\n\n*Judul:* ${res[i].title}\n\n*Deskripsi:* ${res[i].snippet}\n\n*Link:* ${res[i].link}\n\n`
}
var teks = vars.trim()
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, text: teks }, { quoted: m })
})
}
break
case 'gimage':
case 'googleimg':
case 'googleimage': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (!q) return setReply(`Example: ${prefix + command} anime`)
	
sendSticker(stikot)
try {
gis(args.join(" "), async (error, result) => {
let n = result
let images = n[Math.floor(Math.random() * n.length)]
let buttons = [{buttonId: `${prefix + command} ${q}`,buttonText:{displayText: `➡️ ɴᴇxᴛ ᴘʜᴏᴛᴏ`},type:1}]                            
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: { url: images.url },caption: `*-------「 GIMAGE SEARCH 」-------*\n\n> *Query* : ${q}\n> *Media Url* : ${images.url}\n`, buttons: buttons , footer: `Hasil pencarian dari ${command}`}, { quoted: m })
})
} catch (e) {
setReply('Server sedang error coba lagi!')}
db.data.users[sender].limit -= 1 
}
break
case 'brainly':{
if (!isGroup) return onlyGroup()
if (!q) setReply( 'Soalnya apa ?')

setReply(mess.wait)
const brainly = new Brainly("id"); 
let nana =`https://www.logosvgpng.com/wp-content/uploads/2018/04/brainly-logo-vector.png`
let foto = await getBuffer(nana)   

let res = await brainly.searchWithMT(`${q}`, `id`)
console.log(res)
let teks =`*-------「 BRAINLY SEARCH 」-------*\n\n`

teks += res.map(({ question, answers }, i) => `
_*PERTANYAAN KE ${i + 1}*_
${question.content}${answers.map((v, i) => `

*JAWABAN KE ${i + 1}*${v.verification ? ' (Verified)' : ''}${v.isBest ? ' (Terpilih)' : ''}
${v.content}`).join``}`).join(`
═════════════════
`)
 
teks +=`\n\n_Thanks for choosing Brainly_`
 
conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnail: foto,
mediaUrl: res.url,
sourceUrl: res.url
}}, image: { url: foto }, text: teks }, { quoted: m })
}
break  
case 'lirik':{
if (!isGroup) return onlyGroup()
if (args.length < 1) return reply(`Kirim perintah ${command} judul lagu`)

setReply(mess.wait)
ra.Musikmatch(q).then(async(data) => {
var teks = `*${data.result.judul} - ${data.result.penyanyi}*\n\n${data.result.lirik}`
conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: url.data.result.thumb,
mediaUrl: res.url,
sourceUrl: res.url
}}, image: { url: data.result.thumb }, caption: teks }, { quoted: m })
}).catch(() => setReply(`Error coba lagi!`))
}
break
case 'ss':
case 'ssweb':{
if (!isGroup) return onlyGroup()
if (!q) return setReply("Masukan Link")
if (!isUrl(args[0]) && !args[0].includes('www.')) return reply("Link error");
let Url = `https://api.apiflash.com/v1/urltoimage?access_key=185eff3aa9fe4e3c8e30bda63b1fb9cf&wait_until=page_loaded&url=${q}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image:{url: Url},caption:"*[ Done kak ]*"},{quoted:m})
.catch((err) => reply('Server sedang error coba lagi besok'))
}
break
case 'ai':    
case 'openai':{
if (!isGroup) return onlyGroup()
try {
const configuration = new Configuration({
apiKey: `${api.ApikeyAi}`,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: q,
temperature: 0,
max_tokens: 1000,
top_p: 1,
frequency_penalty: 0.2,
presence_penalty: 0,
});

const teks = response.data.choices[0].text
let contextInfo = {
mentionedJid: [sender],
externalAdReply: {
showAdAttribution: true,
title: `𝗖𝗛𝗔𝗧 𝗚𝗣𝗧`,
body: `Halo, 👋 ${ucapanWaktu} ${pushname}`,
previewType:"PHOTO",
thumbnail: await (await fetch('https://telegra.ph/file/3426fb2863ee3cac6146e.jpg')).buffer(),
sourceUrl: `https://tinyurl.com/2mboggsd`
}
}

conn.sendMessage(from, { contextInfo, text: `${teks}\n`+readmore+`\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺ ${week} , ${calender}`}, { quoted: m })
} catch (err){
console.log(err)
setReply(`Server sedang error coba lagi besok`)
}
}
break
case 'tinyurl':{
if (args.length < 1) return setReply(`Masukan link nya bwang`)
if (!isUrl) return setReply(`Masukan link dengan benar`)

setReply(mess.wait)
const fetchText = (url, optiono) => {
return new Promise((resolve, reject) => {
return fetch(url, optiono)
.then(response => response.text())
.then(text => resolve(text))
.catch(err => {
console.log(color(err,'red'))
reject(err)
})
})
}
let okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
let shorti = `*Result : ${okok}*`
setReply(shorti)
}
break  
case 'bitly':{
const bitly = new BitlyClient('7d737131e678fc366699edead8bca146e69f6c78', {});
if (!q) return setReply("Masukan link nya bwang")
if (!isUrl) return setReply("Masukan link dengan benar")

setReply(mess.wait)
try {
let result = await bitly.shorten(q);
setReply(`Link: ${result.link}\nCreated at: ${result.created_at}`)
} catch(e) {
setReply(`Url invalid`)
}
}
break;
case 'tourl': {
setReply(mess.wait)
try {
let { UploadFileUgu } = (await import('../lib/uploader.js'))
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
if (isQuotedImage) {
let anu = await TelegraPh(media)
setReply(util.format(anu))
} else if (isQuotedVideo || isQuotedAudio || isQuotedSticker) {
let anu = await TelegraPh(media)
setReply(util.format(anu))
} 
await fs.unlinkSync(media)
} catch (err){
console.log(err)
setReply(`Reply gambar, sticker, video, atau audio yang sudah dikirim`)
}
}
break
//==================================================================================================// 
case 'afk':{
if (!isGroup) return onlyGroup()
if (!q) return setReply("Alasan afk afa ?")
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = q
setReply(`Kamu telah AFK\nAlasan ${q ? ': ' + q : ''}`)
} 
break
case 'tts':
if (!isGroup) return onlyGroup()
if (!q) setReply( `Use Example ${prefix}${command} en hello world`)
const gtts = require( 'node-gtts')
//const { gtts } = await import( 'node-gtts')
function tts(text, lang = 'id') {
// console.log(lang, text)
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath =  (1 * new Date) + '.mp3'
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}
	
const defaultLang = 'id'
	
	
let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted?.text) text = m.quoted.text
	
let ras
try { ras = await tts(text, lang) }
catch (e) {
m.reply(e + '')
text = args.join(' ')
if (!text) setReply( `Use Example ${prefix}${command} en hello world`)
ras = await tts(text, defaultLang)
} finally {
if (ras) conn.sendMedia(from, ras, m, {caption: "*[ Done kak ]"})
//conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
}
break
case 'tr':
case 'translate':{
if (!isGroup) return onlyGroup()
let translate = require('translate-google-api')
let defaultLang = 'en'
let tld = 'cn'
let toks = `
Contoh:
${prefix + command} <lang> [text]
${prefix + command} id your messages
Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim()

let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {to: lang})
} catch (e) {
result = await translate(`${text}`, {to: defaultLang,})
setReply(toks)
} finally {
setReply(result[0])
}
}
break
case 'bass': 
case 'blown': 
case 'deep': 
case 'earrape': 
case 'fast': 
case 'fat': 
case 'robot': 
case 'slow': 
case 'smooth':
if (!isGroup) return onlyGroup()
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/audio/.test(mime)) {
setReply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
sendMusic(buff)
fs.unlinkSync(ran)
})
} else setReply(`Reply audionya!`)
} catch (e) {
setReply(e)
}
break	
case 'ghost':
if(isQuotedAudio) { 
setReply(mess.wait)
let mele = await conn.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${mele} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(mele)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
sendMusic(buffer453)
fs.unlinkSync(ran)
}) 
} else {
setReply('Reply audionya')
}
break
case 'hode':
if(isQuotedAudio) { 
setReply(mess.wait)
let medok = await conn.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${medok} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(medok)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
sendMusic(buffer453)
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'nightcore':
if(isQuotedAudio) { 
setReply(mess.wait)
let mela = await conn.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${mela} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(mela)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
sendMusic(buffer453)
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'tupai':
if(isQuotedAudio) { 
setReply(mess.wait)
let medoi = await conn.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${medoi} -filter:a "atempo=0.8,asetrate=65100" ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(medoi)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
sendMusic(buffer453)
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'imut':
if(isQuotedAudio) { 
setReply(mess.wait) 
let masa = await conn.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${masa} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(masa)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
sendMusic(buffer453)
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
//==================================================================================================// 
case 'simigroup':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isSimi) return setReply("Sudah aktif!!");
db.data.chats[from].simi = true
setReply("Sukses mengaktifkan simi!");
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isSimi) return setReply("Udah off!!");
db.data.chats[from].simi = false
setReply("Sukses mematikan simi!");
} else if (!q) {
sendAnti('Sukses mengaktifkan simi bot')
}
}
break;
//==================================================================================================// 
case 's':
case 'stiker':
case 'sticker':
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

if (isImage || isQuotedImage || isVideo || isQuotedVideo) {
if (quoted.seconds > 11) return setReply('Maksimal 10 detik!')
let kualitas = isImage? 70 : 2
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: pushname, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: kualitas, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, sticker: nah }, { quoted: m })   																																
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} else {
setReply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
db.data.users[sender].limit -= 1 
}
break 
case 'take':
case 'swm': 
case 'wm':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

if (!q) return setReply("Reply sticker dengan nama Punya|Gw")
if (isImage || isQuotedImage|| isQuotedSticker) {
try{
let ahuh = args.join(' ').split('|')
let satu = ahuh[0] !== '' ? ahuh[0] : `${fake1}`
let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await conn.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: satu, // The pack name
author: dua, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
//await xm.sendMessage(from,{sticker: nah},{quoted: m})
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, sticker: nah }, { quoted: m })   
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
console.log(err)
}
}
db.data.users[sender].limit -= 1 
}
break		
case 'ttp':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
	
const text2png = require('text2png');
await fs.writeFileSync('out.png', text2png(q, {font: '100px coolvetica rg',
localFontPath: 'src/font/coolvetica rg.otf',
localFontName: 'coolvetica rg',
color: 'white',
textAlign: "left",
lineSpacing: 10,
strokeColor: "black",
strokeWidth : 2,
padding: 20}))
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = fs.readFileSync('out.png')
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: pushname, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, sticker: nah }, { quoted: m })   								
await fs.unlinkSync(stok)
await fs.unlinkSync('out.png')
db.data.users[sender].limit -= 1 
}
break
case 'smeme': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (!q) return setReply(`Masukan gambar dengan caption, contoh : ${prefix}smeme teks atas|teks bawah`)

sendSticker(stikot)
var top = q.split('|')[0] ? q.split('|')[0] : ''
var bottom = q.split('|')[1] ? q.split('|')[1] : ''
if (isQuotedImage ) {
	
try{
let olalah = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let anuah = await TelegraPh(olalah)
let media = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${anuah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)
	
} catch (err){
let olalah = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let anuah = await TelegraPh(olalah)
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
let anu2 = `https://api.memegen.link/images/custom/-/${bottom}.png?background=${anuah}`
exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return setReply(`${err}`)
await conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, sticker: fs.readFileSync(rano)}, {quoted: m})
await fs.unlinkSync(rano)
await fs.unlinkSync(ranp)
})
}
} else {
setReply('Reply gambar nya udin!')
}
db.data.users[sender].limit -= 1 
}
break  
case 'snobg': 
case 'nobg':
case 'removebg':{
if (!isGroup) return onlyGroup()
if ((isMedia || isQuotedImage && !isQuotedSticker)) {

const media = await conn.downloadAndSaveMediaMessage(quoted)
let ranw = getRandom('.webp')
let ranp = getRandom('.png')
let keyrmbg = `${api.ApiNobg}`
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let bufferir9vn5 = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, bufferir9vn5, (err) => {
if (err) return setReply ('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
makeSticker(fs.readFileSync(ranp),Sticker, StickerTypes)
fs.unlinkSync(ranp)
})
} else {
setReply(`Reply gambarnya udin!`)
}
}
break
case 'qc':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
let tekscuy = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!tekscuy) return setReply(`Cara Penggunaan ${prefix}qc teks`)

setReply(mess.wait)
const text = `${tekscuy}`
const username = await conn.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await conn.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
},
],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
let buffer = Buffer.from(res.data.result.image, "base64");
conn.sendImageAsSticker(from, buffer, m)
});
db.data.users[sender].limit -= 1  
}
break 
case 'patrick':
case 'petrik':
case 'stikpatrick': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'dogestick': 
case 'doge': 
case 'domge':
case 'dogesticker': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'lovestick' :
case 'slove':
case 'lovesticker': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'gura': 
case 'gurastick': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'paimon': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/Paimon')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
})
db.data.users[sender].limit -= 1
}
break
case 'sanime': 
case 'animestick': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'mukelu': 
case 'lu':
case 'mukestik': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/mukelu')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'emojimix': {
if (!isGroup) return onlyGroup()

setReply(mess.wait)
let [emoji1, emoji2] = q.split`+`
if (!emoji1) return setReply( `Example : ${prefix + command} 😅+🤔`)
if (!emoji2) return setReply( `Example : ${prefix + command} 😅+🤔`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
conn.sendImageAsSticker(from, res.url, m)
}
}
break
//==================================================================================================// 
case 'setppgroup': 
case 'setppgrup': 
case 'setppgc':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
//if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(isQuotedImage){
const media = await conn.downloadAndSaveMediaMessage(quoted)
const { img } = await generateProfilePicture(media)
await conn.query({ tag: 'iq',  attrs: { to : from, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})       
await setReply("Sukses")    
} else setReply("Reply fotonya")
}
break
case 'setppbot':{
if (!isOwner) return onlyOwner()
if(isQuotedImage){
const media = await conn.downloadAndSaveMediaMessage(quoted)
const { img } = await generateProfilePicture(media)
await conn.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})       
await setReply("Sukses")    
} else setReply("Reply fotonya")
}
break
case 'gc':
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
//if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if (!q) return setReply(`Contoh : ${command} close/open`)
if (args[0] == "close") {
conn.groupSettingUpdate(from, 'announcement')

} else if (args[0] == "open") {
conn.groupSettingUpdate(from, 'not_announcement')
} else {
setReply(`Contoh : ${command} close/open`)
}
break
case 'opentime':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
//if (!isBotGroupAdmins) return setReply(mess.only.badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return setReply(`Contoh : ${prefix}opentime 5 detik`)}
let del = await conn.sendMessage(from, { text:`Open time ${q} dimulai dari sekarang`}, {quoted: m})
setTimeout(() => deleteMessage(del), 5000)

setTimeout( () => {
conn.groupSettingUpdate(from, 'not_announcement')
}, timer)
}
break
case 'closetime':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
//if (!isBotGroupAdmins) return setReply(mess.only.badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return setReply(`Contoh : ${prefix}closetime 5 detik`)}
let ko = await conn.sendMessage(from, { text:`Close time ${q} dimulai dari sekarang`}, {quoted: m})
setTimeout(() => deleteMessage(ko), 5000)

setTimeout( () => {
conn.groupSettingUpdate(from, 'announcement')
}, timer)
}
break
case 'link':
case 'linkgc':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
//if (!isBotGroupAdmins) return setReply(mess.only.badmin)
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(from, {
text: 'Nih Link Groupnya\n\n',
templateButtons: [{
index: 1,
urlButton: {
displayText: `Salin Link`,
url: 'https://www.whatsapp.com/otp/copy/https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat)
}
}],
footer: `${fake1}`,
},{quoted:m})
}
break    
case 'kick':
case 'remove': {
if (!isGroup) return onlyGroup()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
//if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if (!Input) return setReply("Tag/Mention/Masukan nomer target")
if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
await conn.groupParticipantsUpdate(from, [Input], 'remove').then((res)).catch((err) => setReply(jsonformat(err))) 
}
break
case 'uyy':
case 'hidetag':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
//if (!isGroupAdmins && !isOwner) return m.reply(mess.only.admin)
let mem = [];
groupMembers.map( i => mem.push(i.id) )
conn.sendMessage(from, { text: q ? q : `Bebb`+readmore+`annn :v`, mentions: mem })
}
break
case 'kntlx': 
case 'infoall': 
case 'tagall':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
//if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!q) {
var inpo = `Bebb`+readmore+`annn :v`
} else var inpo = q 
let members_id = []
let tes = '\n'
await groupMembers.map( i => {
tes += `• @${i.id.split('@')[0]}\n`
members_id.push(i.id) })
mentions(`${inpo}
`+tes+``, members_id, false)
}
break
case 'd':
case 'del':
case 'delete':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
//if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
Log(chatUpdate)
if (!mentionByReply) return setReply("Reply pesan")
if (mentionByReply == botNumber) {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: mentionByReply } })
} else if(mentionByReply !== botNumber && isBotGroupAdmins){
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.quoted.id, participant: mentionByReply } })
} 
}
break
case 'ban':
case 'banned':{
if(!isGroup) return onlyGroup()
let alasan = "Spam Bot"
if (!isGroupAdmins && !isOwner)return onlyAdmin() 
if (q.startsWith("+")) {
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "")
let Name = await conn.getName(woke)
if(_ban.check(woke, ban)) return setReply("User sudah di ban sebelumnya")
_ban.add(Name,calender,woke,alasan, ban)
setReply( `Berhasil banned ${woke}`);
} else if(users){
let alasan = mentionByReply? q : mentionByTag? q.split("|")[1] : "Spam Bot"
if(alasan == undefined) alasan = "Tidak ada"
let Nomer = `${users.split("@")[0]}`
if(_ban.check(Nomer, ban)) return setReply("User sudah di ban sebelumnya")
let Name = await conn.getName(users)
if(ownerNumber.includes(users)) return setReply("Tidak bisa membanned owner")
_ban.add(Name,calender,Nomer,alasan, ban)
setReply( `Berhasil banned ${users.split("@")[0]}`);
} else setReply('Reply atau tag targetnya')
}
break
case 'unban':
case 'delban':
case 'unbanned':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins && !isOwner)return onlyAdmin() 
if (q.startsWith("+")) {
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
if(!_ban.check(woke, ban)) return setReply("User sudah di unban sebelumnya")
_ban.del(woke, ban)             
setReply( `Berhasil unbanned ${woke}`);
} else if(users){
let Nomer =`${users.split("@")[0]}`
if(!_ban.check(Nomer, ban)) return setReply("User sudah di unban sebelumnya")
_ban.del(Nomer, ban)             
setReply(`Berhasil unbanned ${users.split("@")[0]}`);
} else setReply('Reply atau tag targetnya')
}
break
case 'listban':{
if (!isGroup) return onlyGroup()
let banya = `List Banned\nJumlah : ${ban.length}\n\n`
ban.map(function(e, i){
banya +=(i+1)+`. Nomer : wa.me/${e.id}\n└▸ Tanggal : ${e.date}\n└▸ Alasan : ${e.reason} \n\n`            
});
setReply(banya)
}
break
case 'banchat':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
//if (!isOwner) return onlyOwner()
if (isBanchat) return setReply(`Udah di ban`)
db.data.chats[from].banchat = true
setReply(`Bot berhasil Ban di group ini`)
}
break
case 'unbanchat':
if (!isGroup) return onlyGroup()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
//if (!isOwner) return onlyOwner() 
try {
if (!isBanchat) return setReply(`Udah di UnBan`)
db.data.chats[from].banchat = false
setReply(`Bot telah di Unban di group ini`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break
//==================================================================================================// 
case 'me': 
case 'profil':
case 'profile': {
if (!isGroup) return onlyGroup()
let ppimg = await conn.profilePictureUrl(sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let { userXp, userLeveling } = (await import('../lib/user.js'))
	
try{
 let sol = await conn.fetchStatus(sender)
var stst = sol.status == undefined ? '' : sol.status 
} catch(err){
var stst = ""
  
}
let persenya =`${userPersen}`
let nana =`${userExp}/${requiredExp}`

let prmm = isPremium? isOwner? 'Premium' : user? user.premiumDate : '' : 'Not Premium'

let teks = `𝗣𝗥𝗢𝗙𝗜𝗟𝗘 𝗨𝗦𝗘𝗥

🆔 Nama : ${pushname} 
💰 Saldo  : Rp ${db.data.users[sender].balance.toLocaleString()}
📇 Status : ${isPremium ? 'Premium':'Free'}
🧬 Level : ${userLevel}
📟 User Hit : ${db.data.users[sender].hit}
🤖 Status Bot : ${isOwner ? 'Owner':'User'}
📲 No : wa.me/${sender.split("@")[0]}
🧸 Bio : ${stst}
`+readmore+`
⚡ Exp :  ${userXp(userPersen)} ${persenya.split(".")[0]}%
♻️ Total Exp : ${nana}
🔰 Grade : *${userLeveling(userLevel)}*
🕔 Expired : ${prmm}
📉 Limit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}`}
📈 Limit Game : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}`}
`

let its = await getBuffer (ppimg)

const canvacord = require("canvacord");
let image3 = new canvacord.Rank()
.setAvatar(its)
.setCurrentXP(math(userExp))
.setRequiredXP(requiredExp)
.setStatus("online")
.setProgressBar("#FFFFFF", "COLOR")
.setBackground( "COLOR","#141414")
.setCustomStatusColor("#ff1a8c")
.setUsername(`EXP: ${persenya.split(".")[0]}%,`)
.setLevel(userLevel)
.setRank(4)
.setOverlay("#3d3d3d")
.setDiscriminator("0007");

let foto = await getRandom(".png")
image3.build()
.then(async data => {
await canvacord.write(data,foto);
let gambar = await fs.readFileSync(foto)
let butprofile = [{ buttonId: `${prefix}shop`, buttonText: { displayText: `sʜᴏᴘ` }, type: 1 },{ buttonId: `${prefix}claim`, buttonText: { displayText: `ᴄʟᴀɪᴍ` }, type: 1 } ];
let buttonMessage = {
image:gambar,
caption: teks,
footer: copyright,
buttons: butprofile,
headerType: 4
}

//await conn.sendMessage(from, {image: gambar, caption: teks},{quoted: m})
await conn.sendMessage(from, buttonMessage,{quoted:m})
await fs.unlinkSync(foto)
});

} 
break
//==================================================================================================// 
case 'limit':    
case 'ceklimit':{
if (!isGroup) return onlyGroup()
var anuiti = getLevelingLevel(senderNumber, _level)
let teks = `*Name :* ${pushname}\n\nLimit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}`}\nLevel : ${anuiti}\nSaldo : *Rp ${db.data.users[sender].balance.toLocaleString()}*\nLimit Game : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}`}\n\nKamu dapat membeli limit dengan pilih tombol dibawah\nBermain game untuk mendapatkan saldo dan membeli limit .\n`
var but = [{buttonId: `${prefix}claim`, buttonText: { displayText: `ᴄʟᴀɪᴍ` }, type: 1 },
{buttonId: `${prefix}shop`, buttonText: { displayText: `sʜᴏᴘ` }, type: 1 }]
conn.sendMessage(from, {text: teks, buttons: but, footer: `${fake1}`, templateButtons: but }, {quoted: m})
}
break
case 'buylimit':{
if (!isGroup) return onlyGroup()
if (!q) return setReply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = Rp1000`)
if (q.includes('-')) return setReply(`Jangan menggunakan -`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
let ane = Number(math(q) * 1000)
if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
db.data.users[sender].balance -= ane
db.data.users[sender].limit += math(q)
setReply(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].limit}`)
}
break
case 'buyglimit':{
if (!isGroup) return onlyGroup()
if (!q) return setReply(`Kirim perintah *${prefix}buyglimit* jumlah limit yang ingin dibeli\n\nHarga 1 game limit = Rp 700`)
if (q.includes('-')) return setReply(`Jangan menggunakan -`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
let ane = Number(math(q) * 700)
if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
db.data.users[sender].balance -= ane
db.data.users[sender].glimit += math(q)
setReply(`Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].glimit}`)
}
break
case 'claim':
case 'daily':{
if (!isGroup) return onlyGroup()
const free = 5000
const prem = 10000
const moneyfree = 5000
const moneyprem = 10000
const timeout = 86400000
let time = global.db.data.users[m.sender].lastclaim + 86400000
 if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) return setReply( `Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${conn.msToTime(time - new Date())} lagi`)
 global.db.data.users[m.sender].exp += isPremium ? prem : free
 global.db.data.users[m.sender].balance += isPremium ? moneyprem : moneyfree
setReply(`Selamat kamu mendapatkan:\n\n+${isPremium? prem : free} Exp\n+${isPremium? moneyprem : moneyfree} Balance`)
global.db.data.users[m.sender].lastclaim = new Date * 1
} 
break 
case 'shop':{
if (!isGroup) return onlyGroup()
let teks = `SHOP GAME

Halo ${pushname} 
Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}

• List Harga
1 Limit : Rp 1000
1 Limit Game : Rp 700

NOTE :
Untuk membeli Limit ketik ${prefix}buylimit jumlah limit
Contoh : *${prefix}buylimit 10*

Untuk membeli Limit Game ketik ${prefix}buyglimit jumlah limit
Contoh : *${prefix}buyglimit 10*
 
Atau ketik *${prefix}buypremium* untuk membeli limit unlimited .`
setReply(teks)
}
break
case 'givesaldo':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!q) return setReply("Reply target dan Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
db.data.users[mentionByReply].balance += math(q)
setReply(`Berhasil menambakan saldo ke nomer ${mentionByReply.split("@")[0]}`)
}
break
case 'kurangsaldo':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!q) return setReply("Reply target dan Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
db.data.users[mentionByReply].balance -= math(q)
setReply(`Berhasil mengurangi saldo ke nomer ${mentionByReply.split("@")[0]}`)
}
break
case 'givelimit':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!q) return setReply("Reply target dan Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
db.data.users[mentionByReply].limit += math(q)
setReply(`Berhasil menambakan limit ke nomer ${mentionByReply.split("@")[0]}`)
}
break
case 'kuranglimit':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!q) return setReply("Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
db.data.users[mentionByReply].limit -= math(q)
setReply(`Berhasil mengurangi limit ke nomer ${mentionByReply.split("@")[0]}`)
}
break
//==================================================================================================// 
case 'toimg': {
if (!isGroup) return onlyGroup()
if (!isQuotedSticker) return setReply('Reply stickernya')

sendSticker(stikot)
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi"
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(err)
let buffer = fs.readFileSync(ran)
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: buffer, caption: `*[ Done kak ]*`}, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'tomp4':
case 'tovideo':
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (isQuotedSticker) {

sendSticker(stikot)
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi"
let file = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let outGif = `./temp/${getRandom('.gif')}`
let outMp4 = `./temp/${getRandom('.mp4')}`
//convert webp ke gif pakai imagemagick
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}

//lalu convert gif ke mp4 pakai ffmpeg
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, video: fs.readFileSync(outMp4), caption: `*[ Done kak ]*`}, { quoted: m })	
fs.unlinkSync(outGif)
fs.unlinkSync(outMp4)
fs.unlinkSync(file)
})
})
db.data.users[sender].limit -= 1 
}
break
case 'toptt':
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (isQuotedAudio){

sendSticker(stikot)
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply('Gagal mengkonversi audio ke ptt')
let topt = fs.readFileSync(ran)
await conn.sendMessage(from,{audio: topt, mimetype: 'audio/mp4', ptt:true}, {quoted: m})
fs.unlinkSync(ran)
})
} else {
setReply("Reply audio")
db.data.users[sender].limit -= 1 
}
break
case 'togif':
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if ( isQuotedSticker) {

sendSticker(stikot)
let file = await  conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let outGif = `./${getRandom('.gif')}`
let outMp4 = `./${getRandom('.mp4')}`

//convert webp ke gif pakai imagemagick
exec(`convert ${file} ${outGif}`,async (err) => {
await fs.unlinkSync(file)
if (err) {
console.log(err)
return setReply(`${err}`)
}

//lalu convert gif ke mp4 pakai ffmpeg
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}
await sendGif(fs.readFileSync(outMp4))
await fs.unlinkSync(outGif)
await fs.unlinkSync(outMp4)

})
})

} else if(isQuotedVideo){

sendSticker(stikot)
let outMp4 = getRandom('.mp4')
let file = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let nana = await fs.readFileSync(file)
await sendGif(nana)
await fs.unlinkSync(file)
db.data.users[sender].limit -= 1 
}
break
case 'tomp3':
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (isQuotedVideo || isVideo) {

sendSticker(stikot)
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await conn.sendMessage(from, {mimetype: 'audio/mp4', audio: buffer453}, { quoted: m })
fs.unlinkSync(run)
})
} else {
setReply("Reply videonya")
db.data.users[sender].limit -= 1 
}
break
case 'volume':
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (Number(args[0]) >= 11) return setReply("Maksimal volume adalah 10")

sendSticker(stikot)
if (isQuotedAudio){
let media3 = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, async (err, stderr, stdout) => {
if (err) return setReply('Error!')
let jadie = fs.readFileSync(rname)
await conn.sendMessage(from, {audio: jadie, mimetype: 'audio/mp4', ptt: true }, {quoted: m})
fs.unlinkSync(rname)
fs.unlinkSync(media3)
}
)
} else {
setReply('Reply audio!')
db.data.users[sender].limit -= 1 
}
break
case 'readmore':{
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
if (!q.includes('|')) return  setReply("Penggunaan teks|teks")
const text1 = q.substring(0, q.indexOf('|') - 0)
const text2 = q.substring(q.lastIndexOf('|') + 1)
setReply(`${text1}${readmore}${text2}`)
}
break
case 'addkick':{
if (!isGroup) return onlyGroup()
//if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!q) return setReply(`Masukan nomer atau reply target`)
let grup = db.data.kickon[from]
let number = Input.split("@")[0]
if(grup){
if(grup.includes(number)) return setReply("Target sudah ada di database")
grup.push(number)
setReply(`Berhasil memasukan ${number} ke dalam target kick
dan telah menandai user sebagai user Biadap`)
} else {
db.data.kickon[from] = []
//grup.push(number)
let teks =`Berhasil memasukan ${number} ke dalam target kick
dan telah menandai user sebagai user Biadap`
setReply(teks)
}
}
break
case 'delkick':{
if (!isGroup) return onlyGroup()
//if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!q) return setReply(`Masukan nomer atau reply target`)
let grup = db.data.kickon[from]
if(!grup) return setReply("Gunakan fitur addkick terlebih dahulu")
let number = Input.split("@")[0]
grup.splice(grup.indexOf(number,1))
setReply("Berhasil menghapus user dari target kick")
}
break
case 'listkick':{
if (!isGroup) return onlyGroup()
let kick = db.data.kickon[from]
if(!kick) return setReply("Group ini tidak memiliki listkick")
let banya = `List Kick\nJumlah : ${kick.length}\n\n`
kick.map(function(e, i){
banya +=(i+1)+`. Nomer : wa.me/${e}\n\n`            
});
setReply(banya)
}
break 
case 'delsampah':{
let directoryPath = path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return setReply('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("webm")   )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
if(filteredArray.length == 0) return setReply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})     
setReply(teks) 
await sleep(2000)
setReply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(file)
});
await sleep(2000)
conn.sendMessage(from, {text:"Berhasil menghapus semua sampah"})   
});
}
break  
//==================================================================================================// 
case 'addprem':{
if (!isOwner) return onlyOwner()
if(isGroup && users){
if(!q) return setReply(`Penggunaan :\n${prefix}addprem 30d\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)
if(mentionByReply){
var waktunya = q	
 } else if(mentionByTag) {
var waktunya = q.split(" ")[1] || q.split("|")[1]
if(waktunya == undefined) return setReply("Masukan waktu\ns = detik\nh = jam\nd =hari")
 }
 _prem.addPremiumUser(users, waktunya, premium)
let teks =`
Success
📛 Number: ${users.split("@")[0]}
📆 Days: ${conn.msToDate(toMs(waktunya))}
📉 Countdown: ${toMs(waktunya)}`

setReply(teks)
await conn.sendButMessage(users, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
	
} else if(!isGroup){
let usernya = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
let waktunye = q.split("|")[1]
if (!q.includes("|")) return setReply(`Penggunaan :\n${prefix}addprem nomer|waktu\nContoh : ${prefix}addprem nomor|30d\n\n- Pilihan waktu\ns = detik\nh = jam\nd =hari\n`)       
if (args[0].startsWith('08')) return setReply('Awali nomor dengan 62') 
if (_prem.checkPremiumUser (usernya, premium)) return setReply("User tersebut sudah di premium kak")   
let teks =`
Success
📛 Number: ${usernya.split("@")[0]}
📆 Days: ${conn.msToDate(toMs(waktunye))}
📉 Countdown: ${toMs(waktunye)}`
_prem.addPremiumUser (usernya, waktunye, premium)
await setReply(teks)
await conn.sendButMessage(usernya, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
} else setReply("Tag atau Reply usernya")
}
break
case 'delprem':
if (!isOwner) return onlyOwner()
if(Input){
if(!_prem.checkPremiumUser (Input, premium)) return setReply("Maap kak user tersebut tidak ada di database") 
_prem.delPremiumUser (Input, premium)
setReply(`Succes delete premium ${Input.split("@")[0]}`)          
} else setReply("Tag/Reply/Input nomer target")
break       
case 'listprem':{
let txt = `LIST PREMIUM\n\nTotal : ${premium.length}\n\n`
let men = [];
for (let i of premium){
Log(i.id)
men.push(i.id)
let cekvip = ms(i.expired - Date.now())
txt += `ID : wa.me/${i.id.split("@")[0]}\nExpired : ${cekvip.days} Hari ${cekvip.hours} Jam ${cekvip.minutes} Menit ${cekvip.seconds} Detik\n\n`
}
setReply(txt, men)
}
break
case 'cekprem':
case 'cekpremium':{
if (!isPremium && !isOwner) return onlyPrem()
let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
let premiumnya = `${cekvip.days} Hari(s) ${cekvip.hours} Jam(s) ${cekvip.minutes} Menit(s) ${cekvip.seconds} Detik(s)`
setReply(premiumnya)
}
break
//==================================================================================================// 
case 'clearerror':
if (!isOwner) return onlyOwner()
setReply("SukseS clear all error")
_error.clear(listerror)
break
case 'clearuser':
if (!isOwner) return onlyOwner()
setReply("Sukses clear all User")
db.data.users = {}
break
case 'clearban':{
if (!isOwner) return onlyOwner()
setReply("Sukses clear all Ban")
ban.length = 0
}
break
case 'clearlevel':
if (!isOwner) return onlyOwner()
setReply("Sukses clear all level")
db.data.level = []
break 
case 'clearhit':
if (!isOwner) return onlyOwner()
setReply("Sukses clear all hit")
db.data.hittoday = []
break 
case 'clearanonim':
if (!isOwner) return onlyOwner()
setReply("Sukses clear all anonim")
db.data.anonymous.length = 0
break 
case 'cleartoxic':
if (!isOwner) return onlyOwner()
setReply("Sukses clear all toxic")
db.data.toxic = []
break  
//==================================================================================================// 
case 'triggered':
case 'wasted':
case 'comrade':
case 'horny':
case 'blur':
case 'pixelate':
case 'simpcard':
case 'lolice':
case 'glass':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (isQuotedVideo && conn.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage.fileLength < 10000000 || isQuotedImage || isImage) {
setReply(mess.wait)
try{
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await conn.downloadAndSaveMediaMessage(quoted)
let anuah = await TelegraPh(olalah)
let media = `https://some-random-api.ml/canvas/${command}?avatar=${anuah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)

} catch (err){  
let owgi = await xdev.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(owgi)
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
let anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${anu}`
exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return setReply(`${err}`)
await conn.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: dev})
await fs.unlinkSync(owgi)
await fs.unlinkSync(ranp)
await fs.unlinkSync(rano)
})
}
  
} else if (isQuotedText) {
setReply(mess.wait)

try{
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await conn.profilePictureUrl(mentionByReply, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png') 
let media = `https://some-random-api.ml/canvas/${command}?avatar=${olalah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)

} catch (err){  
console.log(err)
let oppp = await conn.profilePictureUrl(mentionByReply, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${oppp}`
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return setReply(`${err}`)
await conn.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: m})
await fs.unlinkSync(oppp)
await fs.unlinkSync(ranp)
await fs.unlinkSync(rano)
})
}
}  else {
setReply('Reply gambarnya udin!')
}
db.data.users[sender].limit -= 1
}
break 
case 'hekel':
case 'hacker':
case 'hecker': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

sendSticker(stikot)
let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/hekel.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ ɴᴇxᴛ ᴘʜᴏᴛᴏ`},type:1}]                            
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url: a}, caption: `*[ ✓ ] S U C C E S*` , buttons: buttons , footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lag besok!'))
db.data.users[sender].limit -= 1
}
break
case 'islamic': 
case 'randomislam': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

sendSticker(stikot)
let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/Islamic.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ ɴᴇxᴛ ᴘʜᴏᴛᴏ`},type:1}]                            
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url: a}, caption: `*[ ✓ ] S U C C E S*` , buttons: buttons , footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lag besok!'))
db.data.users[sender].limit -= 1
}
break
case 'flaming1':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&script=fluffy-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `*[ ✓ ] S U C C E S*`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'flaming2':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `*[ ✓ ] S U C C E S*`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'flaming3':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `*[ ✓ ] S U C C E S*`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'flaming4':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `*[ ✓ ] S U C C E S*`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'flaming5':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `*[ ✓ ] S U C C E S*`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'flaming6':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `*[ ✓ ] S U C C E S*`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'flaming7':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://api.botcahx.biz.id/api/photooxy/carved-wood?text=${ini_txt}&apikey=Admin`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `*[ ✓ ] S U C C E S*`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'flaming8':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://api.botcahx.biz.id/api/photooxy/shadow-sky?text=${ini_txt}&apikey=${api.Botcahx}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `*[ ✓ ] S U C C E S*`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'flaming9':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://api.botcahx.biz.id/api/photooxy/naruto?text=${ini_txt}&apikey=${api.Botcahx}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `*[ ✓ ] S U C C E S*`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'flaming10':{ 
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://api.botcahx.biz.id/api/photooxy/pubg?text=Pubg&text2=${ini_txt}&apikey=${api.Botcahx}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `*[ ✓ ] S U C C E S*`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'flaming11':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://api.botcahx.biz.id/api/photooxy/under-grass?text=${ini_txt}&apikey=${api.Botcahx}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `*[ ✓ ] S U C C E S*`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'flaming12':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://api.botcahx.biz.id/api/photooxy/picture-of-love?text=${ini_txt}&apikey=${api.Botcahx}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `*[ ✓ ] S U C C E S*`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'flaming13':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://api.botcahx.biz.id/api/photooxy/coffee-cup?text=${ini_txt}&apikey=${api.Botcahx}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `*[ ✓ ] S U C C E S*`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'flaming14':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://api.botcahx.biz.id/api/photooxy/butterfly?text=${ini_txt}&apikey=${api.Botcahx}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `*[ ✓ ] S U C C E S*`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'flaming15':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://api.botcahx.biz.id/api/photooxy/carved-wood?text=${ini_txt}&apikey=${api.Botcahx}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `*[ ✓ ] S U C C E S*`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'flaming16':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://api.botcahx.biz.id/api/photooxy/illuminated-metallic?text=${ini_txt}&apikey=${api.Botcahx}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `*[ ✓ ] S U C C E S*`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'anime':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
	
sendSticker(stikot)
await fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
imageToBase64(pjr)
.then((response) => {
var media =  Buffer.from(response, 'base64');
let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ ɴᴇxᴛ ᴘʜᴏᴛᴏ`},type:1}]                            
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`																								
}}, image: media, caption: `*[ ✓ ] S U C C E S*`, buttons: buttons , footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lag besok!'))
db.data.users[sender].limit -= 1 
});
})
}
break
case 'loli':
case 'cosplay': 
case 'wallml':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
	
sendSticker(stikot)
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi" 
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let kentir = await getBuffer(wipi)                             
let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ ɴᴇxᴛ ᴘʜᴏᴛᴏ`},type:1}]                            
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`																										
}}, image: kentir, caption: `*[ ✓ ] S U C C E S*`, buttons: buttons ,footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lag besok!'))
db.data.users[sender].limit -= 1 
}
break 
case 'waifu':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
	
sendSticker(stikot)
let wipu = (await axios.get(`https://api.waifu.pics/sfw/waifu`)).data
let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ ɴᴇxᴛ ᴘʜᴏᴛᴏ`},type:1}]                            
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`																										
}}, image: wipu, caption: `*[ ✓ ] S U C C E S*`, buttons: buttons ,footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lag besok!'))
db.data.users[sender].limit -= 1 
}
break
case 'cecan': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
	
sendSticker(stikot)
let { pinterest } = (await import("../lib/pinterest.js"))
var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
var data = await pinterest(pickRandom(query))
let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ ɴᴇxᴛ ᴘʜᴏᴛᴏ`},type:1}]                            
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`																												
}}, image: { url: pickRandom(data.result) }, caption: `*[ ✓ ] S U C C E S*`, buttons: buttons , footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lag besok!'))
db.data.users[sender].limit -= 1 	
}
break
case 'cogan': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
	
sendSticker(stikot)
let { pinterest } = (await import("../lib/pinterest.js"))
var query = ["cogan hd","cogan indo","cowo ganteng","handsome boy","hot boy","oppa","cowo aesthetic","cogan aesthetic"]
var data = await pinterest(pickRandom(query))
let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ ɴᴇxᴛ ᴘʜᴏᴛᴏ`},type:1}]                            
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`																												
}}, image: { url: pickRandom(data.result) }, caption: `*[ ✓ ] S U C C E S*`, buttons: buttons , footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lag besok!'))
db.data.users[sender].limit -= 1 	
}
break
//==================================================================================================// 
case 'math': case 'match': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let modes = {
  noob: [-3, 3, -3, 3, '+-', 15000, 10],
  easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
  medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
  hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
  extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
  impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
  impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
}

let operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷'
}

function genMath(mode) {
  let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
  let a = randomInt(a1, a2)
  let b = randomInt(b1, b2)
  let op = pickRandom([...ops])
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
  if (op == '/') [a, result] = [result, a]
  return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
  }
}

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from]
  from = Math.floor(from)
  to = Math.floor(to)
  return Math.floor((to - from) * Math.random() + from)
}






 // conn.math = conn.math ? conn.math : {}
  if (!q) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
contoh:
${prefix}math hard
`)
  let mode = args[0].toLowerCase()
  if (!(mode in modes)) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
contoh:
${prefix}math hard
`)
  let id = from
  if (id in conn.math) return setReply('Masih ada soal belum terjawab di chat ini')
  let math2 = genMath(mode)
  conn.math[id] = [
await setReply(`Berapa hasil dari *${math2.str}*?\n\nTimeout: ${(math2.time / 1000).toFixed(2)} detik\nBonus Jawaban Benar: Rp${math2.bonus} `),
math2, 4,
setTimeout(async () => {
  //if (conn.math[id]) await conn.sendButton(from, `Waktu habis!\nJawabannya adalah ${math2.result}`, '', `${math2.mode.toUpperCase()}`, `.math ${math2.mode}`, conn.math[id][0])
if (conn.math[id]) await setReply(`Waktu habis!\nJawabannya adalah ${math2.result}\n\n${math2.mode.toUpperCase()}\n\nmath ${math2.mode}`)
   delete conn.math[id]
}, math2.time)
  ]
db.data.users[sender].glimit -= 1
}
break
case 'caklontong':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 3000
let timeout = 120000
let tiketcoin = 1
let id = m.chat

let but1 = [{"buttonId": `${prefix}caklontong`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.caklontong) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Bonus : +${poin}
Tiketcoin : +${tiketcoin} 
`.trim()
conn.caklontong[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
conn.sendButMessage(m.chat, `Waktu game telah habis
  Jawabannya adalah : ${json.jawaban}
  ${json.deskripsi}
`
, `${fake1}`, but1, m)  
delete conn.caklontong[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break
/*
case 'family100': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let winScore = 1000
let id = m.chat

if (id in conn.family) return reply('Masih ada kuis yang belum terjawab di chat ini') 
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}

Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}

+${winScore} Money tiap jawaban benar
`.trim()
conn.family[id] = {
id,
msg: await m.reply(caption),
...json,
terjawab: Array.from(json.jawaban, () => false),
winScore,
}
db.data.users[sender].glimit -= 1
}
break
*/
case 'susunkata':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

let but1 = [{"buttonId": `${prefix}susunkata`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.susunkata) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}
*Tipe :* ${json.tipe}

Timeout *${(timeout / 1000).toFixed(2)} detik*
  Exp : +999
  Bonus : +${poin} Saldo
`.trim()
conn.susunkata[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
conn.sendButMessage(m.chat, `Waktu game telah habis
  Jawabannya adalah : ${json.jawaban}
`
, `${fake1}`, but1, m)  
delete conn.susunkata[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break
case 'tebaklirik':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

let but1 = [{"buttonId": `${prefix}tebaklirik`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.tebaklirik) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
  Exp : +999
  Bonus : +${poin} Saldo
`.trim()
conn.tebaklirik[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
if (conn.tebaklirik[id]) 
conn.sendButMessage(m.chat, `Waktu game telah habis
  Jawabannya adalah : ${json.jawaban}
`
, `${fake1}`, but1, m)  
delete conn.tebaklirik[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break
case 'siapaaku':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

let but1 = [{"buttonId": `${prefix}siapaaku`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.siapaaku) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
  Exp : +999
  Bonus : +${poin} Saldo
`.trim()
conn.siapaaku[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
if (conn.siapaaku[id]) 
conn.sendButMessage(m.chat, `Waktu game telah habis
  Jawabannya adalah : ${json.jawaban}
`
, `${fake1}`, but1, m)  
delete conn.siapaaku[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break
case 'tekateki':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

let but1 = [{"buttonId": `${prefix}tekateki`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.tekateki) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
  Exp : +999
  Bonus : +${poin} Saldo
`.trim()
conn.tekateki[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
if (conn.tekateki[id]) 
conn.sendButMessage(m.chat, `Waktu game telah habis
  Jawabannya adalah : ${json.jawaban}
`
, `${fake1}`, but1, m)  
delete conn.tekateki[id]
 }, timeout)
 ]
}
db.data.users[sender].glimit -= 1
break
case 'tebakkata':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

let but1 = [{"buttonId": `${prefix}tebakkata`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.tebakkata) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
  Exp : +999
  Bonus : +${poin} Saldo
`.trim()
conn.tebakkata[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
if (conn.tebakkata[id]) 
conn.sendButMessage(m.chat, `Waktu game telah habis
  Jawabannya adalah : ${json.jawaban}
`
, `${fake1}`, but1, m)
delete conn.tebakkata[id]
 }, timeout)
 ]
}
db.data.users[sender].glimit -= 1
break
case 'tebaktebakan':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

if (id in conn.tebaktebak) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
  Exp : +999
  Bonus : +${poin} Saldo
`.trim()
conn.tebaktebak[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
conn.sendButMessage(m.chat, `Waktu game telah habis
  Jawabannya adalah : ${json.jawaban}
`
, `${fake1}`, but1, m)  
delete conn.tebaktebak[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break
case 'tebakgambar':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

let but1 = [{"buttonId": `${prefix}tebakgambar`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.tebakgambar) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let kentir = await getBuffer(json)       
let teks = `*Soal :* ${json.deskripsi}

Timeout *${(timeout / 1000).toFixed(2)} detik*
  Exp : +999
  Bonus : +${poin} Saldo
`.trim()
conn.tebakgambar[id] = [
conn.sendImage(from, json.img , teks, m),
json,
setTimeout(() => {
if (conn.tebakgambar[id])
conn.sendButMessage(m.chat, `Waktu game telah habis
  Jawabannya adalah : ${json.jawaban}
`
, `${fake1}`, but1, m)  
delete conn.tebakgambar[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break
case 'tebakbendera':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

let but1 = [{"buttonId": `${prefix}tebakbendera`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.tebakbendera) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let teks = `Bendera Apakah Ini ?

Timeout *${(timeout / 1000).toFixed(2)} detik*
  Exp : +999
  Bonus : +${poin} Saldo
`.trim()
conn.tebakbendera[id] = [
conn.sendImage(from, json.img , teks, m),
json,
setTimeout(() => {
if (conn.tebakbendera[id]) 
conn.sendButMessage(m.chat, `Waktu game telah habis
  Jawabannya adalah : ${json.name}
`
, `${fake1}`, but1, m)  
delete conn.tebakbendera[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1 
}
break
//==================================================================================================// 
//BUG WHATSAPP
//©from: dennis x haikal
case 'buggc':{
const { proto, generateWAMessageFromContent } = require('baileys')
if (!isOwner) return onlyOwner()
if (!isGroup) return onlyGroup()
let requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({"requestPaymentMessage": {"currencyCodeIso4217": "IDR","amount1000": "1000","extendedTextMessage": {"text": "64 65 6E 69 73 6A 75 6C 69 61 6E 64 72 61 70 75 74 72 61"}}}), { userJid: from })
conn.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break 
case 'crashgc': {
if (!isOwner) return onlyOwner()
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = q
deploy(`${m.pushName} Hashira°᭄ᴮᵒᵗ ${q ? ': ' + q : ''}`)
}
break 
case 'bgbg':
case 'bocep':{
if (!isGroup) return onlyGroup()

sendSticker(stikot)
let vidd = 'https://telegra.ph/file/8af5f440efe21403674f9.mp4'
let vid = { url : `${vidd}`, type : "video/mp4" }	
let teks = `Nih kak, tunggu ye sedang mengirim...`

conn.sendMessage(from, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: teks })
await sleep(1500)
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, video: vid, caption: "*Lihat apa yang terjadi!!*", mimetype: 'video/mp4' },{quoted: m})

}
break










 
//==================================================================================================// 
case 'addsewa':{
if (!itsMe && !isOwner) return onlyOwner()
if(!isGroup){
const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
let LinkGc = q.split(" ")[0];
let Second = q.split(" ")[1];
  let code = LinkGc.match(rex1);
if (code == null) return  setReply("No invite url detected.");

let kode = code[0].replace("chat.whatsapp.com/", "");
await conn.groupAcceptInvite(kode)
let { id, subject,creator,creation,desc,descId } = await conn.groupGetInviteInfo(kode).catch(async () => {
return setReply("Invalid invite url.");
});
setReply(`Sukses`)

await conn.sendButMessage(id, `Halo Kak Aku *${fake1}*`, `Silahkan pilih salah satu`, [
{buttonId: `y`, buttonText: {displayText: `ᴏᴋᴇ sɪᴀᴘ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `📚 ᴍᴇɴᴜ`,},type: 1}]);
await _sewa.addSewaGroup(id, subject, LinkGc, Second, sewa)
} else if(isGroup){
if(!q) return setReply("Maukian angka Contoh : link 1d")
if (isBotGroupAdmins) {
let linkgc = await conn.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if(!isBotGroupAdmins){
var yeh = `Botz Is Not Admin`
} 
_sewa.addSewaGroup(from, groupName, yeh, q, sewa)
setReply("Berhasil Add Sewa ke group")
}
}
break
case 'listsewa': 
if (!isGroup) return onlyGroup()
let ordernye = `*List Sewa*\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvipp = ms(i.expired - Date.now())
ordernye += `Group : ${i.group}\nID : ${i.id}\nExpired : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\nLink : ${i.linkgc}\n\n`             
 } 
ordernye += `© ${fake1}`
setReply(ordernye)
break
case 'ceksewa': 
case 'sewacek':
if (!isGroup) return onlyGroup()
if (!_sewa.checkSewaGroup(from, sewa)) return setReply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
let cekid = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewenye = `「 *SEWA EXPIRE* 」
*Group*: ${groupName}
*ID*: ${from}
*EXPIRE :* ${cekid.days} Hari, ${cekid.hours} Jam, ${cekid.minutes} Menit, ${cekid.seconds} Detik`
setReply(sewenye)
break
case 'sewa':{
let { dada } = (await import("../message/sewabot.js"))

let foto = ppSewa
let image = foto[Math.floor(Math.random() * foto.length)]
	
const gambar = await reSize(image, 300, 300) 
	
const muk = [
{urlButton: { displayText: `ᴏᴡɴᴇʀ`,url: `https://wa.me/${nomerOwner}`}},
{quickReplyButton: { displayText: `💸 ʙᴀʏᴀʀ`, id: `${prefix}qr` } }]

let teks = dada(prefix, pushname, ucapanWaktu)      

let gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ᴏᴡɴᴇʀ`}, type: 1},
{buttonId: `${prefix}bayar`, buttonText: {displayText: `ᴋᴏᴅᴇ ϙʀ`}, type: 1}]  
conn.sendButLoc(from, teks,copyright, gambar, gbutsan) 
}
break
case 'buyprem':
case 'premium':{
let foto = ppPrem
let image = foto[Math.floor(Math.random() * foto.length)]
	
const gambar = await reSize(image, 300, 300) 
	
let teks = `𝗨𝗦𝗘𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠

╭─❒ 「  *𝘉𝘶𝘺 𝘗𝘳𝘦𝘮* 」
│ Harga!
├ Pengguna baru Rp. 5k 
├ Masa aktif  1 Bulan
╰─────────⁛⸙
`+readmore+`
╭─❒ 「  *𝘍𝘪𝘵𝘶𝘳 𝘗𝘳𝘦𝘮* 」
├ Limit tanpa batas 
├ Klaim lebih banyak EXP Harian
├ Hidetag, mentionAll member
├ Bisa mengubah watermark stiker 
├ Dan masih banyak lagi 
╰─────────⁛⸙

𝗡𝗢𝗧𝗘 : 

Kegunaannya untuk Fitur Premium
Limit tanpa batas (Unlimited)
`

let gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ᴏᴡɴᴇʀ`}, type: 1},
{buttonId: `${prefix}bayar`, buttonText: {displayText: `ᴋᴏᴅᴇ ϙʀ`}, type: 1}]  
conn.sendButLoc(from, teks,copyright, gambar, gbutsan) 
}
break
case 'qr':
case 'qris':
case 'bayar':
case 'kodeqr':{
let image = { url : `${qrUrl}`}
let teks = `𝗤𝗥 𝗞𝗢𝗗𝗘

╭─❒ 「  *𝘗𝘢𝘺𝘮𝘦𝘯𝘵* 」
│ Bayar!
├ Dana : ${Dana} 
├ Pulsa : ${Pulsa} 
├ Ovo : ${Ovo} 
├ Gopay : ${Gopay} 
├ ShopeePay : ${Shopee} 
├ Masa aktif  1 Bulan
╰─────────⁛⸙
`

let butprofile = [
{ buttonId: `y`, buttonText: { displayText: `ᴛʜᴀɴᴋs` }, type: 1 },
{ buttonId: `o`, buttonText: { displayText: `ᴏᴋᴇ sɪᴀᴘ` }, type: 1 } ];
let buttonMessage = {
image:image,
caption: teks,
footer: copyright,
buttons: butprofile,
headerType: 4
}	

await conn.sendMessage(from, buttonMessage, {quoted : m})
}
break		
//==================================================================================================// 
case 'addstik':{
if (!isOwner) return onlyOwner()
const client = require('filestack-js').init(`${api.FilestackApi}`)
if(!isQuotedSticker) return setReply("Reply sticker")
if(!q) return setReply("Nama stickernya apa?")
if(db.data.sticker[q]) return setReply("Nama tersebut sudah ada di dalam database")
let media = await conn.downloadAndSaveMediaMessage(quoted, q)
await client.upload(media, {}, { filename: q }, {}).then(data => {
db.data.sticker[q] = {
name: data._file.name,
id: data.handle,
size: FileSize(data._file.size),
link: data.url
}
})
let teks = `Berhasil menambahkan sticker
ke dalam database dengan nama ${q}`
await setReply(teks)
await fs.unlinkSync(media)
}
break 
case 'delstik':{
if (!isOwner) return onlyOwner()
if (!q) return setReply("Masukan query")
try {
if(!db.data.sticker[q]) return setReply("Nama tersebut tidak ada di dalam data base")
delete db.data.sticker[q]
setReply(`Succes delete sticker ${q}!`)
} catch (err) {
console.log(err)
setReply(`Gagal delete sticker ${q}!`)
}
}
break
case 'addvn':{
if (!isOwner) return onlyOwner()
const client = require('filestack-js').init(`${api.FilestackApi}`);
if(!isQuotedAudio) return setReply("Reply audio")
if(!q) return setReply("Nama audionya apa?")
if(db.data.audio[q]) return setReply("Nama tersebut sudah ada di dalam database")
let media = await conn.downloadAndSaveMediaMessage(quoted, q)
await client.upload(media, {}, { filename: q }, {}).then(data => {
db.data.audio[q] = {
name: data._file.name,
id: data.handle,
size: FileSize(data._file.size),
link: data.url
}
})
let teks = `Berhasil menambahkan audio
ke dalam database dengan nama ${q}`
await setReply(teks)
await fs.unlinkSync(media)
}
break 
case 'delvn':{
if (!isOwner) return onlyOwner()
try {
if(!db.data.audio[q]) return setReply("Nama tersebut tidak ada di dalam data base")
delete db.data.audio[q]
setReply(`Sukses delete vn ${q}`)
} catch (err){
console.log(err)
setReply('eror kak')
}
}
break
case 'listvn':{
if (!isOwner) return onlyOwner()
let teks = 'List Vn :\n\n'
for (let awokwkwk of Object.keys(db.data.audio)) {
teks += `- ${awokwkwk}\n`
}
teks += `\nTotal ada : ${Object.keys(db.data.audio).length}`
teks += `\n\nUntuk mengambil vn silakan ketik nama vn`
setReply(teks)
}
break
case 'liststik':{
if (!isOwner) return onlyOwner()
let teks = 'Sticker list :\n\n'
for (let awokwkwk of Object.keys(db.data.sticker)) {
teks += `- ${awokwkwk}\n`
}
teks += `\nTotal : ${Object.keys(db.data.sticker).length}`
setReply(teks)
}
break

/*
case 'addvn':{
if (!isOwner && !itsMe) return onlyOwner()
if (!isQuotedAudio) return setReply('Reply vnnya')
if (!q) return setReply('Nama audionya apa')
let delb = await conn.downloadAndSaveMediaMessage(quoted)
audionye.push(q)
await fse.copy(delb,`./temp/audio/${q}.mp3`)
fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
fs.unlinkSync(delb)
setReply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break   
case 'delvn':{
if (!isOwner) return onlyOwner() 
try {
let wanu = audionye.indexOf(q)
audionye.splice(wanu, 1)
fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
fs.unlinkSync(`./temp/audio/${q}.mp3`)
setReply(`Sukses delete vn ${q}`)
} catch (err){
console.log(err)
setReply('eror kak')
}
}
break
case 'listvn':{
if (!isOwner) return onlyOwner()
let teks = '*List Vn:*\n\n'
for (let awokwkwk of audionye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total ada : ${audionye.length}*`
teks += `\n\n*Untuk mengambil vn silakan ketik nama vn*`
setReply(teks)
}
break  
case 'addstik':{
if (!isOwner && !itsMe) return onlyOwner()
if (!isQuotedSticker) return setReply('Reply stiker ny upa')
if (!q) return setReply('Nama sticker nya apa?')
for(let i of setiker){
if(i == q) return setReply("Nama tersebut sudah di gunakan")
}
let delb = await conn.downloadAndSaveMediaMessage(quoted)
setiker.push(q) 
await fse.copy(delb, `./temp/stick/${q}.webp`)
fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
fs.unlinkSync(delb)
setReply(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
}
break			
case 'delstik':{
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply("Masukan query")
try {
for(let i of setiker){
if(i !== q) return setReply("Nama tersebut tidak ada di dalam data base")
}
let wanu = setiker.indexOf(q)
setiker.splice(wanu,1)
fs.unlinkSync(`./temp/stick/${q}.webp`)
fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
setReply(`Succes delete sticker ${q}!`)
} catch (err) {
console.log(err)
setReply(`Gagal delete sticker ${q}!`)
}
}
break    
case 'liststik':{
if (!isOwner) return onlyOwner()
let teks = '*Sticker list :*\n\n'
for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*`
setReply(teks)
}
break	
*/
case 'setimgquoted':{
if(!isOwner) return onlyOwner()
if(isImage || isQuotedImage){
let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await fse.copy(delb,`./stik/quoted.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image quoted`)
} else {
setReply(`Kirim gambar dengan caption ${prefix+command}`);
}
}
break
case 'setimgdoc':{
if(!isOwner) return onlyOwner()
if(isImage || isQuotedImage){
let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await fse.copy(delb,`./stik/thumbnaildokumen.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image doc`)
} else {
setReply(`Kirim gambar dengan caption ${prefix+command}`);
}
}
break
case 'setimgweb':{
if(!isOwner) return onlyOwner()
if(isImage || isQuotedImage){
let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await fse.copy(delb,`./stik/web.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image web`)
} else {
setReply(`Kirim gambar dengan caption ${prefix+command}`);
}
}
break
case 'setimgreply':{
if(!isOwner) return onlyOwner()
if(isImage || isQuotedImage){
let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await fse.copy(delb,`./stik/reply.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image reply`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setimagereply`);
}
}
break
case 'setthumb':{
if(!isOwner) return onlyOwner()
if(isImage || isQuotedImage){
let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await fse.copy(delb,`./stik/thumb.jpeg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image reply`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setimagereply`);
}
}
break
case 'setfakeimg':{
if(!isOwner) return onlyOwner()
if(isImage || isQuotedImage){
let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await fse.copy(delb,`./stik/fake.jpeg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image reply`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setfakeimg`);
}
}
break	
case 'addcmdprem':{
if (!isOwner) return onlyOwner()
if(!q) return setReply(mess.query)
if(_data.checkDataId("premium", q,  DataId)) return setReply("Command sudah ada di database")
if(!_data.checkDataName("premium", q, DataId)) { await _data.createDataId("premium", DataId) }
_data.addDataId(q, "premium", DataId)
setReply(`Berhasil menambahkan ${q} ke daftar fitur premium`)
}
break
case 'delcmdprem':
if(!q) return setReply(mess.query)
if (!isOwner) return onlyOwner()
try {
if(!_data.checkDataId("premium", q, DataId)) return setReply("Command tidak ada di database")
_data.removeDataId ("premium", q, DataId)
setReply(`Berhasil menghapus ${q} ke daftar fitur premium`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break
case 'addowner':{
if (!isOwner) return onlyOwner()
if (!isGroup) return setReply(mess.only.group)
if(_data.checkDataId("owner", Input,  DataId)) return setReply("User sudah menjadi owner")
if(!_data.checkDataName("owner", Input, DataId)) { await createDataId("owner", DataId) }
_data.addDataId(Input, "owner", DataId)
setReply(`Berhasil menambahkan ${Input} ke daftar owner`)
}
break
case 'delowner':
if (!isOwner) return onlyOwner()
try {
if(!_data.checkDataId("owner", Input, DataId)) return setReply(`User bukan owner`)
_data.removeDataId ("owner", Input, DataId)
setReply(`Berhasil menghapus ${Input.split("@")[0]} ke daftar owner`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break
case 'listowner':{
if(!_data.checkDataName("owner", q, DataId)) { await _data.createDataId("owner", DataId) }
let nana = await DataId.filter(item => item.name == "owner" )
if(!nana) return setReply("Tidak ada")
let teks ="List Owner\n\n"
let nunu = nana[0].id
for(let i of nunu){
teks +=`- wa.me/${i.split("@")[0]} \n`   
}    
setReply(teks)
}
break
case 'blockcmd':
if (!isOwner) return onlyOwner()
if(!q) return setReply(`Textnya mana cih\n\nContoh : ${prefix}blockcmd menu\nGituuuuuuu`)
if (_blockcmd.check(q, listcmdblock)) return setReply(`Command tersebut sudah ada di database`)
_blockcmd.add(q,listcmdblock)         
setReply(`Berhasil memblokir command 「 *${q}* 」\nsilakan ketik ${prefix}listblockcmd untuk melihat\ndaftar command yang telah di block`)          
break
case 'unblockcmd':
try{
if (!isOwner) return onlyOwner()
if(!q) return setReply("Textnya mana cih")
if (!_blockcmd.check(q, listcmdblock)) return setReply(`Command tersebut tidak ada di database`)
_blockcmd.del(q, listcmdblock)        
setReply(`Berhasil unblock command 「 *${q}* 」`)
} catch (err) {
setReply("Bjirr error, keknya ada yang error")
}
break
case 'block':
if (!isOwner) return onlyOwner()
if(isGroup){

if(users){
await conn.updateBlockStatus(users, "block")
setReply(`Sukses block user`)
} else {
setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return setReply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await conn.updateBlockStatus(woke, "block")
} else if(!q){
setReply("Masukan nomer yang ingin di block")
}
setReply(`Berhasil Block user ${woke.split("@")[0]}`)
}
break
case 'unblock':
if (!isOwner) return onlyOwner()
if(isGroup){
if(users){
await conn.updateBlockStatus(users, "unblock")
await setReply(`Sukses unblock user`)
} else if(!q){
setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return setReply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return setReply("Silakan re�ply pesan atau tag atau input nomer yang mau di block")
await conn.updateBlockStatus(woke, "unblock")
setReply(`Sukses unblock ${woke}`)
} else if(!q){
setReply("Masukan nomer yang ingin di unblock")
}

}
break
case 'listblock':{
let block = await conn.fetchBlocklist()            
setReply('List Block :\n\n' + `Total : ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}\n` + block.map(v => '• ' + v.replace(/@.+/, '')).join`\n`)
}
break 
//==================================================================================================// 
case '$':{
if (!itsMe && !isOwner) return onlyOwner()
await setReply("_Executing..._")
exec(q, async (err, stdout) => {
if (err) return setReply(`${copyright}:~ ${err}`)
if (stdout) {
await setReply(`*>_ Console*\n\n${stdout}`)
}
})
}
break
case '>': {
if (!isOwner) return onlyOwner()
try {
let evaled = await eval(q)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
break  
case 'exec':{
if (!itsMe && !isOwner) return onlyOwner()
await setReply("Executing...")
exec(q, async (err, stdout) => {
if (err) return setReply(`${copyright}:~ ${err}`)
if (stdout) {
await setReply(`${stdout}`)
let teks = `Berhasil menginstall module ${q.replace("npm i","")}`
let mok = [
{"buttonId": `${prefix}restart`,"buttonText": {"displayText": `ʀᴇsᴛᴀʀᴛ`},"type": "RESPONSE"}]
let tolol = {
text: teks,
footer: `${copyright}`,
buttons: mok,
headerType: 1
}
await conn.sendMessage(from, tolol , {quoted: m})
}
})
}
break 
case 'restart':{
if (!isOwner && !itsMe) return onlyOwner()
await conn.sendMessage(from, {text: `_Restarting ${fake}_`})
await conn.sendMessage(from, {text: "_Succes_"})
await sleep(1000)
process.send('reset') 
}
break
case 'owner':
case 'creator':{
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
let name = await conn.getName(who)

await conn.sendContactArray(m.chat, [ 
[`${nomerOwner}@s.whatsapp.net`, `${ownerName}`, `Developer Bot`, `✍️ Masih Belajar Bwang Jangan Dibully`],
[`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🤖 I'm Bot WhatsApp`, `⚠️ Please Dont Spam Block or Banned`]
], m)
await sendKon(`Hii 👋, Chat Me ? Jangan Basa Basi To The Point Aje!`)
} 
break
case 'public':
if (!isOwner) return onlyOwner()
if (publik) return setReply('Udah di mode publick kak')
publik = true
let bab =`Mode public aktif kak`
setReply(bab)
break
case 'self':
if (!isOwner) return onlyOwner()
if (publik == false) return setReply('Udah di mode self kak')
publik = false
let breh =`Mode self aktif kak`
setReply(breh)
break
case '>': {
if (!isOwner) return onlyOwner()
try {
let evaled = await eval(q)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
break  
case  'clearsesi':{
if (!itsMe && !isOwner) return onlyOwner()
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return setReply('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-")
   )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
if(filteredArray.length == 0) return setReply(teks)     
setReply(teks) 
await sleep(2000)
setReply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
setReply("Berhasil menghapus semua sampah di folder session")     
});

}
break
//===========================================================//
case 'banuser':{
if (!isGroupAdmins && !isOwner)return setReply('Hanya admin dan Owner') 
let alasan = "Spam Bot"
if (!q) return setReply(`Masukan Id whatsapp`)             
if (q.startsWith("+")) {
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "")
let Name = await conn.getName(woke)
if(_ban.check(woke, ban)) return setReply("User sudah di ban sebelumnya")
_ban.add(Name,calender,woke,alasan, ban)
setReply(`Berhasil banned ${woke}`);

let teks =`Halo, 👋 kamu telah di banned 
karena menyalah gunakan fitur Botz

☎️ Nomer : ${q.split("@")[0]}
📆 Tanggal : ${calender}
📮 Total Banned : ${ban.length}
`

await conn.sendMessage(woke+'@s.whatsapp.net', {text: teks}, {quoted: fkontak})
} else setReply('Masukan Nomer +62')
}
break
//===========================================================//  



}//Akhir switch command
//===========================================================//  
//Auto Download Video Tiktok
if (budy.includes('https://vt.tiktok.com/') || budy.includes('https://www.tiktok.com/') || budy.includes('https://vm.tiktok.com/') ) {
try{

savefrom(budy).then(res => {
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, caption: `*乂 T I K T O K - D O W N L O A D*\n\nAutor : ${res.meta.source}\nDesc : ${res.meta.title}`, video: {url: res.url[0].url}},{quoted: m})

})
} catch (err){ return
}
}

//Auto Download Video FB
if(budy.includes('https://www.facebook.com/')){
try{
let res = await savefrom(budy)
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, caption: `*乂 F A C E B O O K*`, video: {url: res.url[0].url}}, {quoted: m})

} catch (err){ return
}
}

//Auto Download Video IG
if(budy.includes("https://www.instagram.com/reel/") || budy.includes('https://www.instagram.com/p/')){

try{
let results = await instagramdlv3(budy)
for (const { url } of results) await conn.sendMedia(from, url, m, {caption: "*乂 I N S T A G R A M*"})
} catch (err){ return
}
}

//Auto Download Youtube Mp4
if (budy.includes('https://youtu.be/') || budy.includes('https://youtube.com/watch?v=') || budy.includes('https://youtube.com/shorts/') ) {
try{
let info = await ytdl.getInfo(budy);
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
if (Number(format.contentLength) > 40000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)

yts(budy).then(anu => {
downloadMp4(budy) 
})
} catch (err){
console.log(err)
await sleep(10000)
conn.sendMessage(from, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: 'Auto download mp4 gagal, Fitur tersedia hanya kirim link youtube!' })
}
}
//===========================================================//  
//Auto sticker  
if (isImage && autoSticker) {
try{
let WSF = require('wa-sticker-formatter')
let wsf = false
let mime = (m.msg || m).mimetype || ''
if (/image/.test(mime)) {
let img = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
wsf = new WSF.Sticker(img, {
pack: packName,
type: WSF.StickerTypes.FULL,
author: pushname,
crop: true,
})
}        
if (wsf) {
await wsf.build()
const sticBuffer = await wsf.get()
if (sticBuffer) await conn.sendMessage(from, { sticker: sticBuffer }, {
mimetype: 'image/webp',
ephemeralExpiration: 86400
})
}
}catch(err){

}
}
//===========================================================//  
//Ketika ada yang invite/kirim link grup di chat pribadi
if ((type === 'groupInviteMessage' || budy.includes('https://chat') || budy.includes('Buka tautan ini')) && !m.isBaileys && !isGroup && !itsMe && !isOwner) {

let foto = ppSewa
let image = foto[Math.floor(Math.random() * foto.length)]
let gambar = await reSize(image, 300, 300) 
	
let teks = `Untuk memasukan Botz ke group\nkamu harus sewa botz Atau kamu chat OWNER terlebih dahulu\n`
let gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ᴏᴡɴᴇʀ`}, type: 1},
{buttonId: `${prefix}bayar`, buttonText: {displayText: `ᴋᴏᴅᴇ ϙʀ`}, type: 1}]  
conn.sendButLoc(from, teks,copyright, gambar, gbutsan) 
}      
//===========================================================//  
//Ketika ada yang minta save
if (!isGroup && budy.startsWith("sv")){
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
setReply(`Maaf kak aku tidak menerima save nomer!`)
}

if (!isGroup && budy.startsWith("save")){
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
setReply(`Pahami dan baca peraturan Bot\nBot tidak menerima save nomer!`)
}

//Jika ada yang bilang ohayo pagi bot akan merespon✓
if(ohayo.includes(budy)){
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
if (timeWib >= '11:00' && timeWib <= '23:50')  return setReply("Hadeuh sekarang udah ga pagi kak") 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
setReply(`${ucapanWaktu} kak`)
}

//Jika ada yang bilang oyasumi malem bot akan merespon✓
if(katamalem.includes(budy)){
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
if (timeWib >= '06:00' && timeWib <= '17:00')  return setReply("Hadeuh sekarang udah ga malem kak")
_spam.add("NotCase",senderNumber, "10s", AntiSpam)
setReply(`${ucapanWaktu} kak`)
}
         
//Jika ada yang bilang koniciwa siang bot akan merespon✓
if(katasiang.includes(budy)){
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
setReply(`${ucapanWaktu} kak`)
}

//Jika ada yg kirim pesan "Asalamualaikun" botz akan respon✓
if (budy.includes(`ualaikum`) || budy.includes(`u'alaikum`)) { 
if (_spam.check("NotCase",senderNumber, AntiSpam)) return
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
sendvn(walaikumsalam)
}

//Salken akan respon✓
if (ken.includes(budy)) {			
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
setReply("Salam kenal juga kak 🤗")
}

//Jika ada yg pangil bot✓
if (katabot.includes(budy)) {		
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
sendvn(halo)
}

//Jika ada yg toxic botz akan merespon✓
if (katakawai.includes(budy)) {		
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
sendvn(kawai)
}

//Jika ada yg ara bot✓
if (katara.includes(budy)) {		
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
sendvn(wibu)
}

//Jika ada yg toxic botz akan merespon✓
if (dosa.includes(budy)) {		
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
sendvn(astaga)
}

//Jika ada yg toxic botz akan merespon✓
if (bad.includes(budy)) {		
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
sendvn(astaga)
}
//Jika ada yg sewa✓
if (budy.includes(`panel`) || budy.includes(`SEWA`) ) { 
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
let { dada } = (await import("../message/sewabot.js"))
let teks = dada(prefix, pushname, ucapanWaktu)        
conn.sendMessage(from,{ text: teks }, {quoted: fdoc})
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
}   	
//Jika ada yang tag nomer owner
if (isGroup && budy.includes(`${devoloper1}`)) {
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
if (itsMe) return
const kta = ['*Iya kak itu nomer owner ada apa ?*\n','*Jangan di tag dia sedang sibuk 😶*\n','*Kenapa kak tag owner ku 🙂*\n']
const su = kta[Math.floor(Math.random() * kta.length)]
sendAnti(su)
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
}
///JikaJika ada yg kirim pesan "makasih" botz akan respon✓
if (budy.includes(`akasih`) || budy.includes(`ksih`) ) { 
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
sendSticker(stiktnk)
}   	
//===========================================================//  
} catch (err){
Log(err)
//add to dashboard
if(isCmd) _data.Failed(toFirstCase(command), dash)
let e = util.format(err)
if(err.message.includes("Cannot find module")){
let module = err.message.split("Cannot find module '")[1].split("'")[0]
let teks = `Module ${module} belom di install
silakan klik tombol install di bawah terlebih dahulu`
let mok = [
{"buttonId": `${prefix}exec npm i ${module}`,"buttonText": {"displayText": `Install`},"type": "RESPONSE"},
{"buttonId": `${prefix}report module ${module} belom di install`,"buttonText": {"displayText": `Report`},"type": "RESPONSE"}]
let nono = {
text: teks,
footer: `${copyright}\n${calender}`,
buttons: mok,
headerType: 1
}

return await conn.sendMessage(m.key.remoteJid, nono , {quoted: m})
}
await setReply(''+ e)
if(_error.check(err.message, db.data.listerror)) return
_error.add(err.message, command, db.data.listerror)
if(autoblockcmd){        
_blockcmd.add(command,listcmdblock) 
await setReply("Command telah di block karena terjadi error")
} 
  
if(autoReport){
if(isQuotedImage){
var media =  "Reply Image ✅"
}else if(isQuotedVideo){
var media = "Reply Video ✅"
} else if(isQuotedSticker){ 
var media = "Reply Sticker ✅"
} else if(isQuotedAudio){
var media = "Reply Audio ✅"
} else if(isQuotedTeks){
var media =  "Reply Teks ✅"
} else if(isQuotedTag){
var media =  "Reply Tag ✅"
} else {
var media = "No Quoted ❌"
}

if(q.length > "0"){
var tetek = q
} else if(q.length == "0"){
var tetek = "No Query ❌"
}

if (isGroup && isBotGroupAdmins) {
let linkgc = await conn.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if(isGroup && !isBotGroupAdmins){
var yeh = `Botz Is Not Admin`
} else if(!isGroup){
var yeh = `Botz Is Not In The Group`
} 

let teks =`*⚠️ LAPORAN BUG/ERROR ⚠️*

👤 Nama : ${pushname}
📳 Nomer : wa.me/${senderNumber}
📢 Info Laporan :\n       _${e}_
🔖 Command : ${prefix}${command}
⏰Time : ${timeWib} Wib
📝 Query : ${tetek}
🧩 Quoted : ${media}
💠 Group : ${isGroup?`${groupName}`:'Di private chat'}
🆔 ID : ${from}
🌐 Link Group : ${yeh}`
let mok = [
{"buttonId": `${prefix}banuser +${senderNumber}`,"buttonText": {"displayText": `Banned`},"type": "RESPONSE"},
{"buttonId": `${prefix}thanksuser +${senderNumber}`,"buttonText": {"displayText": `Thanks`},"type": "RESPONSE"}]
let tolol = {
text: teks,
footer: `${copyright}\n${calender}`,
buttons: mok,
headerType: 1
}

conn.sendMessage(`${Ownerin}`, tolol, {quoted: fkontak})

if(!autoblockcmd){
await conn.sendMessage(from,{ text: "Laporan error telah dikirim ke Developer Botz"})
}

if(isQuotedSticker || isQuotedImage || isQuotedVideo || isQuotedAudio ){
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await conn.sendMedia (Ownerin, media, m, {caption: "System Error"})
await fs.unlinkSync(media)
}

} 
}		

/*
if (timeWib >= '04:00' && timeWib <= '04:02') {
setInterval(async() => {
conn.sendMessage(from, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: 'Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak' })
}, 60_000)
}

if (timeWib >= '12:00' && timeWib <= '12:02') {
setInterval(async() => {
conn.sendMessage(from, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: 'Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak' })
}, 60_000)
}

if (timeWib >= '15:00' && timeWib <= '15:02') {
setInterval(async() => {
conn.sendMessage(from, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: 'Dah jam 3 kak, Jangan lupa sholat Ashar ya kak' })
}, 60_000)
}

if (timeWib >= '18:00' && timeWib <= '18:02') {
setInterval(async() => {
conn.sendMessage(from, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: 'Udah mahgrip nih kak, jangan lupa sholat ya' })
}, 60_000)
}

if (timeWib >= '00:00' && timeWib <= '00:02') {
setInterval(async() => {
conn.sendMessage(from, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: `${fake1} ngantuk kak, tidur dulu ya kak`})
}, 60_000)
}
*/


} catch(err){
Log(err)
console.log(chalk.bgRed(chalk.black("[  ERROR  ]")),util.format(err))
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {
if(!publik) return
publik = false
await conn.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Terjadi rate-overlimit
Bot telah mengganti dari mode Public ke mode Self
Untuk menghindari spam yang berlebihan,
Silakan tunggu 1 menit hingga semua pesan
telah terbaca oleh bot`
})
await setTimeout(() => {
publik = true
 conn.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Berhasil mengubah mode self ke mode public`
})
}, 60000)
return
}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
if (e.includes('Value not found')){ return }
console.log(chalk.white('Message Error : %s'), chalk.green(util.format(e)))
}



  

}//Akhir export default







const __filename = new URL('', import.meta.url).pathname
//const __dirname = new URL('.', import.meta.url).pathname
let file = fileURLToPath(import.meta.url)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.bgGreen(chalk.black("[  UPDATE ]")),chalk.white(`${__filename}`) )
delRequireCache(file)
delete require.cache[file]
import(`${file}?update=${Date.now()}`)
})
