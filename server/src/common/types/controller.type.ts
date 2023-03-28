import { RequestHandler } from "express";

export type Controllers<T> = {
  [key in keyof T & string]: RequestHandler<any>;
};
