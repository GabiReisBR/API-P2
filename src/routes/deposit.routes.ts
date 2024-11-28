import { Router } from 'express';
import { createDeposit } from '../controllers/deposit.controller';

const router = Router();

// Endpoint para realizar um depósito
router.post('/', createDeposit);

export default router;
