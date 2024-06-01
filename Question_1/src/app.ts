import express, { Application } from 'express';

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Basic App Setup");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });