import express from "express";
import routes from "../routes";
import { home, search } from "../controller/videoController";
import {
  logout,
  getJoin,
  postJoin,
  postLogin,
  getLogin
} from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.login, getLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;
