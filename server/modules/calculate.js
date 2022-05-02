const express = require ( 'express');
const router = express.Router();
const calculation_requestedByUser = [
    { firstInput: '66',
    secondInput: '44',
    operation:'add'}
]

 let number1 = Number(calculation_requestedByUser.firstInput);
 let number2 =  Number(calculation_requestedByUser.secondInput);

router.get( '/', (req, res) =>{
    console.log( '/calculate GET' );
    res.send(calculation_requestedByUser)
});

router.post('/', (req, res)=> {
  console.log('/calculate POST', req.body);
  calculation_requestedByUser.push(req.body);
  res.sendStatus(200);
})

module.exports = router;

//  start of math operator logic 

function calculations (){
  if (inputNumbers.operation === 'add'){
      number1 + number2
      return answer 
  }
  else if (inputNumbers.operation === 'subtract'){
    number1 - number2
    return answer
}
  else if (inputNumbers.operation === 'multiply'){
    number1 * number2
    return answer
}

  else if (inputNumbers.operation === 'divide'){
    number1 / number2
    return answer
}
} // end calculations 
