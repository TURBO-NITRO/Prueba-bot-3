let handler = async (m, { text, usedPrefix, command }) => {
    let poin = 300
    let reseqv = `π€οΈ Opciones ππ» piedra/papel/tijera\n\nπ€ Ejemplo: ${usedPrefix + command} papel\n`
    if (!text) throw reseqv
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'piedra'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'tijera'
    } else {
        astro = 'papel'
    }


    if (text == astro) {
      global.db.data.users[m.sender].exp += 100
        m.reply(`α³ββͺ Empate\n\nπ€ TΓΊ : ${text}\nπ TurBo Nitro: ${astro}\n\nπ€π Puntos (Β±)100 XP`)
    } else if (text == 'piedra') {
        if (astro == 'tijera') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`α³ββͺ Ganaste π\n\nπ€ TΓΊ : ${text}\nπ TurBo Nitro: ${astro}\n\nπ Puntos +${poin} XP`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`α³ββͺ Perdiste\n\nπ€ TΓΊ : ${text}\nπ TurBo Nitro: ${astro}\n\n Puntos -${poin} XP`)
        }
    } else if (text == 'tijera') {
        if (astro == 'papel') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`α³ββͺ Ganaste π\n\nπ€ TΓΊ : ${text}\nπ TurBo Nitro: ${astro}\n\nπ Puntos +${poin} XP`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`α³ββͺ Perdiste\n\nπ€ TΓΊ : ${text}\nπ TurBo Nitro: ${astro}\n\nPuntos -${poin} XP`)
        }
    } else if (text == 'papel') {
        if (astro == 'piedra') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`α³ββͺ Ganaste π\n\nπ€ TΓΊ : ${text}\nπ TurBo Nitro: ${astro}\n\nπ Puntos +${poin} XP`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`α³ββͺ Perdiste\n\nπ€ TΓΊ : ${text}\nπ TurBo Nitro: ${astro}\n\nPuntos -${poin} XP`)
        }
    } else {
        throw reseqv
    }
}
handler.help = ['ppt <piedra/papel/tijera>']
handler.tags = ['game']
handler.command = ['ppt'] 
handler.register = false
handler.limit = false

export default handler
