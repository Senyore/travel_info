import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
import datetime
Base = declarative_base()


class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    login = Column(String(250), nullable=False, unique=True)
    password = Column(String(250), nullable=False)


class Comment(Base):
    __tablename__ = 'comments'
    id = Column(Integer, primary_key=True)
    activity = Column(String(250))
    comment = Column(String(1000))
    mark = Column(Integer)
    user_id = Column(Integer, ForeignKey('users.id'))
    user = relationship(User)
    added = Column(DateTime, default=datetime.datetime.now)


if __name__ == '__main__':
    engine = create_engine('sqlite:///travel_info.db')
    Base.metadata.create_all(engine)
