import apiServerUp from "./integration/expressjs/expressjs";
import connectDB from "./integration/mongodb/mongodb";

const port = Number(process.env.SERVER_PORT) || 5000;

(async () => {
  try {
    await connectDB(
      `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mongo:27017/${process.env.DB_NAME}`
    );

    await apiServerUp(port);
  } catch (error) {
    console.error(error);
  }
})();
