import express from 'express';
import { attachBaseMiddlewares } from '../middlewares/attachBaseMiddlewares.js';
import { attachErrorMiddlewares } from '../middlewares/attachErrorMiddlewares.js';
import { attachHttpRoutes } from '../routes/index.js';

async function startServer() {
  const app = express();

  attachBaseMiddlewares({ app });

  attachHttpRoutes(app);

  attachErrorMiddlewares({ app });

  app.listen(process.env.BACKEND_PORT, () => console.log(`server started on port ${process.env.BACKEND_PORT}`));
}

export { startServer };
