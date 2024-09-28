import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { createServer } from 'http';
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4000;
import router from "./router.js";

mongoose
  .connect(process.env.DB_URL, {
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

const server = createServer(app);
server.listen(PORT, () => console.log(`server is up. port: ${PORT}`));

app.use(cors());

app.get('/', (req, res)=> {
    res.end('Server listening on 4000');
});


app.get('/api', router);
app.patch("/registration/:eventId", router);



