/*
     yt : https://youtube.com/c/turbontr1
*/
let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? 'Turbo A'
      : ((user.level >= 3) && (user.level <= 6)) ? 'Turbo IA'
      : ((user.level >= 6) && (user.level <= 9)) ? 'Turbo III'
      : ((user.level >= 9) && (user.level <= 12)) ? 'Turbo II'
      : ((user.level >= 12) && (user.level <= 15)) ? 'Turbo I'
      : ((user.level >= 15) && (user.level <= 18)) ? 'Nitro A'
      : ((user.level >= 18) && (user.level <= 21)) ? 'Nitro IA'
      : ((user.level >= 21) && (user.level <= 24)) ? 'Nitro III'
      : ((user.level >= 24) && (user.level <= 27)) ? 'Nitro II'
      : ((user.level >= 27) && (user.level <= 30)) ? 'Nitro I'
      : ((user.level >= 30) && (user.level <= 33)) ? 'Turbo Nitro A'
      : ((user.level >= 33) && (user.level <= 36)) ? 'Turbo Nitro IA'
      : ((user.level >= 36) && (user.level <= 39)) ? 'Turbo Nitro III'
      : ((user.level >= 39) && (user.level <= 42)) ? 'Turbo Nitro II'
      : ((user.level >= 42) && (user.level <= 45)) ? 'Turbo Nitro I'
      : ((user.level >= 45) && (user.level <= 48)) ? 'Súper Turbo A'
      : ((user.level >= 48) && (user.level <= 51)) ? 'Súper Turbo IA'
      : ((user.level >= 51) && (user.level <= 54)) ? 'Súper Turbo III'
      : ((user.level >= 54) && (user.level <= 57)) ? 'Súper Turbo II'
      : ((user.level >= 57) && (user.level <= 60)) ? 'Súper Turbo I'
      : ((user.level >= 60) && (user.level <= 63)) ? 'Súper Nitro A'
      : ((user.level >= 63) && (user.level <= 66)) ? 'Súper Nitro IA'
      : ((user.level >= 66) && (user.level <= 69)) ? 'Súper Nitro III'
      : ((user.level >= 69) && (user.level <= 71)) ? 'Súper Nitro II'
      : ((user.level >= 71) && (user.level <= 74)) ? 'Súper Nitro I'
      : ((user.level >= 74) && (user.level <= 77)) ? 'SenSey A'
      : ((user.level >= 77) && (user.level <= 80)) ? 'SenSey IA'
      : ((user.level >= 80) && (user.level <= 83)) ? 'SenSey III'
      : ((user.level >= 83) && (user.level <= 86)) ? 'SenSey II'
      : ((user.level >= 86) && (user.level <= 89)) ? 'SenSey I'
      : ((user.level >= 89) && (user.level <= 91)) ? 'Súper Sensey A'
      : ((user.level >= 91) && (user.level <= 94)) ? 'Súper Sensey IA'
      : ((user.level >= 94) && (user.level <= 97)) ? 'Súper Sensey III'
      : ((user.level >= 97) && (user.level <= 100)) ? 'Súper Sensey II'
      : ((user.level >= 100) && (user.level <= 105)) ? 'Súper Sensey I'      
      : ((user.level >= 105) && (user.level <= 120)) ? 'Turbo Nitro'
      : ((user.level >= 120) && (user.level <= 150)) ? 'Titan A'
      : ((user.level >= 150) && (user.level <= 160)) ? 'Titan IA'
      : ((user.level >= 160) && (user.level <= 170)) ? 'Titan III'
      : ((user.level >= 170) && (user.level <= 185)) ? 'Titan II'
      : ((user.level >= 185) && (user.level <= 200)) ? 'Titan I'
      : ((user.level >= 200) && (user.level <= 400)) ? 'Súper Titan III'
      : ((user.level >= 405) && (user.level <= 700)) ? 'Súper Titan II'
      : ((user.level >= 700) && (user.level <= 1000)) ? 'Súper Titan I'
      : 'Felicidades eres un Rey'

    user.role = role
    return true
}

export default handler
