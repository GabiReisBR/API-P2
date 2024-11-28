import express from 'express';
import contractRoutes from './routes/contract.routes';
import depositRoutes from './routes/deposit.routes';
import jobRoutes from './routes/job.routes';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Registrar as rotas
app.use('/api/contracts', contractRoutes);
app.use('/api/deposits', depositRoutes);
app.use('/api/jobs', jobRoutes);

// Middleware de erro padrão
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.message);
    res.status(500).json({ error: 'Ocorreu um erro interno no servidor.' });
});

export default app;
