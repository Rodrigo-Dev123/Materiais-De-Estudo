from fastapi.testclient import TestClient
from main import app
from sqlalchemy.orm import sessionmaker
from sqlmodel import create_engine, SQLModel, Session

from shared.dependencies import get_session

client = TestClient(app)

SQL_ALCHEMY_DATABASE_URL = "sqlite:///./test.db"

engine = create_engine(
    SQL_ALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

TestSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def override_get_db():
    with Session(engine, autocommit=False, autoflush=False) as session:
        yield session

app.dependency_overrides[get_session] = override_get_db

def test_deve_listar_contas_a_pagar_e_receber():
    SQLModel.metadata.drop_all(engine)
    SQLModel.metadata.create_all(engine)

    nova_conta = {
        "descricao": "Conta de luz",
        "valor": 100.00,
        "tipo": "Pagar",
    }
    client.post("/contas-a-pagar-e-receber", json=nova_conta)

    response = client.get("/contas-a-pagar-e-receber")
    assert response.status_code == 200

    assert response.json() == [
        {
            "id": 1,
            "descricao": "Conta de luz",
            "valor": 100.00,
            "tipo": "Pagar",
        }
    ]

    assert response.status_code == 200

def test_deve_criar_contas_a_pagar_e_receber():
    SQLModel.metadata.drop_all(engine)
    SQLModel.metadata.create_all(engine)
  
    nova_conta1 = {
        "descricao": "Conta de luz",
        "valor": '100.00',
        "tipo": "Pagar",
    }

    nova_conta2 = {
        "descricao": "Aluguel",
        "valor": '1000.00',
        "tipo": "Pagar",
    }

    response1 = client.post("/contas-a-pagar-e-receber", json=nova_conta1)
    response2 = client.post("/contas-a-pagar-e-receber", json=nova_conta2)

    assert response1.status_code == 201
    assert response2.status_code == 201

    assert response1.json() == {
        "id": 1,
        "descricao": "Conta de luz",
        "valor": 100.0,
        "tipo": "Pagar"
    }

    assert response2.json() == {
        "id": 2,
        "descricao": "Aluguel",
        "valor": 1000.0,
        "tipo": "Pagar",
    }

def test_deve_atualizar_contas_a_pagar_e_receber():
    SQLModel.metadata.drop_all(engine)
    SQLModel.metadata.create_all(engine)

    response = client.post("/contas-a-pagar-e-receber", json={
        "descricao": "Conta de luz",
        "valor": '100.00',
        "tipo": "Pagar",
    })

    id_contas_a_pagar_e_receber = response.json()['id']

    response = client.put(f"/contas-a-pagar-e-receber/{id_contas_a_pagar_e_receber}", json={
        "descricao": "Aluguel",
        "valor": '1000.00',
        "tipo": "Pagar",
    })

    assert response.status_code == 200
    assert response.json()['valor'] == 1000.0


def test_deve_retornar_erro_quando_a_descricao_for_menor_que_3():
    SQLModel.metadata.drop_all(engine)
    SQLModel.metadata.create_all(engine)

    nova_conta = {
        "descricao": "Te",
        "valor": '100.00',
        "tipo": "Despesa",
    }

    response = client.post("/contas-a-pagar-e-receber", json=nova_conta)

    assert response.status_code == 422
    assert response.json()['detail'][0]['loc'] == ["body", "descricao"]

def test_deve_retornar_erro_quando_exeder_a_descricao():
    SQLModel.metadata.drop_all(engine)
    SQLModel.metadata.create_all(engine)

    nova_conta = {
        "descricao": "Conta de luz testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "valor": '100.00',
        "tipo": "Despesa",
    }

    response = client.post("/contas-a-pagar-e-receber", json=nova_conta)

    assert response.status_code == 422
    assert response.json()['detail'][0]['loc'] == ["body", "descricao"]

def test_deve_retornar_erro_quando_valor_for_zero_ou_menor():
    SQLModel.metadata.drop_all(engine)
    SQLModel.metadata.create_all(engine)

    nova_conta = {
        "descricao": "Test",
        "valor": '0',
        "tipo": "Receber",
    }

    response = client.post("/contas-a-pagar-e-receber", json=nova_conta)

    nova_conta = {
        "descricao": "Test",
        "valor": '-1',
        "tipo": "Receber",
    }

    response = client.post("/contas-a-pagar-e-receber", json=nova_conta)

    assert response.status_code == 422
    assert response.json()['detail'][0]['loc'] == ["body", "valor"]

def test_deve_retornar_erro_quando_o_tipo_for_invalido():
    SQLModel.metadata.drop_all(engine)
    SQLModel.metadata.create_all(engine)

    nova_conta = {
        "descricao": "Test",
        "valor": '100',
        "tipo": "Inválido",
    }

    response = client.post("/contas-a-pagar-e-receber", json=nova_conta)

    assert response.status_code == 422
    assert response.json()['detail'][0]['loc'] == ["body", "tipo"]

