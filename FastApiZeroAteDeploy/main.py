from fastapi import FastAPI
from contas_a_pagar_e_receber.routers import contas_a_pagar_e_receber_router

app = FastAPI()

@app.get("/")
async def root() -> dict:
    return {"message": "Hello World"}

app.include_router(contas_a_pagar_e_receber_router.router, prefix="/contas-a-pagar-e-receber")

""" if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001) """ 