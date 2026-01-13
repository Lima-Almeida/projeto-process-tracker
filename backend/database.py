'''
Formato:
{
"id": "uuid",
"status": "pending",
"progress": 0,
"logs": ["Solicitação criada"],
"result": null,
"list": number_list
}

status possíveis:
-pending
-processing
-completed
-error
'''

from models import Request

requests = []

def add_request(request: Request):
    requests.append(request)
    return

def get_all_requests():
    return requests

def get_request(id: str):
    for request in requests:
        if request.id == id:
            return request
    return None
