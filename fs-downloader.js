const https = require('https');
const fs = require('fs');
const path = require('path');

function downloadFile(url) {
    const filename = path.basename(url);
    
    https.get(url, (res) => {
        const fileStream = fs.createWriteStream(filename);
        res.pipe(fileStream);
        
        fileStream.on('finish', () => {
            fileStream.close();
            console.log('Download finished')
        });
    })
}

try {
    downloadFile('https://github.com/selahjs/NodeJS-Projects/blob/main/names.js');
} catch (error) {
    console.log(error);
}