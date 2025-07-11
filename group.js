const fs = require('fs')

async function isWelcome(id) {
    let array = JSON.parse(fs.readFileSync('./database/welcome.json'))
    //console.log(array.includes(id))
    return array.includes(id)
}

exports.groupResponse_Remove = async (conn, update) => {
try {
let validate = await isWelcome(update.id)
if (!validate) return
ppuser = await conn.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await conn.groupMetadata(update.id)
for (let participant of update.participants) {
try{
let metadata = await conn.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'remove'){
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Bye👋'}, type: 1 }]
await conn.sendMessage(
update.id, 
{
text: `╭━━━━━━━━━━━━━━━┅•ิ.•ஐ\n│ *📌Leave To ${metadata.subject}* \n└┬────────────┾•ิ.•┽\n┌┤Sayonara👋 @${num.split("@")[0]}\n││ \n└────────────┾•ิ.•┽`,
footer: metadata.subject, 
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Welcome = async (conn, update) => {
try {
let validate = await isWelcome(update.id)
if (!validate) return 
ppuser = await conn.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await conn.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await conn.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'add') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Welcome👋'}, type: 1 }]
await conn.sendMessage(
update.id, 
{ 
text: `╭━━━━━━━━━━━━━━━┅•ิ.•ஐ\n│ *📌Welcome To ${metadata.subject}* \n└┬────────────┾•ิ.•┽\n┌┤Haii👋 @${num.split("@")[0]}\n││ \n││——[ *ɪɴᴛʀᴏ* ]——\n││ 📛ɴᴀᴍᴀ:\n││ 📅ᴜᴍᴜʀ:\n││ ⚽ʜᴏʙɪ:\n││ 🏢ᴀsᴋᴏᴛ: \n└────────────┾•ิ.•┽`,
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Promote = async (conn, update) => {  
const metadata = await conn.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await conn.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'promote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat🎉'}, type: 1 }]
await conn.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Naik jabatan jadi admin grup*`,
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Demote = async (conn, update) => {  
const metadata = await conn.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await conn.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'demote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat🎉'}, type: 1 }]
await conn.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Turun jabatan menjadi member biasa*`,
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}