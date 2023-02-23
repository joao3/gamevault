import express from 'express';
import IgdbController from '../controllers/igdbController';

const router = express.Router();

router
  .get("/games/popular", IgdbController.getPopularGames);

export default router;