const fs = require('fs')

const rs = fs.createReadStream('./readme.txt')

rs.on('data', (chunk)=>{
    console.log('new chunk receive')
    console.log('chunk.length, chunk')

})