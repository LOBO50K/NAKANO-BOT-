import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['5493405480284', 'LOBO', true],
  ['5493405438423']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['5493405480284', '5493405438423']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = '𝕹𝖆𝖐𝖆𝖓𝖔 𝖇𝖔𝖙' 
global.author = 'ℓσвσ' 

//--info FG
global.botName = 'ηαкαησ вσт'
global.fgig = 'https://www.instagram.com/lobo_random_oficial?igsh=NjV1ZnNhOXU1YjBs' 
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/fg98f'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.id_canal = '120363283921434745@newsletter' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VaXDEwlC1FuFm82otA0K' //CANAL TEAM NAKANO
global.bgp = 'https://chat.whatsapp.com/DToXV6TAU8xFH1vBFT9lrq' //GRUPO OFC NAKANO-BOT 
global.bgp2 = 'https://chat.whatsapp.com/DjyF7hEXW95ADpZbG6YqTp' //GRUPO NSFW NAKANO
global.bgp3 = 'https://chat.whatsapp.com/CnN4LfY1LfB5RBbiNWOCct' //--COLABORACIONES NAKANO/KURODA

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
