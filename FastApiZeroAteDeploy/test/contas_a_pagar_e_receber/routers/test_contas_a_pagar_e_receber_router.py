from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_deve_listar_contas_a_pagar_e_receber():
    response = client.get("/contas-a-pagar-e-receber")
    assert response.status_code == 200

    assert response.json()

    assert response.status_code == 200

def test_deve_criar_contas_a_pagar_e_receber():
    nova_conta = {
        "descricao": "Conta de luz",
        "valor": '100.00',
        "data_vencimento": "2023-05-01",
        "data_pagamento": None,
        "status": "Pendente",
        "tipo": "Despesa",
    }

    nova_conta_copy = nova_conta.copy()
    nova_conta_copy["id"] = 3

    response = client.post("/contas-a-pagar-e-receber", json=nova_conta)
    assert response.status_code == 201
    assert response.json() == nova_conta_copy