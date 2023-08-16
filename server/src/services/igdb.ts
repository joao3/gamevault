import fetch, { Response } from 'node-fetch';

import dotenv from 'dotenv';

dotenv.config();

const igdbRequest = async (query: string, endPoint: string): Promise<Response> => {
  const requestConfig = {
    method: 'post',
    body: `${query}`,
    headers: {
      'Content-Type': 'text/plain',
      'Client-ID': `${process.env.IGDB_CLIENT_ID}`,
      Authorization: `${process.env.IGDB_AUTHORIZATION}`,
    },
  };

  const response = await fetch(`https://api.igdb.com/v4/${endPoint}`, requestConfig);
  return response;
};

export default igdbRequest;
