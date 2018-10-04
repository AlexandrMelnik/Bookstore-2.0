import express from 'express';
import md5 from 'md5';
import { User } from '../sequelize';
import { jwtConfig } from '../jwtConfig';
import { sendMailToUser } from '../mailer';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

// Signin
router.post('/signin', (req, res) => {
  const { email, password }  = req.body.data;
  console.log(password);
  const generatePassword = md5(password+process.env.SECRET_KEY);
  User.findOne({ where: { email, password: generatePassword } })
    .then(user => {
      if(user) {
        const generateJWT = jwtConfig({email: user.email, confirm: user.confirm});
        res.json({user: { token: generateJWT, confirm: user.confirm }});
      } else {
        res.status(400).json({errors: { server: 'Failed email or password' }});
      }
    })
});

// Signup
router.post('/signup', (req, res) => {
  const { username, email, password } = req.body.data;
  User.findOne({ where: { email: email } })
    .then(user => {
      if(user) {
        res.status(400).json({ errors: { server: `The user is already registered at the email you specified ${user.email}` } });
      } else {
        const generateJWT = jwtConfig({email: email, confirm: 0});
        const generatePassword = md5(password+process.env.SECRET_KEY);
        const data = {
          username: username,
          email: email,
          password: generatePassword,
          confirmToken: generateJWT
        };
        User.create(data)
          .then((newUser) => {
            res.json({ user: { token: newUser.confirmToken } });
            sendMailToUser({ email: newUser.email, username: newUser.username,  generateUrl: `http://localhost:3000/confirm/${generateJWT}` });
          });
      }
    });
});

// Confirmation account
router.post('/confirm', (req, res) => {
  const token = req.body.token;
  User.findOne({ where: { confirmToken: token } })
    .then(user => {
      return user.update({ confirm: 1, confirmToken: '' })
    })
    .then(user => {
      const generateJWT = jwtConfig({email: user.email, confirm: user.confirm});
      res.json({user: { token: generateJWT, confirm: user.confirm }});
    }).catch(err => res.status(400).json({  }))
});


export default router;
