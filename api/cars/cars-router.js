const express = require('express');
const Car = require('./cars-model')
const router = express.Router()
const {
checkCarId,
checkCarPayload,
checkVinNumberValid,
checkVinNumberUnique
} = require('./cars-middleware')

router.get('/', async (req, res, next) => {
   try {
    const cars = await Car.getAll()
    res.json(cars)
   } catch(err) {
    next(err)
   }
})

router.get('/:id', checkCarId, async (req, res, next) => {
   res.json(req.car)
})

router.post('/', async (req, res, next) => {
    res.json('post new car')
})

module.exports = router