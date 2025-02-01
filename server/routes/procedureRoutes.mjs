import express from 'express'
import { procedureController } from '../controllers/procedureController.mjs';

const procedure = express.Router();

procedure.get('/', procedureController.getProcedure);
procedure.post('/', procedureController.postProcedure);
procedure.put('/:id', procedureController.putProcedure);
procedure.delete('/:id', procedureController.deleteProcedure);

export {procedure}