import express from 'express';
import { ratingController } from '../controllers/ratingControler.mjs';


const rating = express.Router();

rating.get('/', ratingController.ratingList);
rating.post('/', ratingController.ratingAdd);

export {rating}