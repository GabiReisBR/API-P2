import { Router } from 'express';
import { getContractsByProfile } from '../controllers/contract.controller';

const router = Router();

// Endpoint para listar contratos de um Profile específico
router.get('/:profileId', getContractsByProfile);

export default router;
