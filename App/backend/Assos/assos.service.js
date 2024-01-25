const fs = require('fs');
const path = require('path')

const file = path.join(__dirname, '../assos.json');
async function getBuffer() {
    try {
        const buffer = await fs.readFileSync(file);
        const jsonBuffer = await JSON.parse(buffer);
        for (let i of jsonBuffer) {
            i.adresses_processed = i.adresses_processed.replace(/'/g, '"');
        }
        return jsonBuffer
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    getBuffer,
};
