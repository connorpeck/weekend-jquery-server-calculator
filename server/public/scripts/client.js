
$( document ).ready( onReady );
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



function requestCalculation(){
    console.log('in numbersToBeCalculated');
    let requestedCalculation = {
        input1: $('#firstInput').val(),
        input2: $('#secondInput').val(),
        operation: operatorValue  // needs to get the value from "this" 
                                // button click
    }
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: requestedCalculation
    }).then(function( response){
        console.log('back from POST', response);
        requestHistoryAndResultOfCalculation();
    }).catch ( function ( err ){
        console.log(err);
        alert('error in numbersToBeCalculated ')
    })
    requestHistoryAndResultOfCalculation();
}

function requestHistoryAndResultOfCalculation(){
    $.ajax({
        method: 'GET',
        url: '/calculate'
    }).then (function (response){
        updateDom(response);
        console.log('this is the response', response);
} 
    )}// end getNumbers
function updateDom (historyAndResultOfCalculation) {
    const el = $('#calculationsOut');
    el.empty();
    // el.append(`<li>${historyAndResultOfCalculation.result}</li>`);
    // el.append(historyAndResultOfCalculation.history[1].input1);
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
        }
    el.append(`<li> 
    ${historyAndResultOfCalculation.history[ i ].input1 } 
    ${operationSign}
    ${historyAndResultOfCalculation.history[ i ].input2} = 
    ${historyAndResultOfCalculation.history[ i ].answer} </li>`);
        }
    const el2= $('#answer');
    el2.empty();
    el2.append(historyAndResultOfCalculation.result);
}

// clearing input fields
function clearInputFields(){
    $( '#firstInput' ).val( '' );
    $( '#secondInput' ).val( '' );
    }// end clearInputFields

// clearing History

// not functional yet, clears it, but data comes back after a refresh
// guessing a need a DELETE request

