import express, { Express } from "express";
import igdb from './igdbRoutes';

const routes = (app: Express) => {
  app.use(
    express.json(),
    igdb
  )
}

export default routes;