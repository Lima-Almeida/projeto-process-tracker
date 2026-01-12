- Entendimento do problema:

O objetivo do projeto é simular um cenário de acompanhamento de processos assíncronos, onde tarefas são processadas em segundo plano e o usuário pode acompanhar seu processo.

A ideia de utilização de um usuário é a seguinte:
    -Usuário envia uma solicitação
    -Solicitação é registrada e respondida
    -Processamento inicia (e ocorre de forma assíncrona)
    -Status da tarefa é periodicamente atualizado

Nesse projeto, o processamento será um somador simples que utiliza esperas (sleep()) para simular o atraso das etapas.

- Organização:

A aplicação, conforme sugerido/estipulado, será dividida em backend e frontend, da seguinte forma:

    - Backend (Python): 
        -API Rest
        -Processamento
        -Lista em memória para db

        -models.py: deif. do modelo de dados da solicitação
        -database.py: armazenamento e funções de acesso
        -service.py: lógica de processamento
        -main.py: definição das rotas da API

    - Frontend (React + Ts):
        -Criação de novas solicitações
        -Ver solicitações existentes
        -Acompanhar solicitações

        -pages: telas principais
        -components: componentes 
        -services: comunicação com API
        -types: interfaces Ts

        -Fluxo de usuario/funcionamento:
            1-Usuário acessa a home/dashboard
            2-Clica em botão de criar uma nova lista/solicitaçao
            3-Solicitação é criada (backend)
            4-Processamento é iniciado
            5-Card é criado na dashboard

