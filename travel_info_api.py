from flask import request
from flask_api import FlaskAPI, status
from travel_info import *

app = FlaskAPI(__name__)


HEADER = {'Access-Control-Allow-Origin': '*'}


@app.route("/login/", methods=['GET', 'POST'])
def log_in():
    print('lol')
    return {'code': '200'}, status.HTTP_200_OK, HEADER


@app.route("/signup/", methods=['GET', 'POST'])
def sign_up():
    return {'code': '201'}, status.HTTP_201_CREATED, HEADER


if __name__ == '__main__':
    app.run(debug=True)
