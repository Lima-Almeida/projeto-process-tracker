# Process Tracker Project

Asynchronous process tracking system with FastAPI (backend) and React + TypeScript (frontend).

## 📋 Prerequisites

Before running the project, make sure you have installed:

- **Python 3.8+** - [Download Python](https://www.python.org/downloads/)
- **Node.js 16+** and **npm** - [Download Node.js](https://nodejs.org/)
- **pip** (usually comes with Python)

## 🚀 How to run the project

### Option 1: Using the automatic script (Recommended)

The project includes a PowerShell script that **automatically checks and installs** all necessary dependencies and starts both backend and frontend:

```powershell
.\start.ps1
```

The script will:
- Check and install backend dependencies (if needed)
- Check and install frontend dependencies (if needed)
- Open the backend on port 8000
- Open the frontend on port 5173
- Create separate PowerShell windows for each service

**Note:** If you get a script execution error, run this first:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Option 2: Running manually

#### Step 1: Setup and start the Backend

1. Navigate to the backend folder:
```powershell
cd backend
```

2. Create a virtual environment (recommended):
```powershell
python -m venv venv
```

3. Activate the virtual environment:
```powershell
.\venv\Scripts\Activate
```

4. Install dependencies:
```powershell
pip install -r requirements.txt
```

5. Start the server:
```powershell
uvicorn main:app --reload
```

The backend will be running at: **http://localhost:8000**

#### Step 2: Setup and start the Frontend

1. In a **new terminal**, navigate to the frontend folder:
```powershell
cd frontend
```

2. Install dependencies:
```powershell
npm install
```

3. Start the development server:
```powershell
npm run dev
```

The frontend will be running at: **http://localhost:5173**

## 🌐 Accessing the application

After starting both services, open your browser and go to:

**http://localhost:5173**

## 🛑 Stopping the application

### If you used the script:
Close the PowerShell windows that were automatically opened.

### If you ran manually:
Press `Ctrl + C` in each terminal where the services are running.

## 📁 Project Structure

```
projeto-process-tracker/
├── backend/          # FastAPI API
│   ├── main.py      # API entry point
│   ├── models.py    # Data models
│   ├── database.py  # Data management
│   └── service.py   # Processing logic
├── frontend/         # React Application
│   └── src/
│       ├── App.tsx              # Main component
│       ├── components/          # Reusable components
│       ├── services/            # API services
│       └── types/               # TypeScript definitions
└── start.ps1         # Automatic startup script
```

## 🔧 Useful commands

### Backend
```powershell
# Run tests (if available)
pytest

# View API documentation
# Access: http://localhost:8000/docs
```

### Frontend
```powershell
# Build for production
npm run build

# Check lint errors
npm run lint

# Preview build
npm run preview
```
