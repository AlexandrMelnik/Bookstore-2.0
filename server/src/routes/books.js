import express from 'express';
import { Books } from '../sequelize';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

// Get popular books
router.get('/all', (req, res) => {
  Books.findAll({order: [['rating', 'DESC'],]})
    .then(books => {
      if(books) {
        res.json({ books });
      } else {
        res.status(400).json({ errors: { server: 'Error get categories' } });
      }
    })
});

// Get book id
router.post('/book', (req, res) => {
  const  id  = req.body.id;
  Books.findOne({where: { id: id }})
    .then(book => {
      if(book) {
        res.json({ book });
      } else {
        res.status(400).json({ errors: { server: 'Error get categories' } });
      }
    })
});

export default router;
