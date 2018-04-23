'use strict'

const baseUrl = 'http://127.0.0.1:5000/'

$('#login').submit(function (event) {
event.preventDefault();
  console.log( $( this ).serialize() );
  console.log(JSON.stringify($( this ).serialize()))
  $.ajax({
        url: baseUrl+'login/',
        type: 'POST', data: $( this ).serialize(),
        dataType: 'json',
        success: (data) => {
            console.log(data);
            /*process errors in response*/}
        });

})
