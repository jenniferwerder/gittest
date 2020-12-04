import express from 'express';
import router from './router';

import { getInterests, postInterests, getInterests, deleteInterests, patchInterests } from '../../Modul/interests';

const router = express.Router();

router.get('/', getInterests);
router.post('/', postInterests);
router.get('/:id', getIdInterests);
router.delete('/', deleteInterests);
router.patch('/', patchInterests);


export default router;


