


def log_in(login='colyk', password='1234'):
    if session.query(User).filter(User.login == login, User.password == password).all():
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


print(log_in())