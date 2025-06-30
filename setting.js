const chalk = require("chalk")
const fs = require("fs")

  global.ownerNumber = "6285791220179@s.whatsapp.net"
   global.kontakOwner = "6285791220179"
  global.botName = "Ramaa Botzz"
  global.ownerName = "Rama no kejrod"
  global.foother = "By Ramaa Gnnz © 2023"
  global.judulGroup = "Ramaa ofc"
  global.linkGroup = "Linknya"
  

 global.dana = "085791220179"
 global.ovo = "085791220179"
 global.gopay = "085791220179"
 global.saweria = "https://saweria.co/Ramaa1"
 
 global.packname = "Ramaa ©"
 global.author = "Botzz"
global.uangUser = "30000" // Setiap user mempunyai saldo Rp30.000 (saldo virtual bukan asli)
//TIDAK WAJIB DI GANTI 
  global.logoMenu = "./media/thumbnail.jpg"
  global.qrisNya = "./media/qris.jpg"
  
  
  
  
  
  const textSewa = `*SEWA BOT WHATSAPP MULAI HARI INI!*

Ingin aktivitas jualan lebih mudah? Atau ingin grup WhatsApp lebih rapi dan aman dari spam?
Sewa bot WhatsApp kami, cocok untuk penjual, komunitas, dan admin grup!

Harga Sewa:

Per Hari: Rp1.000

Per Minggu: Rp10.000

Per Bulan: Rp20.000


Keunggulan Bot WhatsApp Kami:

- Otomatis balas pesan pelanggan
- Bisa menampilkan list anda didalam group 
- Support berbagai format & perintah custom
- Fitur keamanan grup
- Auto hapus link group WhatsApp 
- Sambut member baru
- Online 24 jam non-stop

Minat sewa? Langsung hubungi admin sekarang juga!
Bot kami siap membantu bisnis & komunitas Anda jadi lebih praktis dan aman`

  
  
  
  
  
  //==================TIDAK PERLU DI EDIT=========================
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
module.exports = { textSewa }