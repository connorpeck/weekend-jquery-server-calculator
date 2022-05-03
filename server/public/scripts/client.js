
$( document ).ready( onReady );
// initializing operator 
let operatorValue = '';

function onReady(){
    console.log('in onReady');
$('#calculateButton').on( 'click', requestCalculation);
$('#clearButtonIn').on( 'click', clearInputFields);
$('#plusButtonIn').on( 'click', function (){updateOperatorValue ('add')});
$('#minusButtonIn').on( 'click', function (){updateOperatorValue ('subtract')});
$('#multiplyButtonIn').on( 'click', function (){updateOperatorValue ('multiply')});
$('#divideButtonIn').on( 'click', function (){updateOperatorValue ('divide')});
}// end onReady

function updateOperatorValue (operatorSelection){
    operatorValue = operatorSelection;
}


// requesting a calculation from the server
// with information from the user
function requestCalculation(){
    console.log('in requestCalculation');
    let requestedCalculation = {
        input1: $('#firstInput').val(),
        input2: $('#secondInput').val(),
        operation: operatorValue                          
    } // end getting information from the user
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: requestedCalculation
    // seding the data of the information gathered from user
    }).then(function( response){
        console.log('back from POST', response);
        // getting a response back from the server
        requestHistoryAndResultOfCalculation();
        // running a function that gets info from the server
        // and runs the function updateDom
    }).catch ( function ( err ){
        console.log(err);
        alert('error in numbersToBeCalculated ')
    })  // catch if there is an error
} // end requestCalculation

function requestHistoryAndResultOfCalculation(){
    $.ajax({
        method: 'GET',
        url: '/calculate'
        // getting data from the server via GET request
    }).then (function (response){
        updateDom(response);
        // gets back a response containing an object with the history 
        // and the result of the calculation
        console.log('this is the response', response);
} 
    )}// end getNumbers
    // update dom with paramater of the response from get request
function updateDom (historyAndResultOfCalculation) {
    const el = $('#calculationsOut');
    el.empty();
    // loop and update the dom wiht the right operator sign
    for (let i=0; i<historyAndResultOfCalculation.history.length; i++){
        let operationSign = '';
        if (historyAndResultOfCalculation.history[ i ].operation === 'add'){
            operationSign = '+';
        }
        else if (historyAndResultOfCalculation.history[ i ].operation === 'subtract'){
            operationSign = '-';
        } 
        else if (historyAndResultOfCalculation.history[ i ].operation === 'multiply'){
            operationSign = '*';
        }
        else if (historyAndResultOfCalculation.history[ i ].operation === 'divide'){
            operationSign = '/';
        } // append a list item with the input numbers and 
        // chosen operator sign
    el.append(`<li> 
    ${historyAndResultOfCalculation.history[ i ].input1 } 
    ${operationSign}
    ${historyAndResultOfCalculation.history[ i ].input2} = 
    ${historyAndResultOfCalculation.history[ i ].answer} </li>`);
        }
        // appending the answer to the dom
    const answerToDom= $('#answer');
    answerToDom.empty();
    answerToDom.append(historyAndResultOfCalculation.result);
}

// clearing input fields
function clearInputFields(){
    $( '#firstInput' ).val( '' );
    $( '#secondInput' ).val( '' );
    }// end clearInputFields



