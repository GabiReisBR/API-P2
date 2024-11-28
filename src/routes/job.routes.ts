import { Router } from 'express';
import { getUnpaidJobsByContract } from '../controllers/job.controller';

const router = Router();

// Endpoint para listar jobs não pagos de um contrato
router.get('/unpaid/:contractId', getUnpaidJobsByContract);

export default router;
