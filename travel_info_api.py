import os
from flask import request
from flask_api import FlaskAPI, status
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from base_model import Comment, Base, User, create_db

engine = create_engine('sqlite:///travel_info.db')
Base.metadata.bind = engine
DBSession = sessionmaker(bind=engine)
session = DBSession()


if 'travel_info.db' not in os.listdir():
    create_db()


app = FlaskAPI(__name__)


HEADER = {'Access-Control-Allow-Origin': '*'}

# Добавить шифрования пароля
@app.route("/login/", methods=['GET', 'POST'])
def log_in():
    req = request.data.to_dict()
    login = req['nickname']
    password = req['password']
    if session.query(User).filter(User.login == login, User.password == password).all():
        return {'code': '200'}, status.HTTP_200_OK, HEADER
    return {'code': '400'}, status.HTTP_200_OK, HEADER


@app.route("/signup/", methods=['GET', 'POST'])
def sign_up():
    req = request.data.to_dict()
    login = req['nickname']
    password = req['password']

    if not session.query(User).filter(User.login == login).all():
        new_user = User(login=login, password=password)
        session.add(new_user)
        session.commit()
        return {'code': '201'}, status.HTTP_201_CREATED, HEADER
    return {'code': '400'}, status.HTTP_201_CREATED, HEADER


if __name__ == '__main__':
    app.run(debug=False)
