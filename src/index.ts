import express, { Request, Response } from 'express';
import  cors  from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import myUserRoute from './routes/MyUserRoute';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(() => console.log("Connected to MongoDB"));

const app = express();
app.use(express.json());
app.use(cors());

app.get('/health', async (req: Request, res: Response) => {
    res.send({ message: "Server is healthy"});
});

app.use('/api/my/user', myUserRoute);

app.listen(9001, () => {
    console.log("Server is over 9000!!!");
})
