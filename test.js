// Node.js + Expressの例
const express = require('express');
const axios = require('axios');
const app = express();

app.get('/proxy', async (req, res) => {
    const url = req.query.url;
    const response = await axios.get(url);
    // X-Frame-Optionsヘッダーを削除
    res.send(response.data);
});
