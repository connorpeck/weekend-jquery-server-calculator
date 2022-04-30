$( document ).ready( onReady );

function onReady(){
    console.log('in onReady');

}

function getNumbers(){
    $.ajax({
        method: 'GET',
        url: '/numbers'
    }).then (function (response){
        console.log(response);

    })
}