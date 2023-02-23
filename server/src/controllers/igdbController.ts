import { Response as FetchResponse } from "node-fetch"
import { Request, Response } from "express"
import { igdbRequest } from "../services/igdb"

class IgdbController {
  static getPopularGames = async (req: Request, res: Response) => {
    // Hard coded list of games
    const gamesIdList = "76747, 136625, 1905, 1372, 126459, 115, 1020, 205780, 2963, 26128, 15536, 125174, 7360, 141503, 3277";
    const query = `fields name, cover.image_id; where id = (${gamesIdList}); limit 15;`;
    
    const apiResponse = await igdbRequest(query);

    if (apiResponse.status === 200) {
      const data = await apiResponse.json();
      res.status(200).json(data);
    }
  }
}

export default IgdbController;