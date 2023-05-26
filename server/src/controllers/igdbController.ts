import { Request, Response } from 'express';
import { igdbRequest } from '../services/igdb';


const getGamesByIdList = async (idList: Array<number>) => {

  const query = `fields name, cover.image_id; where id = (${idList.join(', ')}); limit ${idList.length};`;
  const apiResponse = await igdbRequest(query, 'games');

  if (apiResponse.status === 200) {
    const data = await apiResponse.json();
    return data;
  }
};

const getCurrentTimestamp = () => (Math.floor((Date.now()/ 1000)));

class IgdbController {
  static getPopularGames = async (req: Request, res: Response) => {
    // Hard coded list of games (igdb does not provide a popularity endpoint or popularity field on the game).
    const gamesIdList = [76747, 136625, 1905, 242408, 126459, 115, 1020, 205780, 2963, 26128, 15536, 125174, 7360, 141503, 3277];

    const data = await getGamesByIdList(gamesIdList);
    res.status(200).json(data);

  };

  static getRecentlyReleasedGames = async (req: Request, res: Response) => {
    const query = `fields game; where date < ${(getCurrentTimestamp()).toString()}; limit 25; sort date desc;`;
    const apiResponse = await igdbRequest(query, 'release_dates');

    if (apiResponse.status === 200) {
      const releasesList = await apiResponse.json();

      const gamesIdList: Array<number> = [];

      releasesList.forEach((element: { id: number, game: number }) => {
        gamesIdList.push(element.game);
      });

      const data = await getGamesByIdList(gamesIdList);
      res.status(200).json(data);
    }
  };

  static getComingSoonGames = async (req: Request, res: Response) => {
    const query = `fields game; where date > ${(getCurrentTimestamp()).toString()}; limit 25; sort date asc;`;
    const apiResponse = await igdbRequest(query, 'release_dates');

    if (apiResponse.status === 200) {
      const releasesList = await apiResponse.json();

      const gamesIdList: Array<number> = [];

      releasesList.forEach((element: { id: number, game: number }) => {
        gamesIdList.push(element.game);
      });

      const data = await getGamesByIdList(gamesIdList);
      res.status(200).json(data);
    }
  };

  static getGameData = async (req: Request, res: Response) => {
    const query = 
    `fields 
    name,
    cover.image_id,
    first_release_date,
    genres.name,
    platforms.name,
    similar_games,
    screenshots.image_id,
    summary,
    category,
    total_rating,
    artworks; 
    where id = ${req.params.gameId};`;

    const apiResponse = await igdbRequest(query, 'games');

    if (apiResponse.status === 200) {
      const gameData = await apiResponse.json();
      res.status(200).json(gameData[0]);
    }
  };

  static searchByName = async (req: Request, res: Response) => {
    const searchQuery = req.query.name;
    const pageNumber = Number(req.query.page);
    const gamesPerPage = 49;
    const offset = (pageNumber - 1) * gamesPerPage;

    if (!searchQuery) {
      res.status(400).send('Invalid query');
      return;
    }

    const apiQuery = `fields name, cover.image_id; search "${searchQuery}"; offset ${offset}; limit ${gamesPerPage};`;
    const apiResponse = await igdbRequest(apiQuery, 'games');

    if (apiResponse.status === 200) {
      const data = await apiResponse.json();
      res.status(200).json(data);
    }
  };
}

export default IgdbController;