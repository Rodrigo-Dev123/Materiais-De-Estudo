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
        "tipo": "Despesa",
    }

    response = client.post("/contas-a-pagar-e-receber", json=nova_conta)
    assert response.status_code == 201

    assert response.json() == {
        "id": response.json()["id"],
        "descricao": "Conta de luz",
        "valor": 100.0,
        "tipo": "Despesa"
    }