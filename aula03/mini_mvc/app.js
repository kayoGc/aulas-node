const express = require('express');
const app = express();
const postRoutes = require('./routes/postRoutes');
const path = require('path');
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', postRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});