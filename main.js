'use strict'

const baseUrl = 'http://127.0.0.1:5000/'

function initUI() {
    $('#log_in').submit(log_in)
    $('#sign_up').submit(sign_up)
    $('#reg_link_b').click(show_form);
}

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
            } else { console.log("User exist!") };
        }
    });

}

function show_form() {
    event.preventDefault();
    $('#log_in').css('display', 'none')
    $('#reg_link').text('');
    $('#error').text('Регистрация')
    $('#sign_up').css('display', 'block')
}

function clean_sign_up() {
    $('#pass_s').val('');
    $('#pass_sr').val('');
    $('#name_s').val('');
}

function sign_up() {
    event.preventDefault();
    let pass = $("#pass_s").val();
    let pass_r = $("#pass_sr").val();
    let name = $("#name_s").val();

    if (pass !== pass_r) {
        clean_sign_up();
        $('#error').text('Пароли не совпадают');
        return;
    }
    $.ajax({
        url: baseUrl + 'signup/',
        type: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        success: (data) => {
            if (data['code'] == 400) {
                $('#error').text('Пользователь с таким ником уже существует');
                clean_sign_up();

            }
        }
    });
}

function render_page() {
  document.location.href = "lol.html";
}


initUI();