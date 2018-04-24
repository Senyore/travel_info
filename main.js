'use strict'

const baseUrl = 'http://127.0.0.1:5000/'

$('#login').submit(log_in)
$('#reg').click(registrate);


function log_in() {
    event.preventDefault();
    $.ajax({
        url: baseUrl + 'login/',
        type: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        success: (data) => {
            if (data['code'] == 400) {
                $('#error').text('Логин либо пароль не верный')
                $('#pass').val('');
                $('#name').val('');
            } else { console.log("User exist") };
        }
    });

}

function registrate() {
    $("fieldset").append('<input id="pass_r" name="pass" type="password" placeholder="Повторите пароль" required>');
    console.log('registrate')
}