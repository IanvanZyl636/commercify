import apiServerUp from "./integration/express";

const port = Number(process.env.PORT) || 5000;

apiServerUp(port);
