const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('No query');
})

app.listen(3001, () => console.log('BE is listening on port 3001'));