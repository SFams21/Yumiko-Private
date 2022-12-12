const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
	lol: 'https://api.lolhuman.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
	'https://api.lolhuman.xyz': 'riyanspyg01',
}

// Other
global.owner = ['6289637959432']
global.ownernomer = ['6289637959432']
global.premium = ['6289637959432']
global.packname = 'Sticker By Yumiko BMD / Riyan Sipayung'
global.author = 'Riyan Sipayung'
global.sessionName = 'session'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''

// Setting Mess
global.mess = {
    success: 'Done Kak 😊',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Mohon Maaf Kak Fitur Khusus Pengguna User Premium\nSilahkan Hubungi Owner Jika Ingin Menjadi User Premium',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '「▰▰▰▱▱▱▱▱▱▱」Loading...',
    error: 'Error! Kesalahan System,Segera Lapor Owner...',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error! Gagal Mendapatkan Data...',
    endLimit: 'Limit Harian Kakak Telah Habis\nSilahkan Hubungi Owner Bila Mau Buy Premium\nAtau Silahkan Menunggu Limit Kakak Reset Pada Jam 12 Malam / 23:59 WIB',
}

// Limit
global.limitawal = {
    premium: "Infinity",
    free: 15
}

// Fake
global.thumb = fs.readFileSync('./media/image/yumiko.jpg')
global.faall = fs.readFileSync('./media/image/menu.jpg')

// Url
global.mygit = 'https://github.com/SFams21'
global.myyt = 'https://instagram.com/riyanspyg01'
global.myytv = 'https://youtu.be/wGyG_q0E0-8'
global.mygc = "https://chat.whatsapp.com/CcqQFMLNHv10qgCbTW5zyT"

// Engak Ngaruh, Belum Kepasang
global.botname = 'Yumiko - BMD'
global.akulaku = 'Bot By Riyan Sipayung'
global.ytname = 'YT Riyan Sipayung' //Kalo Ngk Punya Yt Ngak Usah Di Ganti


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
