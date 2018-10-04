import express from 'express';
import { Categories } from '../sequelize';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

// Signin
router.get('/', (req, res) => {
  Categories.findAll()
    .then(categories => {
      if(categories) {
        res.json({ categories });
      } else {
        res.status(400).json({ errors: { server: 'Error get categories' } });
      }
    })
});

export default router;
