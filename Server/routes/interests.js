import express from 'express';
import routers from '../Controllers/user.js';

import { getInterests, postInterests, getIdInterests, deleteInterests, patchInterests } from '../../Modul/interests.js';

let router = express.Router();

router.get('/', getInterests);
router.post('/', postInterests);
router.get('/:id', getIdInterests);
router.delete('/', deleteInterests);
router.patch('/', patchInterests);


export default router;


