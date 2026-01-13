import { useEffect, useState } from "react";
import { RequestCard } from "./components/RequestCard";
import { FloatingActionButton } from "./components/CircButton";
import { AddRequestModal } from "./components/AddRequestModal";
import './App.css'

type Request = {
  id: string;
  status: "pending" | "processing" | "completed";
  progress: number;
  logs: string[];
  result: number | null;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requests, setRequests] = useState<Request[]>([]);

  const fetchRequests = async () => {
    try {
      const response = await fetch("http://localhost:8000/requests");
      const data = await response.json();
      setRequests(data);
    } catch (error) {
      console.error("Erro ao buscar requests", error);
    }
  };

  useEffect(() => {
    fetchRequests();

    const interval = setInterval(fetchRequests, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleAddRequest = () => {
    setIsModalOpen(true);
  };

  const handleSubmitRequest = async (numbers: number[]) => {
    console.log("Enviando numeros:", numbers)

    await fetch("http://localhost:8000/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(numbers),
    });

      setIsModalOpen(false);
      fetchRequests();

  };

  return (
    <div style={{ padding: "2px", height: "100vh" }}>
      <h1>Dashboard</h1>

      {/* cards */}

      <div
        style={{
          marginTop: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          overflowY: "auto",
          maxHeight: "calc(100vh - 120px)",
          paddingRight: "8px",
        }}
      >
        {requests.map((request) => (
          <RequestCard
            key={request.id}
            id={request.id}
            status={request.status}
            progress={request.progress}
            logs={request.logs}
            result={request.result}
          />
        ))}
      </div>

      <FloatingActionButton onClick={handleAddRequest} />

      <AddRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitRequest}
      />

    </div>
  );
}

export default App;
