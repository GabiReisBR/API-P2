import { Request, Response } from 'express';
import Contract from '../models/contract.model';

export const getContractsByProfile = async (req: Request, res: Response) => {
    const { profileId } = req.params;

    try {
        const contracts = await Contract.findAll({ where: { clientId: profileId } });
        if (!contracts.length) {
            return res.status(404).json({ message: 'Nenhum contrato encontrado.' });
        }
        res.json(contracts);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar contratos.', error });
    }
};
