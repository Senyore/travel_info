'use strict'

const baseURL = 'http://127.0.0.1:5000/'


function initUI() {
    $("#login").click(render_login_form);
}


function render_login_form() {
    document.location.href = "login.html";
}


function render_user_logo() {

}



initUI();