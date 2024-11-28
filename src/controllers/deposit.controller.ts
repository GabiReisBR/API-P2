import { Request, Response } from 'express';
import Deposit from '../models/deposit.model';
import Profile from '../models/profile.model';

export const createDeposit = async (req: Request, res: Response) => {
    const { profileId, amount } = req.body;

    try {
        const profile = await Profile.findByPk(profileId);
        if (!profile) {
            return res.status(404).json({ message: 'Profile não encontrado.' });
        }

        await Deposit.create({ clientId: profileId, depositValue: amount, operationDate: new Date() });
        profile.balance += amount;
        await profile.save();

        res.status(201).json({ message: 'Depósito realizado com sucesso.', profile });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao realizar depósito.', error });
    }
};
