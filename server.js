const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const root = './dist/pwa';

app.use(express.static(root));
app.get('/*', (req, res) => {
    res.sendFile('index.html', { root })
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});