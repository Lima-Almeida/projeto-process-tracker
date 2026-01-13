from database import get_request
from time import sleep

def run_process(request_id: str):
    request = get_request(request_id)
    if not request == None:
        request.logs.append("Iniciando processamento...")
        request.status = "processing"

        sleep(3)
        request.logs.append("Validando dados...")
        request.progress = 30

        sleep(5)
        request.logs.append("Calculando soma...")
        request.progress = 70
        total = 0
        for number in request.numbers:
            total += number

        sleep(3)

        request.result = total
        request.progress = 100
        request.status = "completed"
        request.logs.append("Finalizado com sucesso!")

    else:
        return
    return