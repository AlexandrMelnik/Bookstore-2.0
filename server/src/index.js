import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import account from './routes/account';
import categories from './routes/categories';
import books from './routes/books';

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api/account', account);
app.use('/api/categories', categories);
app.use('/api/books', books);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.SERVER_PORT, () => console.log('Running server on port:', process.env.SERVER_PORT));
