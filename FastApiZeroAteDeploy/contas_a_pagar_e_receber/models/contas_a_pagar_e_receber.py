from sqlmodel import Field, SQLModel

class ContasAPagarReceber(SQLModel, table=True):
    __tablename__ = 'contas_a_pagar_e_receber'
    id: int | None = Field(default=None, primary_key=True)
    descrico: str
    valor: float
    age: int | None = None
    tipo: str