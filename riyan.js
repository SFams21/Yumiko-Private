require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const hx = require('hxz-api')
const axios = require('axios')
const chalk = require('chalk')
const xfar = require('xfarr-api')
const request = require('request');
const textpro = require('./lib/textpro')
const bochil = require('@bochilteam/scraper')
const { mediafireDl } = require('./lib/mediafire.js')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const hariiini = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
const barat = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const nyoutube = ('© Riyan Sipayung\nInstagram :\nhttps://instagram.com/riyanspyg01')  //ubah di config biar ngk emror
const ini_mark = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'
global.prem = require("./lib/premium")
gambar = fs.readFileSync('./media/image/yumiko.jpg')

//TIME
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 } 
 
 //Time Menuju Ulang Tahun Untuk Onwer :)
const HBD = new Date('February 06, 2023 00:01:00').getTime();
const sekarang = new Date().getTime();
const Selisih = HBD - sekarang;
const jhari = Math.floor(Selisih / (1000 * 60 * 60 * 24));
const jjam = Math.floor(Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const mmmenit = Math.floor(Selisih % (1000 * 60 * 60) / (1000 * 60));
const ddetik = Math.floor(Selisih % (1000 * 60) / 1000);
const menuju = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
 
// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = riyan = async (riyan, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const arg = body.substring(body.indexOf(" ") + 1);
const pushname = m.pushName || "No Name"
const botNumber = await riyan.decodeJid(riyan.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
	    
// Group
const groupMetadata = m.isGroup ? await riyan.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || isCreator || prem.checkPremiumUser(m.sender, premium);
const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
    '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]
		
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
const klqor = ['😁','🥰','😇','🥲','🙃','🙂','🤑','😑','♻️','🔞','✅','🙏','❤','🔴','❗','〽️','🎶','🤗','👤','🔎','🔋','📚','🎬','🐵','🐒','🐦','🍌','🍎','🥝','🥒','🫓','🍒','🍐','🥦','🌍','🌎','🎃','🎄','🥎','🎖','🏆','🏅','🥇','🥈','🥉','🎗','🎟','🎫','🎁','🎀','👑','💎','⚠️']
const kloadq = klqor[Math.floor(Math.random() * klqor.length)]
const filsj = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf']
const filsk = filsj[Math.floor(Math.random() * filsj.length)]
	
	try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
    
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
} else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
}
		
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = false
if (!('templateImage' in setting)) setting.templateImage = true
if (!('templateVideo' in setting)) setting.templateVideo = false
if (!('templateGif' in setting)) setting.templateGif = false
if (!('templateMsg' in setting)) setting.templateMsg = false	
} else global.db.data.settings[botNumber] = {
status: 0,
autobio: false,
templateImage: true,
templateVideo: false,
templateGif: false,
templateMsg: false,
}
	    
} catch (err) {
console.error(err)
}
        
// Public & Self
if (!riyan.public) {
if (!m.key.fromMe) return
}
if (m.message) {
riyan.readMessages([m.key])
}
        
if (m.text.includes('🗿')) {
riyan.sendMessage(m.chat, {
react: {
text: '🗿',
key: m.key
}})
}
                
//Premium Exp
prem.expiredCheck(riyan, m, premium);
                
//sticker url
const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './database/stick' + names + '.png', async function () {
console.log('selesai');
let filess = './database/stick' + names + '.png'
let asw = './database/stick' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
riyan.sendMessage(to, { sticker: media}, {quoted: m})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
            
//Resize
const reSize = async(buffer, ukur1, ukur2) => {
return new Promise(async(resolve, reject) => {
let jimp = require('jimp')
var baper = await jimp.read(buffer);
var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
resolve(ab)
})
}
             
//Fake
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: await reSize(thumb, 100, 100), surface: 200, message: `${ytname}`, orderTitle: 'riyan', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `${ytname}`,jpegThumbnail: await reSize(thumb, 100, 100)}}}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const ftextt = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})}, message: { "extendedTextMessage": {"text":`${ytname}`, "title": `${botname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
const ftoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": await reSize(thumb, 100, 100)},"title": `${ytname}`, "description": `${botname}`, "currencyCode": "IDR", "priceAmount1000": "1000000000000000000", "retailerId": `${ytname}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}} 
const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`${ytname}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `${ytname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "629637959432-1616169743@g.us","inviteCode": "m","groupName": `${ytname}`, "caption": `${ytname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":`${ytname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${ytname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${ytname}`,jpegThumbnail: await reSize(thumb, 100, 100)}}}
const floc2 = {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "title": `${ytname}`,"h": `Hmm`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${ytname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ytname,;;;\nFN:ytname\nitem1.TEL;waid=6289637959432:6289637959432\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await reSize(thumb, 100, 100), thumbnail: await reSize(thumb, 100, 100),sendEphemeral: true}}}
const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": `${ytname}`,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": await reSize(thumb, 100, 100),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
		

// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('59 23 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
        
// total hit
global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/YumikoV2/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/YumikoV2${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
// auto set bio
if (db.data.settings[botNumber].autobio) {
let setting = global.db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await riyan.setStatus(`${riyan.user.name} | Runtime : ${runtime(uptime)}`)
setting.status = new Date() * 1
}
}
			
// Anti Link
if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`「 *ANTI LINK* 」\n\n*Kamu terdeteksi mengirim link group*, *maaf kamu akan di kick‼️,yang mau juga silahkan kirim link‼️*`)
if (!isBotAdmins) return m.reply(`*Bot aja bukan admin anj*`)
let gclink = (`https://chat.whatsapp.com/`+await riyan.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`*maaf gak jadi, karena kamu ngirim link group ini*`)
if (isAdmins) return m.reply(`*maaf kamu admin*`)
if (isCreator) return m.reply(`*maaf kamu owner bot ku*`)
riyan.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
        
// Yumiko BMD
const deploy = (teks) => { riyan.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}
        
// Mute Chat
if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
return
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: riyan.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, riyan.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
riyan.ev.emit('messages.upsert', msg)
}
	    
if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
riyan.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await riyan.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, riyan.user.name, m)
delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await riyan.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, riyan.user.name, m)
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await riyan.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, riyan.user.name, m)
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await riyan.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, riyan.user.name, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await riyan.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, riyan.user.name, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await riyan.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, riyan.user.name, m)
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
	    
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await riyan.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, riyan.user.name, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
        
//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await riyan.sendText(room.x, str, m, { mentions: parseMention(str) } )
await riyan.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
riyan.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
riyan.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) riyan.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) riyan.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) riyan.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
riyan.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) riyan.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) riyan.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
riyan.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
	    
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
	    
switch(command) {
//pembatas toxic
case 'anj': case 'ajg': case 'anjing': case 'memek': case 'kntl': case 'ngentot': case 'babi': case 'gblk': case 'goblok': case 'tolol': {
m.reply('Jangan Toxic Cok')
riyan.sendMessage(m.chat, {audio: fs.readFileSync('./media/sound/dosa pantek.mp3'), mimetype: 'audio/mpeg', ptt:true })
}
break
//pembatas Salam
case 'Assalamualaikum':
case 'assalamualaikum':
case 'Assalamualaikum Wr. Wb': {
goblok = fs.readFileSync('./media/sound/salam.mp3')
riyan.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted:fvn})}
break
//pembatas bot menyapa
case 'bot': {
goblok = fs.readFileSync('./media/sound/kenapa.mp3')
riyan.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted:fvn})}
break
case 'afk': {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
m.reply(mess.wait)
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName} *Telah Afk*${text ? ': ' + text : ''}`)
db.data.users[m.sender].limit -= 1
}
break	
case 'tictactoe': {
if (!m.isGroup) throw mess.group
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await riyan.sendText(room.x, str, m, { mentions: parseMention(str) } )
await riyan.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
case 'deltictactoe': {
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
riyan.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
m.reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
m.reply('rusak')
}
}
break
case 'suitpvp': {
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *menantang* @${m.mentionedJid[0].split`@`[0]} *untuk bermain suit*

*Silahkan* @${m.mentionedJid[0].split`@`[0]} *untuk ketik terima/tolak*`
this.suit[id] = {
chat: await riyan.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) riyan.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
case 'chat': {
if (!isCreator) throw mess.owner
if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
if (args[0] === 'mute') {
riyan.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unmute') {
riyan.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'archive') {
riyan.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
riyan.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'read') {
riyan.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unread') {
riyan.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'delete') {
riyan.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'family100': {
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await riyan.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
case 'tebakmenu': {
if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await riyan.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
riyan.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
riyan.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, riyan.user.name, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
riyan.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
riyan.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, riyan.user.name, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
riyan.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
riyan.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, riyan.user.name, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
riyan.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
riyan.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, riyan.user.name, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
riyan.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
riyan.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, riyan.user.name, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
riyan.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
riyan.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, riyan.user.name, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break
case 'kuismath': {
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let { genMath, modes } = require('./src/math')
if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
let result = await genMath(text.toLowerCase())
riyan.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
break
case 'poll': {
if (!isCreator) return mess.owner
if (!text) throw `Example : ${prefix + command} Owner Ganteng|Iya|Tidak`
let poll1 = `${text.split("|")[1]}`
let poll2 = `${text.split("|")[2]}`
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": `${text.split("|")[0]}`,
"options": [
	{
"optionName": poll1
	},
	{
"optionName": poll2
	}
],
"selectableOptionsCount": 2
	}
}), { userJid: m.chat})
riyan.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id})
}
break
            
//Pembatas FUN===============================================
case 'jodohku': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await riyan.sendButtonText(m.chat, buttons, jawab, riyan.user.name, m, {mentions: ments})
}
break
case 'jadian': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa Donasi🗿

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
]
await riyan.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: menst})
}
break
case 'gbtku': {
if (!isPremium) throw mess.premime
if (!text) throw `Example : ${prefix + command} hai|halo`
let jawab = `${text.split("|")[0]}`
let buttons = [{ buttonId: 'owner', buttonText: { displayText: `OWNER` }, type: 1 }]
await riyan.sendButtonText(m.chat, buttons, jawab, `${text.split("|")[1]}`, m, {quoted: ftoko})
}
break
case 'bisakah': {
if (!text) throw `Example : ${prefix + command} saya menang?`
let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
let keh = bisa[Math.floor(Math.random() * bisa.length)]
let jawab = `*Bisakah ${text}*\nJawab : ${keh}`
riyan.sendMessage(m.chat, { text: jawab }, {quoted: m})
}
break
case 'apakah': {
if (!text) throw `Example : ${prefix + command} saya bisa menang?`
let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Coba Tanyakan Ayam']
let kah = apa[Math.floor(Math.random() * apa.length)]
let jawab = `*Apakah ${text}*\nJawab : ${kah}`
riyan.sendMessage(m.chat, { text: jawab }, {quoted: m})
}
break
case 'kapankah': {
if (!text) throw `Example : ${prefix + command} saya menang?`
let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Nanti','Tidak Akan Pernah']
let koh = kapan[Math.floor(Math.random() * kapan.length)]
let jawab = `*${command} ${text}*\nJawab : ${koh}`
riyan.sendMessage(m.chat, { text: jawab }, {quoted: m})
}
break
case 'cekmati': {
if (m.text.includes('@')) return m.reply(`Invalid!\n\nPake Nama Woy\nJangan Pakai Tag / Nomer!`)
if (!q) return m.reply(`Invalid!\n\nYg mau di cek siapa anjir?`)
predea = await axios.get(`https://api.agify.io/?name=${q}`)
let jawab = (`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro_\n_Soalnya Mati ga ada yang tau_`)
riyan.sendMessage(m.chat, { text: jawab }, {quoted: m})
}
break
case 'cintaku': {
let mlove = ['⟪1%⟫','⟪2%⟫','⟪3%⟫','⟪4%⟫','⟪5%⟫','⟪6%⟫','⟪7%⟫','⟪8%⟫','⟪9%⟫','⟪10%⟫','⟪11%⟫','⟪12%⟫','⟪13%⟫','⟪14%⟫','⟪15%⟫','⟪16%⟫','⟪17%⟫','⟪18%⟫','⟪19%⟫','⟪20%⟫','⟪21%⟫','⟪22%⟫','⟪23%⟫','⟪24%⟫','⟪25%⟫','⟪26%⟫','⟪27%⟫','⟪28%⟫','⟪29%⟫','⟪30%⟫','⟪31%⟫','⟪32%⟫','⟪33%⟫','⟪34%⟫','⟪35%⟫','⟪36%⟫','⟪37%⟫','⟪38%⟫','⟪39%⟫','⟪40%⟫','⟪41%⟫','⟪42%⟫','⟪43%⟫','⟪44%⟫','⟪45%⟫','⟪46%⟫','⟪47%⟫','⟪48%⟫','⟪49%⟫','⟪50%⟫','⟪51%⟫','⟪52%⟫','⟪53%⟫','⟪54%⟫','⟪55%⟫','⟪56%⟫','⟪57%⟫','⟪58%⟫','⟪59%⟫','⟪60%⟫','⟪61%⟫','⟪62%⟫','⟪63%⟫','⟪64%⟫','⟪65%⟫','⟪66%⟫','⟪67%⟫','⟪68%⟫','⟪69%⟫','⟪70%⟫','⟪71%⟫','⟪72%⟫','⟪73%⟫','⟪74%⟫','⟪75%⟫','⟪76%⟫','⟪77%⟫','⟪78%⟫','⟪79%⟫','⟪80%⟫','⟪81%⟫','⟪82%⟫','⟪83%⟫','⟪84%⟫','⟪85%⟫','⟪86%⟫','⟪87%⟫','⟪88%⟫','⟪89%⟫','⟪90%⟫','⟪91%⟫','⟪92%⟫','⟪93%⟫','⟪94%⟫','⟪95%⟫','⟪96%⟫','⟪97%⟫','⟪98%⟫','⟪99%⟫','⟪100%⟫']
let mcinta = mlove[Math.floor(Math.random() * mlove.length)]
let jawab = (`*Sebesar : ${mcinta} Padanya*`)
riyan.sendMessage(m.chat, { text: jawab }, {quoted: m})
}
break
case 'dadu': {
let ddsa = ['⚀','⚁','⚂','⚃','⚄','⚅']
let klow = ddsa[Math.floor(Math.random() * ddsa.length)]
m.reply(klow)
}
break
case 'rate': case 'nilai': {
const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const te = ra[Math.floor(Math.random() * ra.length)]
riyan.sendMessage(m.chat, { text: `Rate Bot : *${te}%*` }, { quoted: m })
}
break
case 'gantengcek': {
if (!text) return replay(`Tag Someone, Example : ${prefix + command} Riyan`)
const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const te = ra[Math.floor(Math.random() * ra.length)]
riyan.sendMessage(m.chat, { text: `Cek Ganteng : ${text}\nRate Bot : *${te}%*` }, { quoted: m })
}
break
case 'cantikcek': {
if (!text) return replay(`Tag Someone, Example : ${prefix + command} riyan`)
const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const te = ra[Math.floor(Math.random() * ra.length)]
riyan.sendMessage(m.chat, { text: `Cek Cantik : ${text}\nRate Bot : *${te}%*` }, { quoted: m })
}
break
case 'tanyakerang': {
if (!text) throw `Example : ${prefix + command} saya menang?`
let krng = ['Mungkin suatu hari', 'Tidak juga', 'Tidak keduanya', 'Kurasa tidak', 'Ya', 'Tidak', 'Coba tanya lagi', 'Tidak ada']
let koh = krng[Math.floor(Math.random() * krng.length)]
let jawab = `*${command} ${text}*\n*Jawab : ${koh}*`
riyan.sendMessage(m.chat, { text: jawab }, {quoted: m})
}
break
case 'fitnah': {
if (args.length < 1) return reply(`Usage :\n${prefix}fake [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fake 0|hai|hai juga markenlin`)
var gh = body.slice(10)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
var parti = gh.split("|")[0];
var targetq = gh.split("|")[1];
var bot = gh.split("|")[2];
var ftelo = {key: {fromMe: false, participant: `${mentioned}`, ...(m.chat ? { remoteJid: m.chat } : {})}, message: { conversation: `${targetq}` }}
riyan.sendMessage(m.chat, {text: bot}, {quoted: ftelo})
}
break
           
//PEMBATAS ADMIN & OWNER=======================================
case 'donasi': case 'sewabot': case 'buypremium': {
riyan.sendMessage(m.chat, { image: fs.readFileSync('./media/image/donasi.jpg'), caption: `*${ucapanWaktu} Kak ${m.pushName}*\n\n *Jika ingin berdonasi silahkan scan gambar diatas*\n\n*Jika ingin sewa bot atau premium*\n*Silahkan Chat Owner*\n\n*Atau Transfer via*\n- *Dana,ShopeePay,All Bank*\n Ke nomer berikut : 089637959432\n*Jika Sudah Melakukan Transaksi Diharapkan Hubungi Onwer Biar Segera Diproses🙏\n_Terima kasih_` }, { quoted: m })
}
break
case 'sc': {
m.reply('https://wa.me/6289637959432')
}
break		 
case 'follig': {
let jawab = `*${ucapanWaktu}*\n*Silahkan Klik Link Ini*`
let buttons = [{ buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 }]
let buttonMessage = {
  document: fs.readFileSync('./media/doc/fake.pptx'),
  fileName : akulaku + (` | Halo ${pushname}`),
  mimetype: `${filsk}`,
  fileLength: jumhal,
  pageCount: jumlha,
  caption: jawab,
  footer: nyoutube,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Riyan Sipayung',
  body: 'Follow Instagram Owner', 
  showAdAttribution: true,
  thumbnail: thumb,
  mediaType:2,
  mediaUrl: myytv,
  sourceUrl: myyt
  }}
  }
  riyan.sendMessage(m.chat, buttonMessage, {quoted: fkontak})
}
break
case 'checklimit': {
m.reply('*Limit Kakak :* ' + (db.data.users[m.sender].limit))
}
break 
case 'totalhit': case 'hit': {
if (!isCreator) return mess.owner
m.reply(`*Total Hit : ${jumlahcmd}*\n*Total Hit Harian : ${jumlahharian}*`)
}
break
case 'runtime': {
let lowq = `*Bot Telah Online Selama*\n*${runtime(process.uptime())}*`
riyan.sendMessage(m.chat, { text: lowq }, {quoted: fkontak})
riyan.setStatus(`${riyan.user.name} | Runtime : ${runtime(process.uptime())}`)
}
break
case 'reqfitur': {
if (!text) throw `Example : ${prefix + command} Fitur Min`
let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${command} ${text}`
let ments = [ownernya, me]
let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'THANKS' }, type: 1 }]
await riyan.sendButtonText(ownernya, buttons, pjtxt, nyoutube, m, {mentions: ments, quoted: fdoc})
let akhji = `*Request Telah Terkirim*\n*Ke Owner @${ownernya.split('@')[0]}*\n_Terima Kasih🙏_`
await riyan.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments, quoted: fkontak})
}
break
case 'myip': {
if (!isCreator) throw mess.owner
var http = require('http')
http.get({
'host': 'api.ipify.org',
'port': 80,
'path': '/'
}, function(resp) {
resp.on('data', function(ip) {
m.reply("🔎 My public IP address is: " + ip);
})
})
}
break
case 'tagme': {
if (!m.isGroup) throw mess.group
let me = m.sender
let jawab = `*@${me.split('@')[0]}*`
let ments = [me]
let buttons = [{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 }]
riyan.sendMessage(m.chat, {react: {text: kloadq,key: m.key}})
await riyan.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: ments, quoted: fkontak})
}
break
case 'react': {
if (!isCreator) throw mess.owner
reactionMessage = {
react: {
text: args[0],
key: m.key
}
}
riyan.sendMessage(m.chat, reactionMessage)
}
break  
case 'join': {
if (!isPremium) throw mess.premime
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await riyan.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'leave': {
if (!isCreator) throw mess.owner
await riyan.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'kick': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await riyan.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'add': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await riyan.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'promote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await riyan.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await riyan.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'block': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await riyan.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await riyan.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'addprem':
if (!isCreator) return m.reply(mess.owner)
{ q, args } {
if (args.length < 2)
return m.reply(
`Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`
);
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
prem.addPremiumUser(m.mentionedJid[0], args[1], premium);
}
riyan.sendMessage(m.chat, { text: "Sukses Premium" }, { quoted: fkontak });
} else {
prem.addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
riyan.sendMessage(m.chat, { text: "Sukses Via Nomor" }, { quoted: fkontak });
}
}
break
case 'delprem':
if (!isCreator) return m.reply(mess.owner)
{ q, args, arg } {
if (args.length < 1) return reply(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`);
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
premium.splice(prem.getPremiumPosition(m.mentionedJid[i], premium), 1);
fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
}
riyan.sendMessage(m.chat, { text: "Sukses Delete" }, { quoted: fkontak });
} else {
premium.splice(prem.getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
riyan.sendMessage(m.chat, { text: "Sukses Via Nomer" }, { quoted: fkontak });
}
}
break
case 'listprem': {
if (!isCreator) return m.reply(mess.owner)
let data = require("./database/premium.json")
let txt = `*------「 LIST PREMIUM 」------*\n\n`
for (let i of data) {
txt += `*Nomer : ${i.id}*\n*Expired : ${i.expired} Second*\n\n`
}
m.reply(txt)
}
break
case 'setnamegc': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await riyan.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setdescgc': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await riyan.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setppbot': {
if (!isCreator) throw mess.owner
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await riyan.downloadAndSaveMediaMessage(quoted)
await riyan.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'setppgc': {
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await riyan.downloadAndSaveMediaMessage(quoted)
await riyan.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'totag': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!m.quoted) throw `Reply pesan dengan caption ${prefix + command}`
riyan.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break
case 'tagall': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
riyan.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
riyan.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'styletext': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./lib/scraper')
if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `⭔ *${i.name}* : ${i.result}\n\n`
}
m.reply(teks)
}
break
case 'vote': {
if (!m.isGroup) throw mess.group
if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [q, [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageVote = {
text: teks_vote,
footer: riyan.user.name,
buttons: buttonsVote,
headerType: 1
}
riyan.sendMessage(m.chat, buttonMessageVote)
}
break
case 'upvote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsUpvote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageUpvote = {
text: teks_vote,
footer: riyan.user.name,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
}
riyan.sendMessage(m.chat, buttonMessageUpvote)
}
break
case 'devote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsDevote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageDevote = {
text: teks_vote,
footer: riyan.user.name,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
riyan.sendMessage(m.chat, buttonMessageDevote)
}
break
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${riyan.user.id}
`
riyan.sendTextWithMentions(m.chat, teks_vote, m)
break
case 'deletevote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
delete vote[m.chat]
m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
}
break
case 'group': case 'grup': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'close'){
await riyan.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Sukses Menutup Group*`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await riyan.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Sukses Membuka Group*`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'OPEN GROUP' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'CLOSE GROUP' }, type: 1 }
]
await riyan.sendButtonText(m.chat, buttons, `Mode Group`, riyan.user.name, m)

}
}
break
case 'editinfo': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'open'){
await riyan.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Sukses Membuka Edit Info Group*`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'close'){
await riyan.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Sukses Menutup Edit Info Group*`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Open Info' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Close Info' }, type: 1 }
]
await riyan.sendButtonText(m.chat, buttons, `Mode Edit Info`, riyan.user.name, m)

}
}
break
case 'antilink': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink) return m.reply(`*Sudah Aktif kak Sebelumnya*`)
db.data.chats[m.chat].antilink = true
m.reply(`*Antilink Sekarang Aktif !*`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink) return m.reply(`*Sudah Tidak Aktif Sebelumnya*`)
db.data.chats[m.chat].antilink = false
m.reply(`*Antilink Sekarang Tidak Aktif !*`)
} else {
let buttons = [
{ buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await riyan.sendButtonText(m.chat, buttons, `Mode Antilink`, riyan.user.name, m)
}
}
break
case 'mute': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
m.reply(`${riyan.user.name} telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
m.reply(`${riyan.user.name} telah di unmute di group ini !`)
} else {
let buttons = [
{ buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
]
await riyan.sendButtonText(m.chat, buttons, `Mute Bot`, riyan.user.name, m)
}
}
break
case 'linkgroup': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
let response = await riyan.groupInviteCode(m.chat)
riyan.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n👾Link Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'revoke':
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
await riyan.groupRevokeInvite(m.chat)
.then(res => {
m.reply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`)
}).catch((err) => m.reply(jsonformat(err)))
break
case 'ephemeral': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
await riyan.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await riyan.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'delete': {
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
riyan.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'reportfitur': {
if (!text) throw `Example : ${prefix + command} Lapor Ada Fitur Yang error`
let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${text}`
let ments = [ownernya, me]
let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'THANKS' }, type: 1 }]
await riyan.sendButtonText(ownernya, buttons, pjtxt, nyoutube, m, {mentions: ments})
let akhji = `Laporan Telah Terkirim\nKe Owner @${ownernya.split('@')[0]}\n*Terima Kasih Laporannya🙏*\n_Nomermu Akan Terblokir_\n_Jika Laporan Hanya Di Buat Buat_`
await riyan.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments})
}
break
case 'hehehe': {
reactionMessage = {
react: {
text: '❤',
key: m.key
}
}
riyan.sendMessage(m.chat, reactionMessage)
}
break  
case 'bcgc': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await riyan.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let txt = `「 Broadcast Bot 」\n\n${text}`
let buttons = [{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'RULES BOT' }, type: 1 }]
await riyan.sendButtonText(i, buttons, txt, nyoutube, m, {quoted: fkontak})
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'broadcast': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let txt = `「 Broadcast Bot 」\n\n${text}`
let buttons = [{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 },{ buttonId: 'menu', buttonText: { displayText: 'MENU' }, type: 1 }]
await riyan.sendButtonText(yoi, buttons, txt, nyoutube, m, {quoted: fkontak})
}
m.reply('Sukses Broadcast')
}
break
case 'infochat': {
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⌕ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⌕ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⌕ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
let buttons = [{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'RULES BOT'}, type: 1 }]
await riyan.sendButtonText(m.chat, buttons, teks, nyoutube, m, {mentions: [i.userJid], quoted: fkontak})
}}
break
case 'listpc': {
if (!isCreator) throw mess.owner
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
for (let i of anu) {
let nama = store.messages[i].array[0].pushName
teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n\n───────────────\n\n`
let buttons = [{ buttonId: 'rules', buttonText: { displayText: 'RULES BOT'}, type: 1 }]
await riyan.sendButtonText(m.chat, buttons, teks, nyoutube, m, {mentions: [i], quoted: fkontak})
}}
break
case 'listgc': {
if (!isCreator) throw mess.owner
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
for (let i of anu) {
let metadata = await riyan.groupMetadata(i)
teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n─────────────────\n\n`
let buttons = [{ buttonId: 'rules', buttonText: { displayText: 'RULES BOT' }, type: 1 }]
await riyan.sendButtonText(m.chat, buttons, teks, nyoutube, m, {mentions: [metadata.owner], quoted: fkontak})
}}
break
case 'listonline': {
if (!isCreator) throw mess.owner
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
riyan.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
case 'ebinary': {
if (!text) throw `Example : ${prefix + command} text`
let { eBinary } = require('./lib/binary')
let eb = await eBinary(text)
m.reply(eb)
}
break
case 'dbinary': {
if (!text) throw `Example : ${prefix + command} text`
let { dBinary } = require('./lib/binary')
let db = await dBinary(text)
m.reply(db)
}
break
case 'public': {
if (!isCreator) throw mess.owner
riyan.public = true
m.reply('*Sukse Change To Public Usage*')
}
break
case 'self': {
if (!isCreator) throw mess.owner
riyan.public = false
m.reply('*Sukses Change To Self Usage*')
}
break
case 'ping': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
case 'speedtest': {
if (!isCreator) throw mess.owner
m.reply('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = await exec('python speed.py')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
if (stdout.trim()) m.reply(stdout)
if (stderr.trim()) m.reply(stderr)
}
}
break
case 'owner': case 'creator': {
riyan.sendContact(m.chat, global.owner, m)
}
break
//NEW LOL HUMAN 1BULAN
//LolIslami
case 'listsurah': {
try {
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/quran?apikey=riyanspyg01`)
.then(({ data }) => {
let text = 'Search By Yumiko - BMD\nThanks For Api By Lol Human\nList Surah:\n'
for (let x in data.result) {
text += `${x}. ${data.result[x]}\n`
}
m.reply(text)
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'alquran': {
try {
if (!text) throw `Example : ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`
m.teply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/quran/${text}?apikey=riyanspyg01`)
.then(({ data }) => {
var ayat = data.result.ayat
var text = `QS. ${data.result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
text += `${x.arab}\n${x.ayat}. ${x.latin}\n${x.indonesia}\n\n`
}
text = text.replace(/<u>/g, '_').replace(/<\/u>/g, '_')
text = text.replace(/<strong>/g, '*').replace(/<\/strong>/g, '*')
m.reply(text)
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'alquranaudio': {
try {
if (args.length == 0) return m.reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
m.teply(mess.wait)
riyan.sendMessage(m.chat, { document: { url: `https://api.lolhuman.xyz/api/quran/audio/${args[0]}?apikey=riyanspyg01` }, mimetype: 'audio/mpeg', fileName: 'Al-Quran.mp3'}, { quoted: m })
} catch (e) {
m.reply(mess.error)}
}
break
case 'asmaulhusna': {
try {
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=riyanspyg01`)
.then(({ data }) => {
var text = `No : ${data.result.index}\n`
		text += `Latin: ${data.result.latin}\n`
		text += `Arab : ${data.result.ar}\n`
		text += `Indonesia : ${data.result.id}\n`
		text += `English : ${data.result.en}`
m.reply(text)
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'kisahnabi': {
try {
if (!text) throw `Example : ${prefix + command} muhammad`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/kisahnabi/${text}?apikey=riyanspyg01`)
.then(({ data }) => {
riyan.sendText(m.chat, `🕌 Nabi: ${data.result.name}\n🕋 Kelahiran: ${data.result.thn_kelahiran}\n🕋 Usia: ${data.result.age}\n🕋 Singgah: ${data.result.place}\n🕋 Kisah: ${data.result.story}`, m)
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'jadwalsholat': {
try {
if (!text) throw `Example : ${prefix + command} medan`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/sholat/${text}?apikey=riyanspyg01`)
.then(({ data }) => {
riyan.sendText(m.chat, `📍 Wilayah: ${data.result.wilayah}\n📌 Tanggal: ${data.result.tanggal}\n🕌 Sahur: ${data.result.sahur}\n🕌 Imsak: ${data.result.imsak}\n🕌 Subuh: ${data.result.subuh}\n🕌 Terbit: ${data.result.terbit}\n🕌 Dhuha: ${data.result.dhuha}\n🕌 Dzuhur: ${data.result.dzuhur}\n🕌 Ashar: ${data.result.ashar}\n🕌 Maghrib: ${data.result.maghrib}\n🕌 Isya: ${data.result.isya}`, m)
})
} catch (e) {
m.reply(mess.error)}
}
break
//LolDownload
case 'apkdownload': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} com.whatsapp`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/apkdownloader?apikey=riyanspyg01&package=${text}`)
.then(({ data }) => {
riyan.sendImage(m.chat, data.result.apk_icon, `~> APK: ${data.result.apk_name}\n~> Version: ${data.result.apk_version}\n~> Author: ${data.result.apk_author}\n\n\n*Yumiko-BMD/Riyan Sipayung*\n\n_*Api By Lol Human*_`, m)
riyan.sendMessage(m.chat, { document: { url: data.result.apk_link }, mimetype: 'application/vnd.android.package-archive', fileName: `${data.result.apk_name}.apk` }, { quoted: m })
db.data.users[m.sender].limit -= 1
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'cocofun': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} http://i.coco.fun/short/1513tui`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/cocofun?apikey=riyanspyg01&url=${text}`)
.then(({ data }) => {
riyan.sendMessage(m.chat, { video: { url: data.result.nowm }, mimetype: 'video/mp4', filename: `${data.result.title}.mp4`, caption: `~> Title: ${data.result.title}\n~> Tag: ${data.result.tag}\n~> Views: ${data.result.views}\n~> Author: ${data.result.uplouder}`}, { quoted: m })
db.data.users[m.sender].limit -= 1
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'facebook': case 'fbdl': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} https://web.facebook.com/watch/?v=892725951575913`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=riyanspyg01&url=${text}`)
.then(({ data }) => {
riyan.sendMessage(m.chat, { video: { url: data.result }, mimetype: 'video/mp4', filename: 'Yumiko/RiyanSipayung.mp4'}, { quoted: m })
db.data.users[m.sender].limit -= 1
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'instagram': case 'igdl': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=riyanspyg01&url=${text}`)
.then(({ data }) => {
var url = data.result
if (url.find(v => v.includes('.mp4'))) {
riyan.sendMessage(m.chat, { video: { url }, mimetype: 'video/mp4', filename: 'Yumiko/RiyanSipayung.mp4'}, { quoted: m })
} else {
riyan.sendImage(m.chat, url, { quoted: m })
}
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'igdl2': {
try {
if (!isPremium) throw mess.premime
if (!text) throw `Example : ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=riyanspyg01&url=${text}`)
.then(({ data }) => {
var x = data.result
if (x.media.find(v => v.includes('.mp4'))) {
riyan.sendMessage(m.chat, { video: { url: x.media }, mimetype: 'video/mp4', filename: 'Yumiko/RiyanSipayung.mp4', caption: `~> UserName: ${x.account.username}\n~> Deskripsi: ${x.caption}`}, { quoted: m })
} else {
riyan.sendImage(m.chat, { image: { url: x.media } })
}
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'jooxplay': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} melukis senja`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/jooxplay?apikey=riyanspyg01&query=${text}`)
.then(({ data }) => {
var caption = `Title : ${data.result.info.song}\n`
caption += `Artists : ${data.result.info.singer}\n`
caption += `Duration : ${data.result.info.duration}\n`
caption += `Album : ${data.result.info.album}\n`
caption += `Uploaded : ${data.result.info.date}\n`
caption += `Lirik :\n ${data.result.lirik}\n`
riyan.sendImage(m.chat, data.result.image, `${text}\nSearch By Yumiko BMD\nOwer: Riyan Sipayung\nApi By Lol Human`, m)
.then(() => {
riyan.sendMessage(m.chat, { document: { url: data.result.audio[0].link }, mimetype: 'audio/mpeg', fileName: `${data.result.info.song}.mp3` }, { quoted: m })
db.data.users[m.sender].limit -= 1
})
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'mediafire': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw 'Masukkan Query Link!'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return m.reply(`The link you provided is invalid`)
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/mediafire?apikey=riyanspyg01&url=${text}`)
.then(({ data }) => {
if (data.result.filesize.split('MB')[0] >= 80) return m.reply('*File Over Limit* '+util.format(data))
let result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${data.result.filename}
*Size* : ${data.result.filesize}
*Type* : ${data.result.filetype}
*Link* : ${data.result.link}`
m.reply(`${result4}`)
riyan.sendMessage(m.chat, { document : { url : data.result.link }, fileName : data.result.filename, mimetype: data.result.filetype }, { quoted : m })
db.data.users[m.sender].limit -= 1
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'pinterest': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} loli kawai`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/pinterest?apikey=riyanspyg01&query=${text}`)
.then(({ data }) => {
riyan.sendMessage(m.chat, { image: { url: data.result }, caption: '⭔ Media Url : '+data.result }, { quoted: m })
db.data.users[m.sender].limit -= 1
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'pinterest2':{
try {
if (!isPremium) throw mess.premime
if (!text) throw `Example : ${prefix + command} loli kawai`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/pinterest2?apikey=riyanspyg01&query=${text}`)
.then(({ data }) => {
for (var x of data.result.slice(0, 5)) {
riyan.sendImage(m.chat, x, `${text}\n\nYumiko BMD\nRiyan Sipayung\nApi By Lol Human`, m)
}
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'spotify': {
try {
if (!isPremium) throw mess.premime
if (!text) throw `Example : ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/spotify?apikey=riyanspyg01&url=${text}`)
.then(({ data }) => {
riyan.sendImage(m.chat, data.result.thumbnail, `~> Title: ${data.result.title}\n~> Singer: ${data.result.artists}\n~> Duration: ${data.result.duration}`, m)
riyan.sendMessage(m.chat, { document: { url: data.result.link }, mimetype: 'audio/mpeg', fileName: `${data.result.title}.mp3` }, { quoted: m })
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'tiktok': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`
m.reply(mess.wait)
riyan.sendMessage(m.chat, {video: { url: "https://api.lolhuman.xyz/api/tiktokwm?apikey=riyanspyg01&url="+text }, caption: 'Jangan Lupa Donasi Kak'}, { quoted: m})
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.error)}
}
break
case 'tiktoknowm': {
try {
if (!isPremium) throw mess.premime
if (!text) throw `Example : ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=riyanspyg01&url=${text}`)
.then(({ data }) => {
var buttons = [
{buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Back Sound'}, type: 1}
]
var buttonMessage = {
video: { url: data.result.link },
caption: `~> Title: ${data.result.title}\n~> *Jangan Lupa Donasi Kak*`,
footer: nyoutube,
buttons: buttons,
headerType: 5
}
riyan.sendMessage(m.chat, buttonMessage, { quoted: m })
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'tiktokmp3': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`
m.reply(mess.wait)
riyan.sendMessage(m.chat, { document: { url: "https://api.lolhuman.xyz/api/tiktokmusic?apikey=riyanspyg01&url="+text }, mimetype: 'audio/mpeg', fileName: `Yumiko-RiyanSipayung.mp3` }, { quoted: m })
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.error)}
}
break
case 'ytmp3': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw 'Linknya Mana Kak?!'
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/ytaudio2?apikey=riyanspyg01&url=${text}`)
.then(({ data }) => {
riyan.sendImage(m.chat, data.result.thumbnail, `~> Title: ${data.result.title}\n~> Size: ${data.result.size}\n~> Url : ${isUrl(text)[0]}`, m)
riyan.sendMessage(m.chat, { document: { url: data.result.link }, mimetype: 'audio/mpeg', fileName: `${data.result.title}.mp3` }, { quoted: m })
db.data.users[m.sender].limit -= 1
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'soundcloud': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} https://soundcloud.com/riyan-sipayung01/at-my-worst-2021-riyan-sipayung-raihan-khairi-mp3`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/soundcloud?apikey=riyanspyg01&url=${text}`)
.then(({ data }) => {
riyan.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/ebcd03ae3dd81899b212d.jpg' }, caption: `~> Title: ${data.result.title}\n~> Url : ${isUrl(text)[0]}\n\n*Selalu Jaga Kesehatan Kak*\n_*Support Owner Dengan Donasi/Buy Premium Ya Kak,Biar Owner Tetap Semangat*`, footer: nyoutube }, {quoted: fkontak })
riyan.sendMessage(m.chat, { document: { url: data.result.link }, mimetype: 'audio/mpeg', fileName: `${data.result.title}.mp3` }, { quoted: m })
db.data.users[m.sender].limit -= 1
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'ytmp4': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw 'Linknya Mana Kak?!'
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/ytvideo2?apikey=riyanspyg01&url=${text}`)
.then(({ data }) => {
var buttons = [
{buttonId: `ytmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
var buttonMessage = {
video: { url: data.result.link },
caption: `~> Title: ${data.result.title}\n~> *Jangan Lupa Donasi Kak*`,
footer: nyoutube,
buttons: buttons,
headerType: 5
}
riyan.sendMessage(m.chat, buttonMessage, { quoted: m })
db.data.users[m.sender].limit -= 1
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'play': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} alone alan walker`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/ytplay?apikey=riyanspyg01&query=${text}`)
.then(({ data }) => {
var anu = data.result
var buttons = [
{buttonId: `ytmp3 ${anu.audio.link}`, buttonText: {displayText: '♫ Audio'}, type: 1},
{buttonId: `ytmp4 ${anu.video.link}`, buttonText: {displayText: '► Video'}, type: 1}
]
var buttonMessage = {
image: { url: anu.info.thumbnail },
caption: `
⭔ Title : ${anu.info.title}
⭔ Ext : Search
⭔ ID : ${anu.info.id}
⭔ Duration : ${anu.info.duration}
⭔ Viewers : ${anu.info.view}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.info.uplouder}
⭔ Channel : ${anu.info.channel}
⭔ Description : ${anu.info.description}`,
footer: riyan.user.name,
buttons: buttons,
headerType: 4
}
riyan.sendMessage(m.chat, buttonMessage, { quoted: m })
db.data.users[m.sender].limit -= 1
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'yts': case 'ytsearch': {
try {
if (!isPremium) throw mess.premime
if (!text) throw `Example : ${prefix + command} alone`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/ytsearch?apikey=riyanspyg01&query=${text}`)
.then(({ data }) => {
var teks = 'YouTube Search\n\n Result From '+text+'\n\n'
var no = 1
for (var i of data.result) {
teks += `〽️ No : ${no++}\n📍 Published: ${i.published}\n📍 Video ID : ${i.videoId}\n📌 Title : ${i.title}\n⚠️ Views : ${i.views}\n\n─────────────────\n\n`
}
riyan.sendMessage(m.chat, { image: { url: data.result[0].thumbnail },  caption: teks }, { quoted: m })
})
} catch (e) {
m.reply(mess.error)}
}
break
//LolInformation
case 'jadwalbola': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/jadwalbola?apikey=riyanspyg01`)
.then(({ data }) => {
var text = `Search By Yumiko - BMD\n*Owner* : @${ownernya.split('@')[0]}\n\n─────────────────\n\nJadwal Bola :\n`
for (var x of data.result) {
text += `==============================\n`
text += `Date : ${x.time}\n`
text += `Event : ${x.event}\n`
text += `Match : ${x.match}\n`
text += `TV : ${x.tv}\n\n`
text += `==============================\n\n`
}
m.reply(text)
db.data.users[m.sender].limit -= 1
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'jadwaltv': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} antv`
m.reply(mess.wait)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/${text}?apikey=riyanspyg01`)
var lol = `Jadwal TV : ${text}\n`
for (var x in data.result) {
lol += `${x} - ${data.result[x]}\n`
}
m.reply(lol)
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.error)}
}
break
case 'jadwaltvnow': {
try {
if (!isPremium) throw mess.premime
m.reply(mess.wait)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=riyanspyg01`)
var lol = `Jadwal TV Now :\n`
for (var x in data.result) {
lol += `${x}${data.result[x]}\n\n`
}
m.reply(lol)
} catch (e) {
m.reply(mess.error)}
}
break
case 'chord': {
try {
if (!isPremium) throw mess.premime
if (!text) throw `Example : ${prefix + command} melukis senja`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/chord?apikey=riyanspyg01&query=${text}`)
.then(({ data }) => {
var x = data.result
var text = 'SEARCH CHORD BY YUMIKO BMD :\n\n'
text += `==============================\n`
text += `\`\`\`Judul :\`\`\`\n${x.title}\n\n`
text += `\`\`\`Modif :\`\`\`\n${x.modified.first_name}\n${x.modified.last_name}\n`
text += `==============================\n`
text += `~> Chord:\`\`\`\n${x.chord}\n\n`
m.reply(text)
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'translate': {
try {
if (!isPremium) throw mess.premime
if (args.length == 0) return m.reply(`Example: ${prefix + command} en Tahu Bacem`)
m.reply(mess.wait)
var kode_negara = args[0]
args.shift()
var lol = args.join(' ')
var { data } = await axios.get(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=riyanspyg01&text=${lol}`)
init_txt = `From : ${data.result.from}\n`
init_txt += `To : ${data.result.to}\n`
init_txt += `Original : ${data.result.original}\n`
init_txt += `Translated : ${data.result.translated}\n`
init_txt += `Pronunciation : ${data.result.pronunciation}\n`
m.reply(init_txt)
} catch (e) {
m.reply(mess.error)}
}
break
case 'infocuaca': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} medan`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/cuaca/${text}?apikey=riyanspyg01`)
.then(({ data }) => {
var { tempat, latitude, longitude, cuaca, angin, description, kelembapan, suhu, udara, permukaan_laut } = data.result
var hasil = `∆ INDONESIA ∆\n
📍 Lokasi: ${tempat}\n
~> Garis Lintang: ${latitude}\n
~> Garis Bujur: ${longitude}\n
🌡️ Suhu: ${suhu}\n
~> Cuaca: ${cuaca}\n
~> Angin: ${angin}\n
~> Udara: ${udara}\n
~> Kelembapan: ${kelembapan}\n
🌏 Permukaan Laut: ${permukaan_laut}\n
📝 Description: ${description}`
riyan.sendText(m.chat, hasil, m)
db.data.users[m.sender].limit -= 1
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'brainly': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} nkri adalah`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/brainly?apikey=riyanspyg01&query=${text}`)
.then(({ data }) => {
var text = 'Beberapa Pembahasan Dari Brainly :\n\n'
for (var x of data.result) {
text += `==============================\n`
text += `\`\`\`Pertanyaan :\`\`\`\n${x.question.content}\n\n`
text += `\`\`\`Jawaban :\`\`\`\n${x.answer.content}\n`
text += `==============================\n\n`
}
m.reply(text)
db.data.users[m.sender].limit -= 1
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'kbbi': {
try {
if (!isPremium) throw mess.premime
if (!text) throw `Example : ${prefix + command} malam`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/kbbi?apikey=riyanspyg01&query=${text}`)
.then(({ data }) => {
var text = 'Beberapa Search KBBI (Kamus Besar Bahasa Indonesia)\n\n'
for (var x of data.result) {
text += `\`\`\`Kata : ${x.nama}\`\`\`\n`
text += `\`\`\`Kata Dasar : ${x.kata_dasar}\`\`\`\n`
text += `\`\`\`Pelafalan : ${x.pelafalan}\`\`\`\n`
text += `\`\`\`Bentuk Tidak Baku : ${x.bentuk_tidak_baku}\`\`\`\n\n`
text += `\`\`\`Kode : ${x.makna[0].kelas[0].kode[0]}\`\`\`\n`
text += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
text += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
text += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
text += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
}
m.reply(text)
})
} catch (e) {
m.reply(mess.error)}
}
break
//LolManga
case 'animemanga': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} boruto`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/anime?apikey=riyanspyg01&query=${text}`)
.then(({ data }) => {
var lol = data.result
riyan.sendImage(m.chat, lol.coverImage.large, `~> Romaji: ${lol.title.romaji}\n~> English: ${lol.title.english}\n~> Native: ${lol.title.native}\n~> Format: ${lol.format}\n~> Source: ${lol.source}\n~> Description: ${lol.description}`, m)
var caption = 'Nama Character Yang Ada Di Anime / Manga\n'
for (var x of lol.characters.nodes) {
caption += `==============================\n`
caption += `- ${x.name.full} (${x.name.native})\n`
caption += `==============================\n\n`
}
riyan.sendImage(m.chat, lol.coverImage.medium, caption, m)
db.data.users[m.sender].limit -= 1
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'character': {
try {
if (!isPremium) throw mess.premime
if (!text) throw `Example : ${prefix + command} naruto`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/character?apikey=riyanspyg01&query=${text}`)
.then(({ data }) => {
var lol = data.result
riyan.sendImage(m.chat, lol.image.large, `~> Name: ${lol.name.full}\n~> Native: ${lol.name.native}\n~> Source: MANGA\n~> Description: ${lol.description}`, m)
var caption = '*------「 NAMA CHARACTER 」------*\n\nResult From '+text+'\n\n'
for (var x of lol.media.nodes) {
caption += `==============================\n`
caption += `- ${x.title.romaji} (${x.title.native})\n`
caption += `==============================\n\n`
}
riyan.sendImage(m.chat, lol.image.medium, caption, m)
})
} catch (e) {
m.reply(mess.error)}
}
break
//LolMovie
case 'ceritahoror': {
try {
if (!isPremium) throw mess.premime
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/ceritahoror?apikey=riyanspyg01`)
.then(({ data }) => {
var lol = data.result
riyan.sendImage(m.chat, lol.thumbnail, `~> Title: ${lol.title}\n\n~> Al Kisah: ${lol.story}`, m)
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'cerpenrandom': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/cerpen?apikey=riyanspyg01`)
.then(({ data }) => {
var goblok = fs.readFileSync('./media/image/cerpen.jpg')
riyan.sendImage(m.chat, goblok, `~> Judul Cerpen: ${data.result.title}\n\n~> Al Kisah: ${data.result.cerpen}`, m)
db.data.users[m.sender].limit -= 1
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'film': {
try {
if (!isPremium) throw mess.premime
if (!text) throw `Example : ${prefix + command} transformer`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/filmapik?apikey=riyanspyg01&query=${text}`)
.then(({ data }) => {
var teks = '*------「 FILM-SEARCH 」------*\n\nResult From '+text+'\n\n'
var no = 1
for (var i of data.result) {
teks += `〽️ No : ${no++}\n📍 Official Web: ${i.officialWeb}\n📍 Rating ⭐: ${i.rating}\n📌 Title : ${i.title}\n⚠️ Episode: ${i.episode}\n\n─────────────────\n\n`
}
riyan.sendMessage(m.chat, { image: { url: data.result[0].thumbnailPotrait },  caption: teks }, { quoted: m })
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'lk21': {
try {
if (!isPremium) throw mess.premime
if (!text) throw `Example : ${prefix + command} transformer`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/lk21?apikey=riyanspyg01&query=${text}`)
.then(({ data }) => {
var caption = `~> Title : ${data.result.title}\n`
caption += `~> Durasi Vidio : ${data.result.duration}\n`
caption += `~> Link LK21 : ${data.result.link}\n`
caption += `~> Years : ${data.result.tahun}\n`
caption += `~> Rating ⭐: ${data.result.rating}\n`
caption += `~> Desc Video : ${data.result.desc}\n`
caption += `~> Lokasi : ${data.result.location}\n`
caption += `~> Realease : ${data.result.date_realease}\n`
caption += `~> Leanguage : ${data.result.lenguage}\n`
caption += `Actors : ${data.result.actors.join(', ')}\n`
riyan.sendImage(m.chat, data.result.thumbnail, caption, m)
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'wattpadsearch': {
try {
if (!isPremium) throw mess.premime
if (!text) throw `Example : ${prefix + command} aldebaran`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=riyanspyg01&query=${text}`)
.then(({ data }) => {
var teks = '*------「 WATTPAD-SEARCH 」------*\n\n'
teks += 'Result From '+text+'\n\n'
for (var x of data.result) {
teks += `Title : ${x.title}\n`
teks += `Url : ${x.url}\n`
teks += `Part : ${x.parts}\n`
teks += `Motify date : ${x.modifyDate}\n`
teks += `Create date : ${x.createDate}\n`
teks += `Coment count: ${x.commentCount}\n`
teks += `Deskripsi : ${x.description}\n----------------------------------------------------------\n\n`
}
riyan.sendImage(m.chat, data.result[0].cover, teks, m)
})
} catch (e) {
m.reply(mess.error)}
}
break
//LolSearcher
case 'gimage': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} boruto`
m.reply(mess.wait)
var buttons = [
{buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
var buttonMessage = {
image: { url: `https://api.lolhuman.xyz/api/gimage?apikey=riyanspyg01&query=${text}` },
caption: `*-------「 GIMAGE SEARCH 」-------*\n
*Query* : ${text}`,
footer: nyoutube,
buttons: buttons,
headerType: 4
}
riyan.sendMessage(m.chat, buttonMessage, { quoted: m })
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.error)}
}
break
case 'gimage2': {
try {
if (!isPremium) throw mess.premime
if (!text) throw `Example : ${prefix + command} loli kawai`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/gimage2?apikey=riyanspyg01&query=${text}`)
.then(({ data }) => {
for (var x of data.result.slice(0, 5)) {
riyan.sendImage(m.chat, x, `${text}\n\nYumiko BMD\nRiyan Sipayung\nApi By Lol Human`, m)
}
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'google': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} tahu bacem`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/gsearch?apikey=riyanspyg01&query=${text}`)
.then(({ data }) => {
var teks = `Google Search From : ${text}\n\n`
for (var g of data.result) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.desc}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
db.data.users[m.sender].limit -= 1
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'gcsearch': {
try {
if (!isPremium) throw mess.premime
if (!text) throw `Example : ${prefix + command} islami`
m.reply(mess.wait)
await axios.get(`https://api.lolhuman.xyz/api/groupwhatsapp?apikey=riyanspyg01&query=${text}`)
.then(({ data }) => {
var teks = '```「 Search Group 」```'
for (let i of data.result) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `⭔ *Group Name* : ${i.title}\n`
teks += `⭔ *Link* : ${i.link}\n\n────────────────────────\n\n`
}
riyan.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6cbed9af4ca002de3a801.jpg' }, caption: teks, footer: nyoutube}, { quoted: fkontak })
})
} catch (e) {
m.reply(mess.error)}
}
break
//LolMaker
case 'attp': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} text`
m.reply(mess.wait)
await riyan.sendMedia(m.chat, `https://api.lolhuman.xyz/api/${command}?apikey=riyanspyg01&text=${text}`, 'riyan', 'sipayung', m, {asSticker: true})
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.error)}
}
break
case 'attp2': case 'attpmoji': {
try {
if (!isPremium) throw mess.premime
if (!text) throw `Example : ${prefix + command} Halo 😁`
m.reply(mess.wait)
await riyan.sendMedia(m.chat, `https://api.lolhuman.xyz/api/${command}?apikey=riyanspyg01&text=${text}`, 'riyan', 'sipayung', m, {asSticker: true})
} catch (e) {
m.reply(mess.error)}
}
break
case 'tts': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} text`
m.reply(mess.wait)
riyan.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/gtts/id?apikey=riyanspyg01&text=${text}` }, mimetype: 'audio/mpeg', ptt: true }, { quoted: fvn })
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.error)}
}
break
//PEMBATAS CONVERT=======================================
case 'sticker': case 's': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!quoted) throw `*Balas Video/Image Dengan Caption* ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await riyan.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
db.data.users[m.sender].limit -= 1
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maksimal 10 detik!*')
let media = await quoted.download()
let encmedia = await riyan.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
db.data.users[m.sender].limit -= 1
} else {
throw `*Kirim Gambar/Video Dengan Caption* ${prefix + command}\nDurasi *Video 1-9 Detik*`
}
} catch (e) {
m.reply(mess.error)}
}
break
case 'stickerwm': case 'swm': {
try {
let [teks1, teks2] = text.split`|`
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await riyan.downloadMediaMessage(qmsg)
let encmedia = await riyan.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
db.data.users[m.sender].limit -= 1
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await riyan.downloadMediaMessage(qmsg)
let encmedia = await riyan.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
db.data.users[m.sender].limit -= 1
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
} catch (e) {
m.reply(mess.error)}
}
break
case 'emoji': {
if (!text) throw 'Mana Emojinya?'
if (!q) return m.reply('emojinya?')
let kukiw = `*Kak ${pushname}*`
let sections = [
{
title: 'Pilih Jenis Emojinya',
rows: [
{title: "Iphone", rowId: `iphoneemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI IPHONE`},
{title: "Google", rowId: `googleemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI GOOGLE`},
{title: "Samsung", rowId: `samsungemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI SAMSUNG`},
{title: "Microsoft", rowId: `microsoftemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI MICROSOFT`},
{title: "Whatsapp", rowId: `whatsappemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI WHATSAPP`},
{title: "Twitter", rowId: `twitteremoji ${text}`, description: `KLIK UNTUK PILIH EMOJI TWITTER`},
{title: "Facebook", rowId: `facebookemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI FACEBOOK`},
{title: "Skype", rowId: `skypeemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI SKYPE`},
{title: "Joy", rowId: `joyemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI JOY`},
{title: "Moji", rowId: `mojiemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI MOJI`},
{title: "Pedia", rowId: `pediaemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI PEDIA`},
{title: "Instagram", rowId: `instagramemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI INSTAGRAM`}
]
}
]
riyan.sendListMsg(m.chat, kukiw, nyoutube, `*${ucapanWaktu}*`, `Touch Me (⁠≧⁠▽⁠≦⁠)`, sections, fkontak)
}
break
case 'iphoneemoji': {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!q) return fakegroup('emojinya?')
db.data.users[m.sender].limit -= 1
m.reply(mess.wait)
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[0].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'googleemoji': {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!q) return fakegroup('emojinya?')
db.data.users[m.sender].limit -= 1
m.reply(mess.wait)
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[1].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'samsungemoji': {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!q) return fakegroup('emojinya?')
db.data.users[m.sender].limit -= 1
m.reply(mess.wait)
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[2].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'microsoftemoji': {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!q) return fakegroup('emojinya?')
db.data.users[m.sender].limit -= 1
m.reply(mess.wait)
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[3].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'whatsappemoji': {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!q) return fakegroup('emojinya?')
db.data.users[m.sender].limit -= 1
m.reply(mess.wait)
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'twitteremoji': {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!q) return fakegroup('emojinya?')
db.data.users[m.sender].limit -= 1
m.reply(mess.wait)
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[5].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'facebookemoji': 
case 'fbemoji': {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!q) return fakegroup('emojinya?')
db.data.users[m.sender].limit -= 1
m.reply(mess.wait)
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[6].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'skypeemoji': {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!q) return fakegroup('emojinya?')
db.data.users[m.sender].limit -= 1
m.reply(mess.wait)
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[7].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'joyemoji': {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!q) return fakegroup('emojinya?')
db.data.users[m.sender].limit -= 1
m.reply(mess.wait)
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[8].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'mojiemoji': {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!q) return fakegroup('emojinya?')
db.data.users[m.sender].limit -= 1
m.reply(mess.wait)
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[9].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'pediaemoji': {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!q) return fakegroup('emojinya?')
db.data.users[m.sender].limit -= 1
m.reply(mess.wait)
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[10].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'igemoji': 
case 'instagramemoji': {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!q) return fakegroup('emojinya?')
db.data.users[m.sender].limit -= 1
m.reply(mess.wait)
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[11].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'emojimix': {
let [emoji1, emoji2] = text.split`+`
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
m.reply(mess.wait)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await riyan.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
db.data.users[m.sender].limit -= 1
}
}
break
case 'emojimix2': {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} 😅`
m.reply(mess.wait)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await riyan.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
db.data.users[m.sender].limit -= 1
}
}
break

case 'smeme': case 'stickermeme': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) throw respond
if (!text) throw respond
m.reply(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let { TelegraPh } = require('./lib/uploader')
let mee = await riyan.downloadAndSaveMediaMessage(qmsg)
let mem = await TelegraPh(mee)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
let awikwok = await riyan.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(awikwok)
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(`Error\nHarus Pakai Gambar!`)
}
}
break     
case 'geturl': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} url/link`
m.reply(mess.wait)
let igmk = await getBuffer(`${text}`)
riyan.sendMessage(m.chat, { image: igmk}, { quoted: ftroli }).catch((err) => m.reply(mess.error))
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.error)}
}
break
case 'toimage': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await riyan.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
riyan.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
db.data.users[m.sender].limit -= 1
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'tomp4': case 'tovideo': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await riyan.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await riyan.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.errmor)}
}
break
case 'toaud': case 'toaudio': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
riyan.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.errmor)}
}
break
case 'tomp3': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
riyan.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${riyan.user.name}.mp3`}, { quoted : m })
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.errmor)}
}
break
case 'tovn': case 'toptt': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
riyan.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.errmor)}
}
break
case 'togif': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await riyan.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await riyan.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.errmor)}
}
break
case 'tourl': {
try {
m.reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await riyan.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
db.data.users[m.sender].limit -= 1
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.errmor)}
}
break
case 'toqr': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw 'No Query Text'
m.reply(mess.wait)
riyan.sendMessage(m.chat, { image: { url: `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${text}` }, caption: `Nih Bro` }, { quoted: m })
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.errmor)}
}
break
case 'removebg': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let remobg = require('remove.bg')
let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
hmm = await './src/remobg-'+getRandom('')
localFile = await riyan.downloadAndSaveMediaMessage(quoted, hmm)
outputFile = await './src/hremo-'+getRandom('.png')
m.reply(mess.wait)
remobg.removeBackgroundFromImageFile({
path: localFile,
apiKey: apinobg,
size: "regular",
type: "auto",
scale: "100%",
outputFile 
}).then(async result => {
riyan.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
await fs.unlinkSync(localFile)
await fs.unlinkSync(outputFile)
db.data.users[m.sender].limit -= 1
})
} catch (e) {
m.reply(mess.errmor)}
}
break
case 'menfess': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (m.isGroup) throw ('fitur tidak dapat digunakan di grup')
if (!text) throw `Example : ${prefix + command} 6282xxxxx|nama samaran|pesan`
m.reply(mess.wait)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: 'Lokasimu', jpegThumbnail: thumb}}}
let mq1 = m1 + '@s.whatsapp.net'
let kawk = ('PESAN RAHASIA')
let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let ments = [mq1, ownernya, me]
let pjtxt = `Pesan Dari : ${m2} \nUntuk : @${mq1.split('@')[0]}\n\n${m3}`
let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '❤LIKE' }, type: 1 }]
await riyan.sendButtonText(m1 + '@s.whatsapp.net', buttons, pjtxt, kawk, m, {mentions: ments, quoted: kafloc})
let akhji = `Pesan Telah Terkirim\nKe @${mq1.split('@')[0]}`
await riyan.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments})
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.error)}
}
break
case 'pinterest3': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!m.isGroup) throw mess.group
m.reply(mess.wait)
let { pinterest } = require('./lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
riyan.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.errmor)}
}
break
case 'waifu': {
tesk = `*${ucapanWaktu} Kak ${pushname}*\n*Silahkan Pilih Dibawah Ini*\n\n_Dosa Tanggung Sendiri :v_`
let buttons = [{buttonId: `menu`, buttonText: {displayText: '📚MENU'}, type: 1},{buttonId: `sfw`, buttonText: {displayText: '✅SFW'}, type: 1}]
await riyan.sendButtonText(m.chat, buttons, tesk, nyoutube, m, {quoted: fkontak})
}
break
case 'sfw': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!m.isGroup) throw mess.group
m.reply(mess.wait)
await axios.get(`https://waifu.pics/api/sfw/waifu`)
.then(({ data }) => {
buffer = getBuffer(data.url)
riyan.sendMessage(m.chat, { image: buffer, caption: `Random Waifu`, footer: nyoutube}, { quoted: m })
db.data.users[m.sender].limit -= 1
})
} catch (e) {
m.reply(mess.error)}
}
break
case 'couple': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
m.reply(mess.wait)
await axios.get('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
.then(({ data }) => {
var random = data[Math.floor(Math.random() * data.length)]
riyan.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
riyan.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
db.data.users[m.sender].limit -= 1
})
} catch (e) {
m.reply(mess.errmor)}
}
break
case 'wallpaper': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!m.isGroup) throw mess.group
if (!text) throw 'Masukkan Query Title'
m.reply(mess.wait)
let { wallpaper } = require('./lib/scraper')
anu = await wallpaper(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image[0] },
caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
footer: nyoutube,
buttons: buttons,
headerType: 4
}
riyan.sendMessage(m.chat, buttonMessage, { quoted: m })
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.errmor)}
}
break
case 'wikipedia': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw 'Masukkan Query Title'
m.reply(mess.wait)
let { wikimedia } = require('./lib/scraper')
anu = await wikimedia(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image },
caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
footer: nyoutube,
buttons: buttons,
headerType: 4
}
riyan.sendMessage(m.chat, buttonMessage, { quoted: m })
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.errmor)}
}
break
case 'tinyurl': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await axios.get(`https://tinyurl.com/api-create.php?url=${text}`)
riyan.sendMessage(m.chat,{ text: anu.data + `\nNih Bro`}, { quoted: fdoc })
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.errmor)}
}
break
case 'linkpoi': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let poi = await fetchJson(`https://linkpoi.ga/api.php?url=${text}`)
riyan.sendMessage(m.chat, { text: poi.shorturl + `\nNih Bro`}, { quoted: fdoc })
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.errmor)}
}
break
            
//Pembatas Primbon========================================
case 'patrick': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
m.reply(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await riyan.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.errmor)}
}
break
case 'dogesticker': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
m.reply(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await riyan.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.errmor)}
}
break
case 'lovesticker': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
m.reply(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await riyan.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.errmor)}
}
break
case 'gurasticker': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
m.reply(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await riyan.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.errmor)}
}
break
case 'paimon': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
m.reply(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/Paimon')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await riyan.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.errmor)}
}
break
case 'animesticker': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
m.reply(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await riyan.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.errmor)}
}
break
case 'mukelu': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
m.reply(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/mukelu')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await riyan.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.errmor)}
}
break
case 'quotesanime': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
m.reply(mess.wait)
let { quotesAnime } = require('./lib/scraper')
let anu = await quotesAnime()
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: `~_${result.quotes}_\n\nBy '${result.karakter}' \n\nAnime : ${result.anime}\n\n- ${result.up_at}`,
footer: nyoutube,
buttons: buttons,
headerType: 2
}
riyan.sendMessage(m.chat, buttonMessage, { quoted: m })
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.errmor)}
}
break
case 'nomorhoki': {
if (!Number(text)) throw `Example : ${prefix + command} 6285822347348`
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return m.reply(anu.message)
riyan.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
}
break
case 'artimimpi': {
if (!text) throw `Example : ${prefix + command} belanja`
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return m.reply(anu.message)
riyan.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
case 'ramaljodoh': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
riyan.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramaljodohbali': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
riyan.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'suamiistri': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
riyan.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalcinta': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
riyan.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'artinama': {
if (!text) throw `Example : ${prefix + command} Dika Ardianta`
let anu = await primbon.arti_nama(text)
if (anu.status == false) return m.reply(anu.message)
riyan.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'cocoknama': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
riyan.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
case 'cocokpasangan': case 'pasangan': {
if (!text) throw `Example : ${prefix + command} Dika|Novia`
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
riyan.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
case 'jadiannikah': {
if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
riyan.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
case 'sifatusaha': {
if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
riyan.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
case 'rejeki': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
riyan.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'pekerjaan': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
riyan.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!text) throw `Example❗:\n${prefix + command} 7,7,2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
riyan.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
case 'arahrejeki': {
if (!text) throw `Example : ${prefix + command} 7,7,2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
riyan.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'peruntungan': {
if (!text) throw `Example : ${prefix + command} DIka,7,7,2005,2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
riyan.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'sifat': {
if (!text) throw `Example : ${prefix + command} Dika, 7,7,2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
riyan.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
case 'keberuntungan': {
if (!text) throw `Example : ${prefix + command} Dika, 7,7,2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
riyan.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
case 'masasubur': {
if (!text) throw `Example : ${prefix + command} 12,1,2022,28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
riyan.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'zodiak': {
if (!text) throw `Example : ${prefix+ command} 7 7 2005`
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])

let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
riyan.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
            
//PEMBATAS Downloads=======================================
case 'mediafire2': {
if (!isPremium) throw mess.premime
if (!text) throw 'Masukkan Query Link!'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return m.reply(`The link you provided is invalid`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
m.reply(`${result4}`)
riyan.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => m.reply(mess.error))
}
break
case 'image': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let { pinterest } = require('./lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
riyan.sendMessage(m.chat, { image: { url: result }, fileLength: jumlah, caption: `Media Url :\n`+result}, { quoted: fkontak })
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.error)}
}
break
case 'ringtone': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} black rover`
m.reply(mess.wait)
let { ringtone } = require('./lib/scraper')
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
riyan.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
db.data.users[m.sender].limit -= 1
} catch (e) {
m.reply(mess.error)}
}
break
case 'playstore': {
try {
if (!isPremium) throw mess.premime
if (!q) throw `Example : ${prefix + command} clash of clans`
m.reply(mess.wait)
if(!q) return m.reply('what are you looking for?')
hx.playstore(q).then(result => {
console.log(result)
let storee = `*「 *PLAY STORE* 」*\n\n`
for (let i of result){
storee += `*「 *PLAY STORE* 」*\n`
storee += `- *Name* : ${i.name}`
storee += `- *Link* : ${i.link}\n`
storee += `- *Dev* : ${i.developer}`
storee += `- *Dev Link* : ${i.link_dev}\n❉─────────────────────❉`
}
m.reply(storee)
})
} catch (e) {
m.reply(mess.errmor)
}
}
break
case 'webtoon': {
try {
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
if (!q) return m.reply('What Are you Looking For??')
await m.reply(mess.wait)
xfar.search.webtoons(q).then(data => {
console.log(data)
let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
for (let i of data) {
txt += `*📫 Title :* ${i.judul}\n`
txt += `*👍🏻 Like :* ${i.like}\n`
txt += `*🤴🏻 Creator :* ${i.creator}\n`
txt += `*🎥 Genre :* ${i.genre}\n`
txt += `*📚 Url :*\n${i.url}\n ----------------------------------------------------------\n`
}
m.reply(txt)
db.data.users[m.sender].limit -= 1
})
} catch (e) {
m.reply(mess.error)}
}
break
//PEMBATAS Menu=======================================
case 'rules': {
rules = `
╭─────────❍ 
│ 
│ *Rules BOT*
│
│ *Intinya Jangan Spam❗*
│ 
│ *Jangan Telpon/VC Bot*❗
│ 
│ *Melanggar Sama Dengan Block/Banned*❗
│
╰────────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'LIST MENU' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 }]
await riyan.sendButtonText(m.chat, buttons, rules, nyoutube, m, {quoted: fkontak})
}
break
case 'menu': {
goblok = fs.readFileSync('./media/sound/menu.mp3')
let msg = await riyan.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted:fvn})
let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let jawab = `*ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُ*\n*${ucapanWaktu}*
╭──────────────────────ᕗ
│  「 𝙄𝙉𝘿𝙊𝙉𝙀𝙎𝙄𝘼 」
╰──────────────────────ᕗ
├  Ulang Tahun Owner : @${ownernya.split('@')[0]}\n├  *${menuju}*
├  Hari Ini          :\n├ *${hariini}*
├  Wib               : ${barat} WIB
├  Wita              : ${tengah} WITA
├  Wit               : ${timur} WIT
╰──┬───────────────────ᕗ
┌──┤───────────────────ᕗ
│  「 𝙔𝙐𝙈𝙄𝙆𝙊 𝘽𝙈𝘿 」
╰──────────────────────ᕗ
├  Nama        : ${botname}
├  Mode        : ${riyan.public ? 'Public' : `Self`}
├  Prefix      :「 MULTI-PREFIX 」
├  Api From    : https://api.lolhuman.xyz/
├  Language    : Javascript
├  Lib         : Baileys-md
├  Time Server : ${runtime(process.uptime())}
├  Total Hit   : ${jumlahcmd}
├  Total Hit Today  : ${jumlahharian}
├  Onwer       : @${ownernya.split('@')[0]}
╰──┬───────────────────ᕗ
┌──┤───────────────────ᕗ
│  「 𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍 」
╰──────────────────────ᕗ
├  Nama             : ${pushname}
├  Number           : @${me.split('@')[0]}
├  Premium          : ${isPremium ? 'Yes' : `No`}
├  Mode             : ${riyan.public ? 'Public' : `Self`}
├  Prefix           :「 MULTI-PREFIX 」
├  Limit            : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
╰──────────────────────ᕗ`
            let ments = [ownernya, me, ini_mark]
            let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'LIST MENU' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'RULES BOT' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 }]
            let buttonMessage = {
  document: fs.readFileSync('./media/doc/fake.pptx'),
  fileName : akulaku + (` | Halo ${pushname}`),
  mimetype: `${filsk}`,
  fileLength: jumhal,
  pageCount: jumlha,
  caption: jawab,
  footer: nyoutube,
  buttons: buttons,
  mentions: ments,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Riyan Sipayung',
  body: 'Subscribe My YouTube', 
  showAdAttribution: true,
  thumbnail: thumb,
  mediaType: 2,
  mediaUrl: myytv,
  sourceUrl: myyt
  }}
  }
  riyan.sendMessage(m.chat, buttonMessage, {quoted: fkontak})
  }
 break
case 'simplemenu': case 'list': case 'help': {
goblok = fs.readFileSync('./media/sound/menu.mp3')
let msg = await riyan.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted:fvn})
let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let ments = [ownernya, me, ini_mark]
let kukiw = `*ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُ*\n*${ucapanWaktu}*
╭──────────────────────ᕗ
│  「 𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍 」
╰──────────────────────ᕗ
├  Nama    : ${pushname}
├  Number  : @${me.split('@')[0]}
├  Premium : ${isPremium ? 'Yes' : `No`}
├  Limit   : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
╰──┬───────────────────ᕗ
┌──┤───────────────────ᕗ
│  「 𝙄𝙉𝘿𝙊𝙉𝙀𝙎𝙄𝘼 」
╰──────────────────────ᕗ
├  Ulang Tahun Owner : @${ownernya.split('@')[0]}\n├  *${menuju}*
├  Hari Ini          :\n├ *${hariini}*
├  Wib               : ${barat} WIB
├  Wita              : ${tengah} WITA
├  Wit               : ${timur} WIT
╰──────────────────────ᕗ`
                let sections = [
                {
	           title: ' ∫ » Sewa Bot? –––––––·•',
	           rows: [
	            {title: "〽️ • Sewa", rowId: `donasi`, description: `KLIK UNTUK SEWA BOT`},
                {title: "⚜️ • Owner", rowId: `owner`, description: `KLIK UNTUK BERTANYA KEPADA OWNER`}
	            ]
                },{
                title: "⚠︎  ∫ » CHANGE MENU BOT « ✧",
                rows: [
                {title: "✦  「 Group 」", rowId: `mgroup`, description: `╰ ► FITUR DIDALAM GRUP`},
                {title: "✦  「 Islami 」", rowId: `mislami`, description: `╰ ► ALLAH SWT AKAN SELALU MENGINGAT HAMBA NYA BILA KAMU INGAT KEPADANYA`},
                {title: "✦  「 Downloader 」", rowId: `mdownloader`, description: `╰ ► FITUR DOWNLOADER`},
                {title: "✦  「 Search 」", rowId: `msearch`, description: `╰ ► FITUR SEARCH / PENCARIAN`},
                {title: "✦  「 Random 」", rowId: `mrandom`, description: `╰ ► DISAAT KAMU GABUT MAKA INI LAH SOLUSINYA :V`},
                {title: "✦  「 Info Jadwal Dll 」", rowId: `minfo`, description: `╰ ► FITUR ALL INFO`},
                {title: "✦  「 Anime 」", rowId: `manime`, description: `╰ ► IH WIBU :V`},
                {title: "✦  「 Cerpen Dll 」", rowId: `mcerita`, description: `╰ ► FITUR CERPEN DLL`},
                {title: "✦  「 Fun 」", rowId: `mfun`, description: `╰ ► FITUR HAVE FUN AJA,DIDALAM ADA FITUR MENFESS NYA`},
                {title: "✦  「 Primbon 」", rowId: `mprimbon`, description: `╰ ► PRIMBON 70% MUNGKIN KENYATAAN`},
                {title: "✦  「 Convert 」", rowId: `mconvert`, description: `╰ ► FITUR CONVERTER`},
                {title: "✦  「 Main 」", rowId: `mmain`, description: `╰ ► CHEK AJA SENDIRI KAK 😅`},
                {title: "✦  「 Sticker 」", rowId: `msticker`, description: `╰ ► MENCARI STICKER DISINI TEMPATNYA`},
                {title: "✦  「 Owner 」", rowId: `mowner`, description: `╰ ► FITUR KHUSUS OWNER ❤️`},
                {title: "✦  「 User Premium 」", rowId: `mpremium`, description: `╰ ► KHUSUS PENGGUNA PREMIUM`},
                {title: "✦  「 THANK YOU 」", rowId: `mtqto`, description: `╰ ► THANK YOU FOR ❤️`}
                ]
                },{
	           title: ' ∫ » SUPPORT ME –––––––·•',
	           rows: [
	            {title: "🎟 • Donasi", rowId: `donasi`, description: `╰ ► 💰 Donasi ♕︎`},
                {title: "📌 Jangan Lupa Follow Instagram Owner", rowId: `follig`, description: `╰ ► 📢 THANKS FOLLOW INSTAGRAM MY OWNER ♕︎`}
	]
  },
]
                riyan.sendListMsg(m.chat, kukiw, nyoutube, `*Hello Kak ${pushname}*`, `Klick Disini 👈`, sections, fkontak)
            }
            break
            case 'mgroup': {
goup = `
╭──❍ *Group Menu*
│
│⭔ ${prefix}linkgroup [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}ephemeral [option] [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}setppgc [image] [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}setnamegc [text] [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}setdescgc [text] [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}group [option] [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}editinfo [option] [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}add @user [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}kick @user [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}hidetag [text] [Bot Harus Menjadi Admin ]
│⭔ ${prefix}tagall [text] [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}tagme
│⭔ ${prefix}totag
│⭔ ${prefix}antilink [on/off] [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}mute [on/off] [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}promote @user [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}demote @user [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}vote [text]
│⭔ ${prefix}devote
│⭔ ${prefix}upvote
│⭔ ${prefix}cekvote
│⭔ ${prefix}hapusvote
│⭔ ${prefix}revoke [ Bot Harus Menjadi Admin ]
│
╰──❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'LIST MENU' }, type: 1 },{ buttonId: 'reportfitur', buttonText: { displayText: 'REPORT BUG FITUR' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 }]
            await riyan.sendButtonText(m.chat, buttons, goup, nyoutube, m, {quoted: fkontak})
            }
            break
      case 'mislami': {
wislam = `
╭──❍ *Islami Menu*
│
│⭔ ${prefix}listsurah
│⭔ ${prefix}alquran
│⭔ ${prefix}alquranaudio
│⭔ ${prefix}asmaulhusna
│⭔ ${prefix}kisahnabi
│⭔ ${prefix}jadwalsholat
│
╰──❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'LIST MENU' }, type: 1 },{ buttonId: 'reportfitur', buttonText: { displayText: 'REPORT BUG FITUR' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 }]
            await riyan.sendButtonText(m.chat, buttons, wislam, nyoutube, m, {quoted: fkontak})
            }
            break
case 'mdownloader': {
dwnloader = `
╭──❍ *Downloader Menu*
│
│⭔ ${prefix}apkdownload [text]
│⭔ ${prefix}playstore [query] [ Premium ]
│⭔ ${prefix}cocofun [url]
│⭔ ${prefix}facebook [url]
│⭔ ${prefix}instagram [url]
│⭔ ${prefix}igdl2 [url] [ Premium ]
│⭔ ${prefix}jooxplay [url]
│⭔ ${prefix}mediafire [url]
│⭔ ${prefix}mediafire2 [url]
│⭔ ${prefix}pinterest [text]
│⭔ ${prefix}pinterest2 [text] [ Premium ]
│⭔ ${prefix}pinterest3 [text] [ Group ]
│⭔ ${prefix}spotify [url] [ Premium ]
│⭔ ${prefix}tiktok [url]
│⭔ ${prefix}tiktoknowm [url] [ Premium ]
│⭔ ${prefix}tiktokmp3 [url]
│⭔ ${prefix}ytmp3 [url]
│⭔ ${prefix}ytmp4 [url]
│⭔ ${prefix}soundcloud [url]
│
╰──❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'LIST MENU' }, type: 1 },{ buttonId: 'reportfitur', buttonText: { displayText: 'REPORT BUG FITUR' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 }]
            await riyan.sendButtonText(m.chat, buttons, dwnloader, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'msearch': {
sarch = `
╭──❍ *Search Menu*
│
│⭔ ${prefix}play [query]
│⭔ ${prefix}yts [query] [ Premium ]
│⭔ ${prefix}google [query]
│⭔ ${prefix}gimage [query]
│⭔ ${prefix}gimage2 [query] [ Premium ]
│⭔ ${prefix}wallpaper [query]
│⭔ ${prefix}wikipedia [query]
│⭔ ${prefix}ringtone [query]
│
╰──❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'LIST MENU' }, type: 1 },{ buttonId: 'reportfitur', buttonText: { displayText: 'REPORT BUG FITUR' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 }]
            await riyan.sendButtonText(m.chat, buttons, sarch, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mrandom': {
rndom = `
╭──❍ *Random Menu*
│
│⭔ ${prefix}gbtku [ Premium ]
│⭔ ${prefix}jodohku [ Group ]
│⭔ ${prefix}jadian [ Group ]
│⭔ ${prefix}bisakah
│⭔ ${prefix}apakah
│⭔ ${prefix}kapankah
│⭔ ${prefix}cekmati
│⭔ ${prefix}cintaku
│⭔ ${prefix}dadu
│⭔ ${prefix}gantengcek
│⭔ ${prefix}cantikcek
│⭔ ${prefix}rate
│⭔ ${prefix}tanyakerang
│⭔ ${prefix}fitnah
│
╰──❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'LIST MENU' }, type: 1 },{ buttonId: 'reportfitur', buttonText: { displayText: 'REPORT BUG FITUR' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 }]
            await riyan.sendButtonText(m.chat, buttons, rndom, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'minfo': {
minfo = `
╭──❍ *Info Menu*
│
│⭔ ${prefix}jadwalbola [query]
│⭔ ${prefix}jadwaltv [query]
│⭔ ${prefix}jadwaltvnow [query] [ Premium ]
│⭔ ${prefix}chord [query] [ Premium ]
│⭔ ${prefix}translate [query] [ Premium ]
│⭔ ${prefix}infocuaca [query]
│⭔ ${prefix}brainly [query]
│⭔ ${prefix}kbbi [query] [ Premium ]
│⭔ ${prefix}gcsearch [query] [ Premium ]
│⭔ ${prefix}film [query] [ Premium ]
│⭔ ${prefix}lk21 [query] [ Premium ]
│
╰──❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'LIST MENU' }, type: 1 },{ buttonId: 'reportfitur', buttonText: { displayText: 'REPORT BUG FITUR' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 }]
            await riyan.sendButtonText(m.chat, buttons, minfo, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'manime': {
anim = `
╭──❍ *Anime Menu*
│
│⭔ ${prefix}animemanga [query]
│⭔ ${prefix}character [query] [ Premium ]
│⭔ ${prefix}wattpadsearch [query] [ Premium ]
│⭔ ${prefix}webtoon [query]
│⭔ ${prefix}quotesanime
│⭔ ${prefix}waifu [Group]
│
╰──❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'LIST MENU' }, type: 1 },{ buttonId: 'reportfitur', buttonText: { displayText: 'REPORT BUG FITUR' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 }]
            await riyan.sendButtonText(m.chat, buttons, anim, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mcerita': {
cerit = `
╭──❍ *Cerita Menu*
│
│⭔ ${prefix}cerpenrandom
│⭔ ${prefix}ceritahoror
│
╰──❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'LIST MENU' }, type: 1 },{ buttonId: 'reportfitur', buttonText: { displayText: 'REPORT BUG FITUR' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 }]
            await riyan.sendButtonText(m.chat, buttons, cerit, nyoutube, m, {quoted: fkontak})
            }
            break
           case 'mfun': {
mun = `
╭──❍ *Fun Menu*
│
│⭔ ${prefix}couple
│⭔ ${prefix}menfess
│⭔ ${prefix}tebakmenu
│⭔ ${prefix}halah
│⭔ ${prefix}hilih
│⭔ ${prefix}huluh
│⭔ ${prefix}heleh
│⭔ ${prefix}holoh
│⭔ ${prefix}afk
│⭔ ${prefix}tictactoe
│⭔ ${prefix}suitpvp
│⭔ ${prefix}family100
│⭔ ${prefix}kuismath
│⭔ ${prefix}image
│⭔ ${prefix}mukelu
│
╰──❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'LIST MENU' }, type: 1 },{ buttonId: 'reportfitur', buttonText: { displayText: 'REPORT BUG FITUR' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 }]
            await riyan.sendButtonText(m.chat, buttons, mun, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mprimbon': {
pimbon = `
╭──❍ *Primbon Menu*
│
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}cocokpasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rejeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}ramalnasib
│⭔ ${prefix}sifat
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│
╰──❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'LIST MENU' }, type: 1 },{ buttonId: 'reportfitur', buttonText: { displayText: 'REPORT BUG FITUR' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 }]
            await riyan.sendButtonText(m.chat, buttons, pimbon, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mconvert': {
cnvert = `
╭──❍ *Convert Menu*
│
│⭔ ${prefix}attp
│⭔ ${prefix}attp2 [ Premium ]
│⭔ ${prefix}tts
│⭔ ${prefix}toimage
│⭔ ${prefix}removebg
│⭔ ${prefix}sticker / s
│⭔ ${prefix}swm / stickerwm
│⭔ ${prefix}emojimix
│⭔ ${prefix}emojimix2
│⭔ ${prefix}tovideo
│⭔ ${prefix}togif
│⭔ ${prefix}tourl
│⭔ ${prefix}tovn
│⭔ ${prefix}tomp3
│⭔ ${prefix}toqr
│⭔ ${prefix}toaudio
│⭔ ${prefix}ebinary
│⭔ ${prefix}dbinary
│⭔ ${prefix}styletext
│⭔ ${prefix}smeme
│⭔ ${prefix}emoji
│⭔ ${prefix}tinyurl
│⭔ ${prefix}linkpoi
│
╰──❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'LIST MENU' }, type: 1 },{ buttonId: 'reportfitur', buttonText: { displayText: 'REPORT BUG FITUR' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 }]
            await riyan.sendButtonText(m.chat, buttons, cnvert, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mmain': {
min = `
╭──❍ *Main Menu*
│
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}reportfitur
│⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│⭔ ${prefix}delete
│⭔ ${prefix}infochat
│⭔ ${prefix}donasi / ${prefix}buypremium / ${prefix}sewa
│⭔ ${prefix}sc
│⭔ ${prefix}follig
│⭔ ${prefix}checklimit
│⭔ ${prefix}runtime
│⭔ ${prefix}reqfitur
│
╰──❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'LIST MENU' }, type: 1 },{ buttonId: 'reportfitur', buttonText: { displayText: 'REPORT BUG FITUR' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 }]
            await riyan.sendButtonText(m.chat, buttons, min, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'msticker': {
stick = `
╭──❍ *Sticker Menu*
│
│⭔ ${prefix}patrick
│⭔ ${prefix}dogesticker
│⭔ ${prefix}lovesticker
│⭔ ${prefix}gurasticker
│⭔ ${prefix}paimon
│⭔ ${prefix}animesticker
│
╰──❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'LIST MENU' }, type: 1 },{ buttonId: 'reportfitur', buttonText: { displayText: 'REPORT BUG FITUR' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 }]
            await riyan.sendButtonText(m.chat, buttons, stick, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mowner': {
sayang = `
╭──❍ *Owner Menu*
│
│⭔ ${prefix}chat
│⭔ ${prefix}poll
│⭔ ${prefix}myip
│⭔ ${prefix}totalhit
│⭔ ${prefix}react
│⭔ ${prefix}leave
│⭔ ${prefix}block
│⭔ ${prefix}unblock
│⭔ ${prefix}addprem
│⭔ ${prefix}delprem
│⭔ ${prefix}listprem
│⭔ ${prefix}setppbot
│⭔ ${prefix}bcgc
│⭔ ${prefix}broadcast
│⭔ ${prefix}listpc
│⭔ ${prefix}listgc
│⭔ ${prefix}listonline
│⭔ ${prefix}public
│⭔ ${prefix}self
│⭔ ${prefix}speedtest
│
╰──❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'LIST MENU' }, type: 1 },{ buttonId: 'reportfitur', buttonText: { displayText: 'REPORT BUG FITUR' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 }]
            await riyan.sendButtonText(m.chat, buttons, sayang, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mpremium': {
meri = `
╭──❍ *Spesial User Premium*
│
│⭔ ${prefix}join
│⭔ ${prefix}sound1
│⭔ ${prefix}sound2
│⭔ ${prefix}sound3
│⭔ ${prefix}sound4
│⭔ ${prefix}sound5
│⭔ ${prefix}sound6
│⭔ ${prefix}sound7
│⭔ ${prefix}sound8
│⭔ ${prefix}sound9
│⭔ ${prefix}sound10
│⭔ ${prefix}sound11
│⭔ ${prefix}sound12
│⭔ ${prefix}sound13
│⭔ ${prefix}sound14
│⭔ ${prefix}sound15
│⭔ ${prefix}sound16
│⭔ ${prefix}sound17
│⭔ ${prefix}sound18
│⭔ ${prefix}sound19
│⭔ ${prefix}sound20
│⭔ ${prefix}sound21
│⭔ ${prefix}sound22
│⭔ ${prefix}sound23
│⭔ ${prefix}sound24
│⭔ ${prefix}sound25
│⭔ ${prefix}sound26
│⭔ ${prefix}sound27
│⭔ ${prefix}sound28
│⭔ ${prefix}sound29
│⭔ ${prefix}sound30
│⭔ ${prefix}sound31
│⭔ ${prefix}sound32
│⭔ ${prefix}sound33
│⭔ ${prefix}sound34
│⭔ ${prefix}sound35
│⭔ ${prefix}sound36
│⭔ ${prefix}sound37
│⭔ ${prefix}sound38
│⭔ ${prefix}sound39
│⭔ ${prefix}sound40
│⭔ ${prefix}sound41
│⭔ ${prefix}sound42
│⭔ ${prefix}sound43
│⭔ ${prefix}sound44
│⭔ ${prefix}sound45
│⭔ ${prefix}sound46
│⭔ ${prefix}sound47
│⭔ ${prefix}sound48
│⭔ ${prefix}sound49
│⭔ ${prefix}sound50
│⭔ ${prefix}sound51
│⭔ ${prefix}sound52
│⭔ ${prefix}sound53
│⭔ ${prefix}sound54
│⭔ ${prefix}sound55
│⭔ ${prefix}sound56
│⭔ ${prefix}sound57
│⭔ ${prefix}sound58
│⭔ ${prefix}sound59
│⭔ ${prefix}sound60
│⭔ ${prefix}sound61
│⭔ ${prefix}sound62
│⭔ ${prefix}sound63
│⭔ ${prefix}sound64
│⭔ ${prefix}sound65
│⭔ ${prefix}sound66
│⭔ ${prefix}sound67
│⭔ ${prefix}sound68
│⭔ ${prefix}sound69
│⭔ ${prefix}sound70
│⭔ ${prefix}sound71
│⭔ ${prefix}sound72
│⭔ ${prefix}sound73
│⭔ ${prefix}sound74
│⭔ ${prefix}sound75
│⭔ ${prefix}sound76
│⭔ ${prefix}sound77
│⭔ ${prefix}sound78
│⭔ ${prefix}sound79
│⭔ ${prefix}sound80
│⭔ ${prefix}sound81
│⭔ ${prefix}sound82
│⭔ ${prefix}sound83
│⭔ ${prefix}sound84
│⭔ ${prefix}sound85
│⭔ ${prefix}sound86
│⭔ ${prefix}sound87
│⭔ ${prefix}sound88
│⭔ ${prefix}sound89
│⭔ ${prefix}sound90
│⭔ ${prefix}sound91
│⭔ ${prefix}sound92
│⭔ ${prefix}sound93
│⭔ ${prefix}sound94
│⭔ ${prefix}sound95
│⭔ ${prefix}sound96
│⭔ ${prefix}sound97
│⭔ ${prefix}sound98
│⭔ ${prefix}sound99
│⭔ ${prefix}sound100
│⭔ ${prefix}sound101
│⭔ ${prefix}sound102
│⭔ ${prefix}sound103
│⭔ ${prefix}sound104
│⭔ ${prefix}sound105
│⭔ ${prefix}sound106
│⭔ ${prefix}sound107
│⭔ ${prefix}sound108
│⭔ ${prefix}sound109
│⭔ ${prefix}sound110
│⭔ ${prefix}sound111
│⭔ ${prefix}sound112
│⭔ ${prefix}sound113
│⭔ ${prefix}sound114
│⭔ ${prefix}sound115
│⭔ ${prefix}sound116
│⭔ ${prefix}sound117
│⭔ ${prefix}sound118
│⭔ ${prefix}sound119
│⭔ ${prefix}sound120
│⭔ ${prefix}sound121
│⭔ ${prefix}sound122
│⭔ ${prefix}sound123
│⭔ ${prefix}sound124
│⭔ ${prefix}sound125
│⭔ ${prefix}sound126
│⭔ ${prefix}sound127
│⭔ ${prefix}sound128
│⭔ ${prefix}sound129
│⭔ ${prefix}sound130
│⭔ ${prefix}sound131
│⭔ ${prefix}sound132
│⭔ ${prefix}sound133
│⭔ ${prefix}sound134
│⭔ ${prefix}sound135
│⭔ ${prefix}sound136
│⭔ ${prefix}sound137
│⭔ ${prefix}sound138
│⭔ ${prefix}sound139
│⭔ ${prefix}sound140
│⭔ ${prefix}sound141
│⭔ ${prefix}sound142
│⭔ ${prefix}sound143
│⭔ ${prefix}sound144
│⭔ ${prefix}sound145
│⭔ ${prefix}sound146
│⭔ ${prefix}sound147
│⭔ ${prefix}sound148
│⭔ ${prefix}sound149
│⭔ ${prefix}sound150
│⭔ ${prefix}sound151
│⭔ ${prefix}sound152
│⭔ ${prefix}sound153
│⭔ ${prefix}sound154
│⭔ ${prefix}sound155
│⭔ ${prefix}sound156
│⭔ ${prefix}sound157
│⭔ ${prefix}sound158
│⭔ ${prefix}sound159
│⭔ ${prefix}sound160
│⭔ ${prefix}sound161
│
╰──❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'LIST MENU' }, type: 1 },{ buttonId: 'reportfitur', buttonText: { displayText: 'REPORT BUG FITUR' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 }]
            await riyan.sendButtonText(m.chat, buttons, meri, nyoutube, m, {quoted: fkontak})
            }
            break
case 'mtqto': {
tasya = `
╭──❍ *Thank You To*
│
│⭔ Penyedia Api Key : Lol Human
│⭔ Penyedia Base : Dika Ardnt
│⭔ Penyedia Baileys :@adiwajshing/baileys
│
│⭔ Support By :
│⭔ Allah SWT
│⭔ Nabi Muhammad Saw
│⭔ Kedua Orang Tua
│⭔ Istri Tercinta
│
╰──❍
_Silahkan Donasi Kak_\n_Biar Owner Lebih Semangat Lagi_`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'LIST MENU' }, type: 1 },{ buttonId: 'reportfitur', buttonText: { displayText: 'REPORT BUG FITUR' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 }]
            await riyan.sendButtonText(m.chat, buttons, tasya, nyoutube, m, {quoted: fkontak})
            }
            break
case 'allmenu': {
goblok = fs.readFileSync('./media/sound/menu.mp3')
let msg = await riyan.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted:fvn})
let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let ments = [ownernya, me, ini_mark]
anu = ` ∫ » *${ucapanWaktu}* « ✧\n⚠︎ *kak @${me.split('@')[0]}*\n♕︎ *Powered : @${ini_mark.split('@')[0]}*\n ∫ » *Creator : @${ownernya.split('@')[0]}*
╭──❍ *Group Menu*
│
│⭔ ${prefix}linkgroup [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}ephemeral [option] [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}setppgc [image] [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}setnamegc [text] [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}setdescgc [text] [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}group [option] [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}editinfo [option] [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}add @user [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}kick @user [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}hidetag [text] [Bot Harus Menjadi Admin ]
│⭔ ${prefix}tagall [text] [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}tagme
│⭔ ${prefix}totag
│⭔ ${prefix}antilink [on/off] [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}mute [on/off] [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}promote @user [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}demote @user [ Bot Harus Menjadi Admin ]
│⭔ ${prefix}vote [text]
│⭔ ${prefix}devote
│⭔ ${prefix}upvote
│⭔ ${prefix}cekvote
│⭔ ${prefix}hapusvote
│⭔ ${prefix}revoke [ Bot Harus Menjadi Admin ]
│
╰──❍
╭──❍ *Islami Menu*
│
│⭔ ${prefix}listsurah
│⭔ ${prefix}alquran
│⭔ ${prefix}alquranaudio
│⭔ ${prefix}asmaulhusna
│⭔ ${prefix}kisahnabi
│⭔ ${prefix}jadwalsholat
│
╰──❍
╭──❍ *Downloader Menu*
│
│⭔ ${prefix}apkdownload [text]
│⭔ ${prefix}playstore [query] [ Premium ]
│⭔ ${prefix}cocofun [url]
│⭔ ${prefix}facebook [url]
│⭔ ${prefix}instagram [url]
│⭔ ${prefix}igdl2 [url] [ Premium ]
│⭔ ${prefix}jooxplay [url]
│⭔ ${prefix}mediafire [url]
│⭔ ${prefix}mediafire2 [url]
│⭔ ${prefix}pinterest [text]
│⭔ ${prefix}pinterest2 [text] [ Premium ]
│⭔ ${prefix}pinterest3 [text] [ Group ]
│⭔ ${prefix}spotify [url] [ Premium ]
│⭔ ${prefix}tiktok [url]
│⭔ ${prefix}tiktoknowm [url] [ Premium ]
│⭔ ${prefix}tiktokmp3 [url]
│⭔ ${prefix}ytmp3 [url]
│⭔ ${prefix}ytmp4 [url]
│⭔ ${prefix}soundcloud [url]
│
╰──❍
╭──❍ *Search Menu*
│
│⭔ ${prefix}play [query]
│⭔ ${prefix}yts [query] [ Premium ]
│⭔ ${prefix}google [query]
│⭔ ${prefix}gimage [query]
│⭔ ${prefix}gimage2 [query] [ Premium ]
│⭔ ${prefix}wallpaper [query]
│⭔ ${prefix}wikipedia [query]
│⭔ ${prefix}ringtone [query]
│
╰──❍
╭──❍ *Random Menu*
│
│⭔ ${prefix}gbtku [ Premium ]
│⭔ ${prefix}jodohku [ Group ]
│⭔ ${prefix}jadian [ Group ]
│⭔ ${prefix}bisakah
│⭔ ${prefix}apakah
│⭔ ${prefix}kapankah
│⭔ ${prefix}cekmati
│⭔ ${prefix}cintaku
│⭔ ${prefix}dadu
│⭔ ${prefix}gantengcek
│⭔ ${prefix}cantikcek
│⭔ ${prefix}rate
│⭔ ${prefix}tanyakerang
│⭔ ${prefix}fitnah
│
╰──❍
╭──❍ *Info Menu*
│
│⭔ ${prefix}jadwalbola [query]
│⭔ ${prefix}jadwaltv [query]
│⭔ ${prefix}jadwaltvnow [query] [ Premium ]
│⭔ ${prefix}chord [query] [ Premium ]
│⭔ ${prefix}translate [query] [ Premium ]
│⭔ ${prefix}infocuaca [query]
│⭔ ${prefix}brainly [query]
│⭔ ${prefix}kbbi [query] [ Premium ]
│⭔ ${prefix}gcsearch [query] [ Premium ]
│⭔ ${prefix}film [query] [ Premium ]
│⭔ ${prefix}lk21 [query] [ Premium ]
│
╰──❍
╭──❍ *Anime Menu*
│
│⭔ ${prefix}animemanga [query]
│⭔ ${prefix}character [query] [ Premium ]
│⭔ ${prefix}wattpadsearch [query] [ Premium ]
│⭔ ${prefix}webtoon [query]
│⭔ ${prefix}quotesanime
│⭔ ${prefix}waifu [Group]
│
╰──❍
╭──❍ *Cerita Menu*
│
│⭔ ${prefix}cerpenrandom
│⭔ ${prefix}ceritahoror
│
╰──❍
╭──❍ *Fun Menu*
│
│⭔ ${prefix}couple
│⭔ ${prefix}menfess
│⭔ ${prefix}tebakmenu
│⭔ ${prefix}halah
│⭔ ${prefix}hilih
│⭔ ${prefix}huluh
│⭔ ${prefix}heleh
│⭔ ${prefix}holoh
│⭔ ${prefix}afk
│⭔ ${prefix}tictactoe
│⭔ ${prefix}suitpvp
│⭔ ${prefix}family100
│⭔ ${prefix}kuismath
│⭔ ${prefix}image
│⭔ ${prefix}mukelu
│
╰──❍
╭──❍ *Primbon Menu*
│
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}cocokpasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rejeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}ramalnasib
│⭔ ${prefix}sifat
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│
╰──❍
╭──❍ *Convert Menu*
│
│⭔ ${prefix}attp
│⭔ ${prefix}attp2 [ Premium ]
│⭔ ${prefix}tts
│⭔ ${prefix}toimage
│⭔ ${prefix}removebg
│⭔ ${prefix}sticker / s
│⭔ ${prefix}swm / stickerwm
│⭔ ${prefix}emojimix
│⭔ ${prefix}emojimix2
│⭔ ${prefix}tovideo
│⭔ ${prefix}togif
│⭔ ${prefix}tourl
│⭔ ${prefix}tovn
│⭔ ${prefix}tomp3
│⭔ ${prefix}toqr
│⭔ ${prefix}toaudio
│⭔ ${prefix}ebinary
│⭔ ${prefix}dbinary
│⭔ ${prefix}styletext
│⭔ ${prefix}smeme
│⭔ ${prefix}emoji
│⭔ ${prefix}tinyurl
│⭔ ${prefix}linkpoi
│
╰──❍
╭──❍ *Main Menu*
│
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}reportfitur
│⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│⭔ ${prefix}delete
│⭔ ${prefix}infochat
│⭔ ${prefix}donasi / ${prefix}buypremium / ${prefix}sewa
│⭔ ${prefix}sc
│⭔ ${prefix}follig
│⭔ ${prefix}checklimit
│⭔ ${prefix}runtime
│⭔ ${prefix}reqfitur
│
╰──❍
╭──❍ *Sticker Menu*
│
│⭔ ${prefix}patrick
│⭔ ${prefix}dogesticker
│⭔ ${prefix}lovesticker
│⭔ ${prefix}gurasticker
│⭔ ${prefix}paimon
│⭔ ${prefix}animesticker
│
╰──❍
╭──❍ *Owner Menu*
│
│⭔ ${prefix}chat
│⭔ ${prefix}poll
│⭔ ${prefix}myip
│⭔ ${prefix}totalhit
│⭔ ${prefix}react
│⭔ ${prefix}leave
│⭔ ${prefix}block
│⭔ ${prefix}unblock
│⭔ ${prefix}addprem
│⭔ ${prefix}delprem
│⭔ ${prefix}listprem
│⭔ ${prefix}setppbot
│⭔ ${prefix}bcgc
│⭔ ${prefix}broadcast
│⭔ ${prefix}listpc
│⭔ ${prefix}listgc
│⭔ ${prefix}listonline
│⭔ ${prefix}public
│⭔ ${prefix}self
│⭔ ${prefix}speedtest
│
╰──❍
╭──❍ *Spesial User Premium*
│
│⭔ ${prefix}join
│⭔ ${prefix}sound1
│⭔ ${prefix}sound2
│⭔ ${prefix}sound3
│⭔ ${prefix}sound4
│⭔ ${prefix}sound5
│⭔ ${prefix}sound6
│⭔ ${prefix}sound7
│⭔ ${prefix}sound8
│⭔ ${prefix}sound9
│⭔ ${prefix}sound10
│⭔ ${prefix}sound11
│⭔ ${prefix}sound12
│⭔ ${prefix}sound13
│⭔ ${prefix}sound14
│⭔ ${prefix}sound15
│⭔ ${prefix}sound16
│⭔ ${prefix}sound17
│⭔ ${prefix}sound18
│⭔ ${prefix}sound19
│⭔ ${prefix}sound20
│⭔ ${prefix}sound21
│⭔ ${prefix}sound22
│⭔ ${prefix}sound23
│⭔ ${prefix}sound24
│⭔ ${prefix}sound25
│⭔ ${prefix}sound26
│⭔ ${prefix}sound27
│⭔ ${prefix}sound28
│⭔ ${prefix}sound29
│⭔ ${prefix}sound30
│⭔ ${prefix}sound31
│⭔ ${prefix}sound32
│⭔ ${prefix}sound33
│⭔ ${prefix}sound34
│⭔ ${prefix}sound35
│⭔ ${prefix}sound36
│⭔ ${prefix}sound37
│⭔ ${prefix}sound38
│⭔ ${prefix}sound39
│⭔ ${prefix}sound40
│⭔ ${prefix}sound41
│⭔ ${prefix}sound42
│⭔ ${prefix}sound43
│⭔ ${prefix}sound44
│⭔ ${prefix}sound45
│⭔ ${prefix}sound46
│⭔ ${prefix}sound47
│⭔ ${prefix}sound48
│⭔ ${prefix}sound49
│⭔ ${prefix}sound50
│⭔ ${prefix}sound51
│⭔ ${prefix}sound52
│⭔ ${prefix}sound53
│⭔ ${prefix}sound54
│⭔ ${prefix}sound55
│⭔ ${prefix}sound56
│⭔ ${prefix}sound57
│⭔ ${prefix}sound58
│⭔ ${prefix}sound59
│⭔ ${prefix}sound60
│⭔ ${prefix}sound61
│⭔ ${prefix}sound62
│⭔ ${prefix}sound63
│⭔ ${prefix}sound64
│⭔ ${prefix}sound65
│⭔ ${prefix}sound66
│⭔ ${prefix}sound67
│⭔ ${prefix}sound68
│⭔ ${prefix}sound69
│⭔ ${prefix}sound70
│⭔ ${prefix}sound71
│⭔ ${prefix}sound72
│⭔ ${prefix}sound73
│⭔ ${prefix}sound74
│⭔ ${prefix}sound75
│⭔ ${prefix}sound76
│⭔ ${prefix}sound77
│⭔ ${prefix}sound78
│⭔ ${prefix}sound79
│⭔ ${prefix}sound80
│⭔ ${prefix}sound81
│⭔ ${prefix}sound82
│⭔ ${prefix}sound83
│⭔ ${prefix}sound84
│⭔ ${prefix}sound85
│⭔ ${prefix}sound86
│⭔ ${prefix}sound87
│⭔ ${prefix}sound88
│⭔ ${prefix}sound89
│⭔ ${prefix}sound90
│⭔ ${prefix}sound91
│⭔ ${prefix}sound92
│⭔ ${prefix}sound93
│⭔ ${prefix}sound94
│⭔ ${prefix}sound95
│⭔ ${prefix}sound96
│⭔ ${prefix}sound97
│⭔ ${prefix}sound98
│⭔ ${prefix}sound99
│⭔ ${prefix}sound100
│⭔ ${prefix}sound101
│⭔ ${prefix}sound102
│⭔ ${prefix}sound103
│⭔ ${prefix}sound104
│⭔ ${prefix}sound105
│⭔ ${prefix}sound106
│⭔ ${prefix}sound107
│⭔ ${prefix}sound108
│⭔ ${prefix}sound109
│⭔ ${prefix}sound110
│⭔ ${prefix}sound111
│⭔ ${prefix}sound112
│⭔ ${prefix}sound113
│⭔ ${prefix}sound114
│⭔ ${prefix}sound115
│⭔ ${prefix}sound116
│⭔ ${prefix}sound117
│⭔ ${prefix}sound118
│⭔ ${prefix}sound119
│⭔ ${prefix}sound120
│⭔ ${prefix}sound121
│⭔ ${prefix}sound122
│⭔ ${prefix}sound123
│⭔ ${prefix}sound124
│⭔ ${prefix}sound125
│⭔ ${prefix}sound126
│⭔ ${prefix}sound127
│⭔ ${prefix}sound128
│⭔ ${prefix}sound129
│⭔ ${prefix}sound130
│⭔ ${prefix}sound131
│⭔ ${prefix}sound132
│⭔ ${prefix}sound133
│⭔ ${prefix}sound134
│⭔ ${prefix}sound135
│⭔ ${prefix}sound136
│⭔ ${prefix}sound137
│⭔ ${prefix}sound138
│⭔ ${prefix}sound139
│⭔ ${prefix}sound140
│⭔ ${prefix}sound141
│⭔ ${prefix}sound142
│⭔ ${prefix}sound143
│⭔ ${prefix}sound144
│⭔ ${prefix}sound145
│⭔ ${prefix}sound146
│⭔ ${prefix}sound147
│⭔ ${prefix}sound148
│⭔ ${prefix}sound149
│⭔ ${prefix}sound150
│⭔ ${prefix}sound151
│⭔ ${prefix}sound152
│⭔ ${prefix}sound153
│⭔ ${prefix}sound154
│⭔ ${prefix}sound155
│⭔ ${prefix}sound156
│⭔ ${prefix}sound157
│⭔ ${prefix}sound158
│⭔ ${prefix}sound159
│⭔ ${prefix}sound160
│⭔ ${prefix}sound161
│
╰──❍
╭──❍ *Thank You To*
│
│⭔ Penyedia Api Key : Lol Human
│⭔ Penyedia Base : Dika Ardnt
│⭔ Penyedia Baileys :@adiwajshing/baileys
│
│⭔ Support By :
│⭔ Allah SWT
│⭔ Nabi Muhammad Saw
│⭔ Kedua Orang Tua
│⭔ Istri Tercinta
│
╰──❍
_Silahkan Donasi Kak_\n_Biar Owner Lebih Semangat Lagi_`
                let buttons = [{ buttonId: 'donasi', buttonText: { displayText: 'DONASI/BUY PREMIUM' }, type: 1 },{ buttonId: 'reportfitur', buttonText: { displayText: 'REPORT BUG FITUR' }, type: 1 }]
            riyan.sendMessage(m.chat, { caption: `${anu}`, location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: buttons, footer: nyoutube, mentions: ments})
            }
            break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (!isPremium) throw mess.premime
m.reply(mess.wait)
riyan_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await riyan.sendMessage(m.chat, { audio: riyan_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}
			
if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}
			
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
riyan.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
        

} catch (err) {
m.reply(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
