
$( document ).ready( onReady );

function onReady(){
    console.log('in onReady');
$('#getNumButton').on( 'click', numbersToBeCalculated);
$('#clearButtonIn').on( 'click', clearInputFields);
$('#clearHistoryButton').on( 'click', clearHistory);
getNumbers();
}// end onReady

function numbersToBeCalculated(){
    console.log('in numbersToBeCalculated');
    let inputNumbers = {
        num1: $('#firstInput').val(),
        num2: $('#secondInput').val(),
        operation: 'subtract'  // needs to get the value from "this" 
                                // button click
    }
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: inputNumbers
    }).then(function( response){
        console.log('back from POST', response);
        getNumbers();
    }).catch ( function ( err ){
        console.log(err);
        alert('error in numbersToBeCalculated ')
    })
}

function getNumbers(){
    $.ajax({
        method: 'GET',
        url: '/calculate'
    }).then (function (response){
        console.log('this is the response', response);
        const el = $('#calculationsOut');
        el.empty();
        for (let i=0; i<response.length; i++){
            el.append(`<li> ${response[ i ].num1 }, ${response[ i ].num2}, ${response[ i ].operation}`)
        }

    })
    

} // end getNumbers

// clearing input fields
function clearInputFields(){
    $( '#firstInput' ).val( '' );
    $( '#secondInput' ).val( '' );
    }// end clearInputFields

// clearing History
function clearHistory(){
const el = $('#calculationsOut');
el.empty();
}
// not functional yet, clears it, but data comes back after a refresh
// guessing a need a DELETE request

