import express from 'express'
import shopRouter from './routes/shop.routes.js';
import dishRouter from './routes/dish.routes.js';

const app = express();

app.use(express.json());
app.use(shopRouter);
app.use(dishRouter);

export default app;