const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Successful response.');
})

app.listen(3001, () => console.log('BE is listening on port 3001'));