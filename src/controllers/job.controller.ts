import { Request, Response } from 'express';
import Job from '../models/job.model';

export const getUnpaidJobsByContract = async (req: Request, res: Response) => {
    const { contractId } = req.params;

    try {
        const jobs = await Job.findAll({
            where: { contractId, paid: false },
        });

        if (!jobs.length) {
            return res.status(404).json({ message: 'Nenhum job não pago encontrado.' });
        }

        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar jobs não pagos.', error });
    }
};
