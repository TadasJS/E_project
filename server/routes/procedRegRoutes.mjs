import express from 'express';
import { procedRegController } from '../controllers/procedRegController.mjs';


const procedReg = express.Router();

procedReg.get('/', procedRegController.procedRegList)
procedReg.post('/', procedRegController.procedRegCreate)
procedReg.put('/:id', procedRegController.procedRegUpdate)
procedReg.delete('/:id', procedRegController.procedRegDelete)

export{procedReg}