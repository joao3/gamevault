import express from 'express';
import IgdbController from '../controllers/igdbController';

const router = express.Router();

router
  .get('/games/popular', IgdbController.getPopularGames)
  .get('/games/recently-released', IgdbController.getRecentlyReleasedGames)
  .get('/games/coming-soon', IgdbController.getComingSoonGames)
  .get('/games/search', IgdbController.searchByName)
  .get('/games/:gameId', IgdbController.getGameData);

export default router;