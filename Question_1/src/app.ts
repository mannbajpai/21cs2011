import express, { Application } from 'express';
import productRoutes from './routes/productRoutes';
var cors = require('cors');

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())
app.use('/api/', productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
