import express from 'express';
import { Books } from '../sequelize';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

// Get popular books
router.get('/popular', (req, res) => {
  Books.findAll({order: [['rating', 'DESC'],]})
    .then(books => {
      if(books) {
        res.json({ books });
      } else {
        res.status(400).json({ errors: { server: 'Error get categories' } });
      }
    })
});

export default router;
