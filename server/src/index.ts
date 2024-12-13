import express, { Request, Response } from 'express';
import { CONFIG } from './config/env';
import { dbConnection } from './config/db.connection';
import { userRouter } from './routes/routes';
import { errorMiddleware } from './middlewares/ErrorMiddleware';
import cookie from 'cookie-parser';
import cors from 'cors'
import { corsOption } from './config/cors_option';
const app = express();

app.use(cookie());
app.use(cors(corsOption));
app.use(express.json());
app.use('/api/v1/user',userRouter);

app.use(errorMiddleware)

app.listen(CONFIG.PORT, () => {
  dbConnection();
  console.log(`Server running on port ${CONFIG.PORT}`);
});