const os = require('os')

const user = os.userInfo()
// console.log(user)

const currentOS = {
    type: os.type(),
    uptime: os.uptime(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    platform: os.platform()
}
console.log(currentOS);