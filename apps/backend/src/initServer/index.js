import express from 'express';
import { initServerErrorsAndAttachToGlobal } from '../initServerErrors/index.js';
import { attachBaseMiddlewares } from '../middlewares/attachBaseMiddlewares.js';
import { attachErrorMiddlewares } from '../middlewares/attachErrorMiddlewares.js';
import { attachHttpRoutes } from '../routes/index.js';

const PORT = 8000;

async function startServer() {
  initServerErrorsAndAttachToGlobal();

  const app = express();

  attachBaseMiddlewares({ app });

  attachHttpRoutes(app);

  attachErrorMiddlewares({ app });

  app.listen(PORT, () => console.log(`server started on port ${PORT}`));
}

export { startServer };
