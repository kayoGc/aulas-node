/**
 * Esse é o entrypoint da aplicação
 */

// depedencias
import express from 'express';
import cors from 'cors';
import db from './app/config/db.config.js';
import tutorialRoutes from './app/routes/tutorial.routes.js';

// inicia o express
const app = express();

// config do cors
var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// middleware para json e urlenconded
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/", (req, res) => res.json({ message: 'Bem-vindo!' }));

// rotas
app.use('/api/tutorials', tutorialRoutes);

const startServer = async () => {
    try {
        await db.sequelize.sync();

        const PORT = process.env.PORT || 8081;

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}.`);
        })
    } catch (error) {
        console.error("Falha ao sicronizar com o banco de dados:", error.message);
        process.exit(1);
     }
}

startServer();