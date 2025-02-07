import express from 'express';
import { advertController } from '../controllers/advertController.mjs';

const advert = express.Router();

advert.get('/', advertController.listAdvert);
advert.post('/',advertController.createAdvert );
advert.put('/:id',advertController.updateAdvert );
advert.delete('/:id',advertController.deleteAdvert );

export {advert}