import apiServerUp from "./integration/expressjs/expressjs";
import connectDB from "./integration/mongodb/mongodb";
import initializeZod from "./integration/zod/zod";

const port = Number(process.env.SERVER_PORT) || 5000;

(async () => {
  try {
    initializeZod();

    await connectDB(
      `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mongo:27017/${process.env.DB_NAME}`
    );

    await apiServerUp(port);
  } catch (error) {
    console.error(error);
  }
})();
