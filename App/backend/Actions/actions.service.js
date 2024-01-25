const fs = require('fs');
const path = require('path');


const file = path.join(__dirname, '../actions(2).json');

async function getBuffer() {
    try {
        const buffer = await fs.readFileSync(file);
        const jsonBuffer = await JSON.parse(buffer);

        for(let i of jsonBuffer) {
            i.key_words = i.key_words.replace(/'/g, '"');
        }
        return jsonBuffer
    } catch (err) {
        console.log(err)
    }

}

module.exports = {
    getBuffer
};
