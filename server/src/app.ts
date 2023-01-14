import apiServerUp from "./integration/express";

const port = Number(process.env.SERVER_PORT) || 5000;

apiServerUp(port);
