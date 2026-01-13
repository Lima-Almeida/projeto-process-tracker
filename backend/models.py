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

class Request:
    def __init__(self, id, status, progress, logs, result, numbers):
        self.id = id
        self.status = status
        self.progress = progress
        self.logs = logs
        self.result = result
        self.numbers = numbers

    