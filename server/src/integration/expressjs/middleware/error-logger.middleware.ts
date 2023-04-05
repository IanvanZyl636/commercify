import { ErrorRequestHandler } from "express";

const errorLogger: ErrorRequestHandler<any> = (error, request, response, next) => {
  console.error(`error ${error.message}`);

  response.header("Content-Type", "application/json");
  const status = error.statusCode || 400;
  response.status(status).send("Something Broke!");
};

export default errorLogger;
