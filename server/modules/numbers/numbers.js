const express = require ( 'express');
const router = express.Router();

let numbersToCalc = [
    { num1: '',
      num2: ''}
]

router.get( '/', (req, res) =>{
    console.log( '/numbers GET' );
    res.send(numbersToCalc)
});

module.exports = router;