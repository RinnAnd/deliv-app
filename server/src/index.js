import app from "./app.js";
import * as dotenv from 'dotenv';
dotenv.config()

app.listen(process.env.PORT)
console.log(`Now connected to the port ${process.env.PORT}`);