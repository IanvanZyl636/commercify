import { Router } from "express";

export interface RouterModel {
  path: string;
  router: Router;
}
