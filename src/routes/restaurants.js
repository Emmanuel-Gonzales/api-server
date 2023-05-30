'use strict';

const express = require('express');
const router = express.Router();
const { restaurant, restaurantModel, food } = require('../models/index');

router.get('/restaurant', async (req, res) => {
  let allRestaurant = await restaurant.read();

  res.status(200).send(allRestaurant);
});

router.get('/restaurantWithFood', async (req, res, next) => {
  let restaurant = await restaurantModel.findByPk(null, {include: {model: food.model}});

  res.status(200).send(restaurant);
});

router.get('/restaurants/:id', async (req, res) => {
  let oneRestaurant = await restaurant.read(req.params.id);

  if (oneRestaurant === null) {
    console.log('Item not Found');
  } else {
    res.status(200).send(oneRestaurant);
  }
});


router.post('/restaurant', async (req, res) => {
  let newRestaurant = await restaurant.create(req.body);

  res.status(200).send(newRestaurant);
});

router.put('/restaurant/:id', async (req, res) => {
  let updatedRestaurant = await restaurant.update(req.body, req.params.id );

  res.status(200).send(updatedRestaurant);
});

router.delete('/restaurant/:id', async (req, res, next) => {
  let deleted = restaurant.delete(req.params.id);

  res.status(200).send(deleted);
});

module.exports = router;