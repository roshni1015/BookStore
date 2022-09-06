import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import bookRoute from './books.route';
import cartRoute from './cart.route'
import wishListRoute from './wishlist.route'

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/books',bookRoute);
  router.use('/carts',cartRoute);
  router.use('/wishLists',wishListRoute);

 


  return router;
};

export default routes;
