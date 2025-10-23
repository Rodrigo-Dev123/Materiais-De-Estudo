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
    descricao: str
    valor: float
    age: int | None = None
    tipo: str

class ContaPagarReceberRequest(BaseModel):
    descricao: str
    valor: float
    age: int | None = None
    tipo: str

@router.get("", response_model=list[ContasAPagarReceber])
def listar_contas(
    session: SessionDep,
    offset: int = 0,
    limit: Annotated[int, Query(le=100)] = 100,
) -> list[ContasAPagarReceber]:
    contas = list(session.exec(select(ContasAPagarReceber).offset(offset).limit(limit)).all())
    return contas

@router.post("", response_model=ContaPagarReceberResponse, status_code=201)
def criar_conta(conta: ContaPagarReceberRequest, session: SessionDep):
    conta_db = ContasAPagarReceber(**conta.model_dump())
    session.add(conta_db)
    session.commit()
    session.refresh(conta_db)
    return conta_db