'use strict';

const express = require('express');
const router = express.Router();
const { foodModel } = require('../models/index');

router.get('/food', async (req, res) => {
  let allFood = await foodModel.findAll();

  res.status(200).send(allFood);
});

router.get('/food/:id', async (req, res) => {
  let oneFood = await foodModel.findAll({where: {id: req.params.id}});;

  if (oneFood === null) {
    console.log('Food item not found!');
  } else {
    res.status(200).send(oneFood);
  }
});


router.post('/food', async (req, res) => {
  let newFood = await foodModel.create(req.body);

  res.status(200).send(newFood);
});

router.put('/food/:id', async (req, res) => {
  let updatedFood = await foodModel.update(req.body, req.params.id );

  res.status(200).send(updatedFood);
});

router.delete('/food/:id', async (req, res, next) => {
  try {
    await foodModel.delete({ where: {id: req.params.id}});

    res.status(200).send('deleted selected food item');
  } catch (error) {
    next(error);
  }
});

module.exports = router;