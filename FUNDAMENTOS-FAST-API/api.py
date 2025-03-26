from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

jogadores = {
    1: {
        "nome": "Neymar",
        "time": "PSG",
        "idade": 30
    },
    2: {
        "nome": "Cristiano",
        "time": "Real Madrid",
        "idade": 36
    }
}

class Jogador(BaseModel):
    nome: str
    time: str
    idade: int

class JogadorUpdate(BaseModel):
    nome: Optional[str] = None
    time: Optional[str] = None
    idade: Optional[int] = None

@app.get("/")
def inicio():
    return jogadores

@app.get("/jogadores/{jogador_id}")
def get_jogador(jogador_id: int):
    return jogadores[jogador_id]

@app.get("/get-jogador-time")
def get_jogador_time(time: str):
    for jogador_id in jogadores:
        if jogadores[jogador_id]["time"] == time:
            return jogadores[jogador_id]
    return {"jogador": "nao encontrado"}

@app.post("/cadastrar-jogador/{jogador_id}")
def add_jogador(jogador_id: int, jogador: Jogador):
    if jogador_id in jogadores:
        return {"jogador": "jogador ja cadastrado"}
    jogadores[jogador_id] = jogador
    return jogadores[jogador_id]

@app.delete("/deletar-jogador/{jogador_id}")
def delete_jogador(jogador_id: int):
    if jogador_id in jogadores:
        del jogadores[jogador_id]
        return {"jogador": "jogador deletado"}
    return {"jogador": "jogador nao encontrado"}


@app.put("/atualizar-jogador/{jogador_id}")
def update_jogador(jogador_id: int, jogador: JogadorUpdate):
    if jogador_id in jogadores:
        if jogador.nome != None:
            jogadores[jogador_id]["nome"] = jogador.nome
        if jogador.time != None:
            jogadores[jogador_id]["time"] = jogador.time
        if jogador.idade != None:
            jogadores[jogador_id]["idade"] = jogador.idade
        return jogadores[jogador_id]
    return {"jogador": "jogador nao encontrado"}