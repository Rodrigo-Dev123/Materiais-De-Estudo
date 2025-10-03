from typing import Annotated
from sqlmodel import Session
from shared.database import engine
from fastapi import Depends

def get_session():
    with Session(engine, autocommit=False, autoflush=False) as session:
        yield session

SessionDep = Annotated[Session, Depends(get_session)]