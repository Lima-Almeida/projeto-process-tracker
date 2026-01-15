# Script para iniciar o projeto Process Tracker
# Este script verifica e instala dependências automaticamente, depois inicia o backend e frontend

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Iniciando Process Tracker..." -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se estamos no diretório correto
if (-not (Test-Path "backend") -or -not (Test-Path "frontend")) {
    Write-Host "ERRO: Execute este script no diretório raiz do projeto!" -ForegroundColor Red
    exit 1
}

# Verificar e instalar dependências do Backend
Write-Host "Verificando dependências do Backend..." -ForegroundColor Cyan
$backendDepsInstalled = $false
try {
    $result = python -c "import fastapi, uvicorn" 2>$null
    if ($LASTEXITCODE -eq 0) {
        $backendDepsInstalled = $true
        Write-Host "  Dependências do backend já instaladas!" -ForegroundColor Green
    }
} catch {
    $backendDepsInstalled = $false
}

if (-not $backendDepsInstalled) {
    Write-Host "  Instalando dependências do backend..." -ForegroundColor Yellow
    Push-Location backend
    pip install -r requirements.txt
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  Dependências do backend instaladas com sucesso!" -ForegroundColor Green
    } else {
        Write-Host "  ERRO ao instalar dependências do backend!" -ForegroundColor Red
        Pop-Location
        exit 1
    }
    Pop-Location
}

# Verificar e instalar dependências do Frontend
Write-Host "Verificando dependências do Frontend..." -ForegroundColor Cyan
if (-not (Test-Path "frontend\node_modules")) {
    Write-Host "  Instalando dependências do frontend..." -ForegroundColor Yellow
    Push-Location frontend
    npm install
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  Dependências do frontend instaladas com sucesso!" -ForegroundColor Green
    } else {
        Write-Host "  ERRO ao instalar dependências do frontend!" -ForegroundColor Red
        Pop-Location
        exit 1
    }
    Pop-Location
} else {
    Write-Host "  Dependências do frontend já instaladas!" -ForegroundColor Green
}

Write-Host ""
Write-Host "Iniciando serviços..." -ForegroundColor Cyan
Write-Host ""

# Iniciar Backend
Write-Host "Iniciando Backend (FastAPI)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\backend'; Write-Host 'Backend rodando em http://localhost:8000' -ForegroundColor Green; uvicorn main:app --reload"

# Aguardar um pouco antes de iniciar o frontend
Start-Sleep -Seconds 2

# Iniciar Frontend
Write-Host "Iniciando Frontend (Vite)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\frontend'; Write-Host 'Frontend rodando em http://localhost:5173' -ForegroundColor Yellow; npm run dev"

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Projeto iniciado com sucesso!" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Backend:  http://localhost:8000" -ForegroundColor Green
Write-Host "Frontend: http://localhost:5173" -ForegroundColor Yellow
Write-Host ""
Write-Host "Para parar o projeto, feche as janelas do PowerShell abertas." -ForegroundColor White
