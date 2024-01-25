const express = require('express');
const cors = require('cors')
const port = 3000;


const {assosController} = require("./Assos/assos.controller");
const {actionsController} = require("./Actions/actions.controller");

const app = express();
app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use('/assos', assosController);
app.use('/actions', actionsController);


app.get('/', async (req, res) => {
    res.status(200).send('Welcome')
})

async function main() {
    app.listen(port, () => {
        console.log(`API working on port ${port}`)
    })
}

main();