//Bang Subscribe YT XaviorOfc Lh..

const fs = require('fs')
const chalk = require('chalk')

// Web APIs Nya, Klo Mau Ubah Silahkan
global.APIs = {
	xaviorapikey: 'https://xaviorapikey/herokuapp.com',
	zenz: 'https:zenzapis.xyz'
}

// Udah Free Apikey Jadi Klo Mau Ubah Silahkan
global.APIKeys = {
	'https://xaviorapikey.herokuapp.com': 'APIKEY',
	'https://zenzapis.xyz': 'sonelstore'
}

// Yang Bisa Kelen Editzy 
global.namabot = ['Maabotz']
global.namaowner = ['Ramaa Gnzz']
global.owner = ['6285791220179']
global.premium = ['6285791220179']
global.packname = 'Ramaa'
global.author = 'Maabotz | Ramaa'
global.sessionName = 'Xavior'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Permintaan mu udah jadi...,Sekarang subrek channel *Rama BotZz*',
    admin: '*Mau ngapain ngab?, lu bukan admin awokawok*',
    botAdmin: 'Bot harus menjadi admin terlebih dahulu ',
    owner: 'Awokaoek Lu Bukan Owner',
    group: 'Mesti Ke Gc Kita Cuy...',
    private: 'Chat Private Sini',
    bot: 'Cuma Bisa Untuk Bot',
    wait: 'Tunggu bentar,Subrek dulu Channel *Ramaa BotZz*',
    endLimit: 'Limit Harian Sudah Habis, Limit Akan Direset Besok',
}
//Kalo Ngasih Limit Jangan Dikit Lah Bng
global.limitawal = {
    premium: "Infinity",
    free: 10
}
global.thumb = fs.readFileSync('./lib/xavi.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
