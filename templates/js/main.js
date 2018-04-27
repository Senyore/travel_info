'use strict'

const baseURL = 'http://127.0.0.1:5000/'


function initUI() {
    draw_icon();
    $("#login").click(render_login);
}

function draw_icon() {
    let canvas = document.getElementById('myCanvas');
    let context = canvas.getContext('2d');
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    let radius = 24;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = '#c886d8';
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = '#003300';

    context.stroke();
    context.font = "25px Verdana";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.fillText("CO", centerX - 1, centerY + 9);
}


function render_login() {
    document.location.href = "login.html";
}


initUI();