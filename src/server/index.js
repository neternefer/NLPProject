const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('src/client/views/index.html'))
});

app.listen(8080, () => {
    console.log('Litening on port 8080...');
});

app.get('/test', (req, res) => {
    res.send(mockAPIResponse);
});