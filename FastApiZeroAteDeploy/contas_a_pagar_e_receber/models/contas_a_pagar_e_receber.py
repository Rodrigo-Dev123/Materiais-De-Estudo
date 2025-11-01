from sqlmodel import Field, SQLModel
from decimal import Decimal
from typing import Optional

class ContasAPagarReceber(SQLModel, table=True):
    __tablename__ = 'contas_a_pagar_e_receber' # type: ignore
    id: int | None = Field(default=None, primary_key=True)
    descricao: str
    valor: Decimal
    tipo: str