'use strict'

const baseURL = 'http://127.0.0.1:5000/'


function initUI() {
    $(document).ready(render_user_logo);
    $("#login").click(render_login_form);
}


function render_login_form() {
    document.location.href = "login.html";
}


function render_user_logo() {
    if (sessionStorage.nickname !== 'undefined') {
      let nickname = sessionStorage.nickname.toUpperCase();
      $('#user_logo').text(nickname.charAt(0) + nickname.charAt(1))
      $('#user_logo').css('display', 'block');
      $('#login').css('display', 'none');
    }
}



initUI();