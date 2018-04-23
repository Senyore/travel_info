from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from base_model import Comment, Base, User

engine = create_engine('sqlite:///travel_info.db')
Base.metadata.bind = engine
DBSession = sessionmaker(bind=engine)
session = DBSession()
print(session.query(User).filter(User.login == 'colyk' ).all())

def log_in(login='colyk', password='1234'):
    pass_
    try:
        pass_ = session.query(User).filter(User.login == login).first().password
    except Exception:
        return 1
    if pass_ == password:
        # new_user = User(login="colyk", password="1234")
        # session.add(new_user)
        # session.commit()
        return 1
    return 0

def sign_up(login='colyk', password='1234'):
    if not session.query(User).filter(User.login == login).all():
        new_user = User(login="colyk", password="1234")
        session.add(new_user)
        session.commit()
        return 1
    return 0


def add_comment():
    new_comment = Comment(activity='activity', user=new_user)
    session.add(new_comment)
    session.commit()
