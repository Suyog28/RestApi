import express from "express";
import { APP_PORT } from "./config";
const app = express();
import router from "./routes";

app.use('/api',router);

app.listen(APP_PORT, () => {
  console.log(`Listening on port:${APP_PORT}`);
});
