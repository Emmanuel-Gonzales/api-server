'use strict';

const express = require('express');
const router = express.Router();
const { food } = require('../models/index');

router.get('/food', async (req, res) => {
  let allFood = await food.read();

  res.status(200).send(allFood);
});

router.get('/food/:id', async (req, res) => {
  let oneFood = await food.read(req.params.id);

  if (oneFood === null) {
    console.log('Item not Found');
  } else {
    res.status(200).send(oneFood);
  }
});


router.post('/food', async (req, res) => {
  let newFood = await food.create(req.body);

  res.status(201).send(newFood);
});

router.put('/food/:id', async (req, res) => {
  let updatedFood = await food.update(req.body, req.params.id );

  res.status(200).send(updatedFood);
});

router.delete('/food/:id', async (req, res, next) => {
  let deleted = food.delete(req.params.id);

  res.status(200).send(deleted);
});

module.exports = router;