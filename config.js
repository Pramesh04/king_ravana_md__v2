import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6281236167286', '4K Sanzz', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6281236167286'
global.packname = 'Cloud - Md'
global.author = '© 4K Sanzz'
global.namebot = '​Fxyz - Botz'
global.wm = '© 4K Sanzz'
global.stickpack = 'Cloud - 4KSanzz'
global.stickauth = '© 4K Sanzz'
// Link Sosmed
global.sig = 'https://www.instagram.com/fhl.dx17'
global.sgh = 'https://github.com/4ksanzz'
global.sgc = 'https://chat.whatsapp.com/E23hOrTGxyw1i1ccLN2G3M'
// Donasi
global.psaweria = 'https://saweria.co/4ksanzz'
global.ptrakterr = '-'
global.pdana = '0812-3616-7286'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = 'BotzZeck'
global.rose = '-'
global.xyro = 'TZGMZsLJLZ'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "agwBbPcLH3",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
