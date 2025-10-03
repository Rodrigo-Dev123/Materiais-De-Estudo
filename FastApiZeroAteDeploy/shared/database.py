from sqlmodel import create_engine

engine = create_engine("postgresql://test:test@0.0.0.0/pg_fastapi")