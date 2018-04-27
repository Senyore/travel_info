'use strict'

const baseURL = 'http://127.0.0.1:5000/'


function initUI() {
    $("#login").click(render_login);
}


function render_login() {
    document.location.href = "login.html";
}


initUI();