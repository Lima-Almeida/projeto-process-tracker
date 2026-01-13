'''
Endpoints:
/requests (POST)
/requests (GET)
/requests/{id} (GET)
'''

from fastapi import FastAPI, HTTPException, BackgroundTasks
from database import add_request, get_request, get_all_requests
from models import Request
from service import run_process
import uuid

app = FastAPI()

@app.post("/requests")
def create_request(number_list: list[float], background_tasks: BackgroundTasks):
    if len(number_list) == 0:
        raise HTTPException(
            status_code=400,
            detail="A lista de números não pode estar vazia"
        )
    
    id = str(uuid.uuid4())
    request = Request(id, "pending", 0, ["Solicitação criada"], None, number_list)
    
    add_request(request)

    background_tasks.add_task(run_process, request.id)
    
    return {
        "id": id,
        "status": request.status
    }

@app.get("/requests")
def list_requests():
    return get_all_requests()

@app.get("/requests/{id}")
def get_request_by_id(id: str):
    request = get_request(id)
    if not request == None:
        return {
            "id": request.id,
            "status": request.status,
            "progress": request.progress,
            "logs": request.logs,
            "result": request.result,
            "list": request.numbers
        }
    else:
        raise HTTPException(
            status_code=404,
            detail="Solicitação não encontrada"
        )
