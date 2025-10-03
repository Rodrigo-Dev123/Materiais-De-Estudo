from typing import Annotated
from fastapi import APIRouter, Depends, FastAPI, HTTPException, Query
from pydantic import BaseModel
from decimal import Decimal
from shared.dependencies import SessionDep
from contas_a_pagar_e_receber.models.contas_a_pagar_e_receber import ContasAPagarReceber
from sqlmodel import select

router = APIRouter()

class ContaPagarReceberResponse(BaseModel):
    id: int
    descrico: str
    valor: float
    age: int | None = None
    tipo: str

class ContaPagarReceberRequest(BaseModel):
    descrico: str
    valor: float
    age: int | None = None
    tipo: str

@router.get("", response_model=list[ContaPagarReceberResponse])
def listar_contas(
    session: SessionDep,
    offset: int = 0,
    limit: Annotated[int, Query(le=100)] = 100,
) -> list[ContasAPagarReceber]:
    heroes = session.exec(select(ContasAPagarReceber).offset(offset).limit(limit)).all()
    return heroes

@router.post("", response_model=ContasAPagarReceber, status_code=201)
def criar_conta(conta: ContasAPagarReceber, session: SessionDep):
    session.add(conta)
    session.commit()
    session.refresh(conta)
    return conta