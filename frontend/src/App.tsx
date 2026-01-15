import { useEffect, useState } from "react";
import { RequestCard } from "./components/RequestCard";
import { FloatingActionButton } from "./components/CircButton";
import { AddRequestModal } from "./components/AddRequestModal";
import type { Request } from "./types/Request";
import { createRequest, getRequests } from "./services/api";
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requests, setRequests] = useState<Request[]>([]);

  const fetchRequests = async () => {
    try {
      const data = await getRequests();
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
    //console.log("Enviando numeros:", numbers)

    await createRequest(numbers);
    setIsModalOpen(false);
    fetchRequests();

  };

  return (
    <div style={{ padding: "24px", height: "100vh", overflow: "hidden" }}>
      <h1>Dashboard</h1>

      {/* cards */}

      <div
        style={{
          marginTop: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          overflowY: "auto",
          overflowX: "hidden",
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
