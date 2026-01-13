import { FloatingActionButton } from "./components/CircButton";
import './App.css'

function App() {
  const handleAddRequest = () => {
    console.log("Abrir modal para adicionar processo");
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>Dashboard</h1>

      {/* cards */}

      <FloatingActionButton onClick={handleAddRequest} />
    </div>
  );
}

export default App;
