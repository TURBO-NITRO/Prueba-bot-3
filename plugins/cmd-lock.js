
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!m.quoted) throw 'π€ Etiqueta un mensaje π€π»π'
    if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
    let sticker = db.data.sticker
    let hash = m.quoted.fileSha256.toString('hex')
    if (!(hash in sticker)) throw 'π΅ No estΓ‘ registrado en mΓ­ base de datos π€'
    sticker[hash].locked = !/^un/i.test(command)
    m.reply('π€ Hecho π€π»π')
} 
handler.help = ['un', ''].map(v => v + 'lockcmd')
handler.tags = ['database']
handler.command = ['unlockcmd', 'lockcmd'] 
handler.rowner = true

export default handler
