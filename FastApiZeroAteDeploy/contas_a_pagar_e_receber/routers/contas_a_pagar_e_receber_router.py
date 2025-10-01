from fastapi import APIRouter
from pydantic import BaseModel
from decimal import Decimal

router = APIRouter()

class ContaPagarReceberResponse(BaseModel):
    id: int
    descricao: str
    valor: Decimal
    data_vencimento: str
    data_pagamento: str | None
    status: str
    tipo: str

class ContaPagarReceberRequest(BaseModel):
    descricao: str
    valor: Decimal
    data_vencimento: str
    data_pagamento: str | None
    status: str
    tipo: str

@router.get("", response_model=list[ContaPagarReceberResponse])
def listar_contas():
    return [
        ContaPagarReceberResponse(
            id=1,
            descricao="Conta de luz",
            valor=Decimal("100.00"),
            data_vencimento="2023-05-01",
            data_pagamento=None,
            status="Pendente",
            tipo="Despesa",
        ),
        ContaPagarReceberResponse(
            id=2,
            descricao="Conta de água",
            valor=Decimal("50.00"),
            data_vencimento="2023-05-15",
            data_pagamento=None,
            status="Pendente",
            tipo="Despesa",
        ),
        ContaPagarReceberResponse(
            id=3,
            descricao="Conta de internet",
            valor=Decimal("30.00"),
            data_vencimento="2023-05-30",
            data_pagamento=None,
            status="Pendente",
            tipo="Despesa",
        )
    ]

@router.post("", response_model=ContaPagarReceberResponse, status_code=201)
def criar_conta(conta: ContaPagarReceberRequest):
    return ContaPagarReceberResponse(
        id=3,
        descricao=conta.descricao,
        valor=conta.valor,
        data_vencimento=conta.data_vencimento,
        data_pagamento=conta.data_pagamento,
        status=conta.status,
        tipo=conta.tipo
    )