'use strict'

const baseURL = 'http://127.0.0.1:5000/'

function initUI() {
    $('#toggle_pass').click(toggle_password);
    $('#show_signup_form').click(show_signup_form);
    $('#show_login_form').click(show_login_form);
    $('#log_in').submit(log_in)
    $('#sign_up').submit(sign_up)
}


function toggle_password() {
    if ($('#eye-icon').hasClass("icon-eye-off")) {
        $('#eye-icon').removeClass("icon-eye-off");
        $('#eye-icon').addClass("icon-eye");
        $('#password').attr('type', 'text');
        $('#password').attr('placeholder', 'Str0ng_P');
    } else {
        $('#eye-icon').removeClass("icon-eye");
        $('#eye-icon').addClass("icon-eye-off");
        $('#password').attr('type', 'password');
        $('#password').attr('placeholder', '********');
    }
}


function show_signup_form() {
    $("#sign_up").css('display', 'block');
    $("#log_in").css('display', 'none');
    $('#inv_pass').css('display', 'none');
}


function show_login_form() {
    $("#sign_up").css('display', 'none');
    $("#log_in").css('display', 'block');
    $('#inv_pass_s').css('display', 'none');
}


function log_in() {
    event.preventDefault();
    $.ajax({
        url: baseURL + 'login/',
        type: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        success: (data) => {
            if (data['code'] == 400) {
                $('#password').val('');
                $('#nickname').val('');
                $("#inv_pass").css('display', 'block')
            } else {
                render_page();
            };
        }
    });

}


function sign_up() {
    event.preventDefault();
    let pass = $("#password_s").val();
    let pass_r = $("#password_rs").val();
    let name = $("#nickname_s").val();

    if (pass !== pass_r) {
        $('#password_s').val('');
        $('#password_rs').val('');
        $('#inv_pass_s').css('display', 'block');
        return;
    }
    $('#inv_pass_s').css('display', 'none');
    $.ajax({
        url: baseURL + 'signup/',
        type: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        success: (data) => {
            if (data['code'] == 400) {
                $('#inv_nick_s').css('display', 'block');
                $('#password_s').val('');
                $('#password_rs').val('');
                $('#nickname_s').val('');
            }else {
                render_page();
            }
        }
    });
}


function render_page() {
    document.location.href = "index.html";
}


initUI();
