const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// app.get('/', (req, res) => {
//     res.send("Hello, World");
// })

app.listen(3000, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Express server running`);
});