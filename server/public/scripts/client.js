$( document ).ready( onReady );

function onReady(){
    console.log('in onReady');
$( '#plusButtonIn' ).on( 'click', addInputs);
$( '#minusButtonIn' ).on( 'click', minusInputs);
$( '#multiplyButtonIn' ).on( 'click', multiplyInputs);
$( '#divideButtonIn' ).on( 'click', divideInputs);
$( '#equalButtonIn' ).on( 'click', getAnswer);
$( '#clearButtonIn' ).on( 'click', clearInputs);
}

function addInputs(){
    console.log('in addInputs');
}

function minusInputs(){
    console.log('in minusInputs');
}

function multiplyInputs(){
    console.log('in multiplyInputs');
}

function divideInputs(){
    console.log('in divideInputs');
}

function getAnswer(){
    console.log('in getAnswer');
}

function clearInputs(){
    console.log('in clearInputs');
}

