const express = require ( 'express');
const router = express.Router();
const historyOfCalculations_requestedByUser = [];
let resultOfCurrentCalculation;



router.get( '/', (req, res) =>{
    console.log( '/calculate GET' );
    res.send({history: historyOfCalculations_requestedByUser, result: resultOfCurrentCalculation});
});

router.post('/', (req, res)=> {
  console.log('/calculate POST', req.body);
  updateHistory(req.body, calculate(req.body));
  res.sendStatus(200);
})

module.exports = router;

//  start of math operator logic 

function calculate (calculation_requestedByUser){
  let resultOfCalculation_requestedByUser; 
  const number1 = Number(calculation_requestedByUser.input1);
  const number2 =  Number(calculation_requestedByUser.input2);
  const operation = calculation_requestedByUser.operation;

  if ( operation === 'add'){
    resultOfCalculation_requestedByUser = number1 + number2 
  }
  else if (operation === 'subtract'){
    resultOfCalculation_requestedByUser = number1 - number2
}
  else if (operation === 'multiply'){
    resultOfCalculation_requestedByUser = number1 * number2
}
  else if (operation === 'divide'){
    resultOfCalculation_requestedByUser = number1 / number2
}
return resultOfCalculation_requestedByUser;
} // end calculations 

function updateHistory (calculation_requestedByUser, resultOfCalculation_requestedByUser ){
let recordOfCalculation = {
input1: calculation_requestedByUser.input1,
input2: calculation_requestedByUser.input2,
operation: calculation_requestedByUser.operation,
answer: resultOfCalculation_requestedByUser
}
historyOfCalculations_requestedByUser.push(recordOfCalculation);
resultOfCurrentCalculation= resultOfCalculation_requestedByUser;

} // end updateHistory
