from typing import Annotated
from enum import Enum
from fastapi import APIRouter, Depends, FastAPI, HTTPException, Query
from pydantic import BaseModel, Field, field_validator
from decimal import Decimal
from shared.dependencies import SessionDep
from contas_a_pagar_e_receber.models.contas_a_pagar_e_receber import ContasAPagarReceber
from sqlmodel import select

router = APIRouter()


class ContaPagarReceber(str, Enum):
    PAGAR = "Pagar"
    RECEBER = "Receber"


class ContaPagarReceberResponse(BaseModel):
    id: int
    descricao: str
    valor: float
    tipo: str

    @field_validator('valor', mode='before')
    def convert_decimal(cls, v):
        return float(v)


class ContaPagarReceberRequest(BaseModel):
    descricao: str = Field(min_length=3, max_length=30)
    valor: Decimal = Field(gt=0)
    tipo: ContaPagarReceber


class ContaPagarReceberRequestUpdate(BaseModel):
    descricao: str | None = Field(min_length=3, max_length=30)
    valor: Decimal | None = Field(gt=0)
    tipo: ContaPagarReceber | None


@router.get("", response_model=list[ContaPagarReceberResponse])
def listar_contas(
    session: SessionDep,
    offset: int = 0,
    limit: Annotated[int, Query(le=100)] = 100,
) -> list[ContasAPagarReceber]:
    contas = list(session.exec(
        select(ContasAPagarReceber).offset(offset).limit(limit)).all())
    return contas


@router.post("", response_model=ContaPagarReceberResponse, status_code=201)
def criar_conta(conta: ContaPagarReceberRequest, session: SessionDep):
    conta_db = ContasAPagarReceber(**conta.model_dump())
    session.add(conta_db)
    session.commit()
    session.refresh(conta_db)
    return conta_db


@router.put("/{id_da_conta_a_pagar_e_receber}", response_model=ContaPagarReceberResponse, status_code=200)
def atualizar_conta(id_da_conta_a_pagar_e_receber: int, conta: ContaPagarReceberRequestUpdate, session: SessionDep):
    db_conta = session.get(ContasAPagarReceber, id_da_conta_a_pagar_e_receber)
    if not db_conta:
        raise HTTPException(status_code=404, detail="Account not found")

    update_data = conta.model_dump(exclude_unset=True)
    
    db_conta.sqlmodel_update(update_data)

    session.add(db_conta)
    session.commit()
    session.refresh(db_conta)
    return db_conta
