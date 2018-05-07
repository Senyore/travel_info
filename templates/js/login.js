'use strict'

const baseURL = 'http://127.0.0.1:5000/'

function initUI() {
    $('#toggle_pass').click(togglePassword);
    $('#show_signup_form').click(showSignupForm);
    $('#show_login_form').click(showLoginForm);
    $('#log_in').submit(logIn);
    $('#sign_up').submit(signUp);
    $('#password_rs').keyup(checkPasswords);
}


function togglePassword() {
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


function showSignupForm() {
    $("#sign_up").css('display', 'block');
    $("#log_in").css('display', 'none');
    $('#inv_pass').css('display', 'none');
}


function showLoginForm() {
    $("#sign_up").css('display', 'none');
    $("#log_in").css('display', 'block');
    $('#inv_pass_s').css('display', 'none');
}


function logIn() {
    event.preventDefault();
    $.ajax({
        url: baseURL + 'login/',
        type: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        success: (data) => {
            if (data['code'] === 400) {
                $('#password').val('');
                $('#nickname').val('');
                $("#inv_pass").css('display', 'block')
            } else {
                renderPage($('#nickname').val(), $('#password').val());
            }
        }
    });
}


function checkPasswords() {
    if ($("#password_s").val() !== $("#password_rs").val()) {
        $('#inv_pass_s').css('display', 'block');
        $('#signup_b').prop('disabled', (i, v) => true);
    } else {
        $('#signup_b').prop('disabled', (i, v) => false);
        $('#inv_pass_s').css('display', 'none');
    }
}


function signUp() {
    event.preventDefault();
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
            } else {
                renderPage($('#nickname_s').val(), $('#password_s').val());
            }
        }
    });
}


function renderPage(name, password) {
    sessionStorage.nickname = name;
    sessionStorage.password = password;
    document.location.href = "index.html";
}


initUI();