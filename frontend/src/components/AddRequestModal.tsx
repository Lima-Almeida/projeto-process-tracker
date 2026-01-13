import { useState } from "react";
import styles from "./AddRequestModal.module.css";

type AddRequestModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (numbers: number[]) => void;
};

export function AddRequestModal({
  isOpen,
  onClose,
  onSubmit,
}: AddRequestModalProps) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!input.trim()) {
      setError("Informe ao menos um número");
      return;
    }

    const numbers = input
      .split(",")
      .map((n) => Number(n.trim()))
      .filter((n) => !isNaN(n));

    if (numbers.length === 0) {
      setError("A lista deve conter apenas números");
      return;
    }

    onSubmit(numbers);
    setInput("");
    setError("");
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Adicionar processo</h2>

        <p className={styles.description}>
          Informe uma lista de números separada por vírgula
        </p>

        <textarea
          placeholder="Ex: 1, 2, 3.5, 10"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.textarea}
        />

        {error && <span className={styles.error}>{error}</span>}

        <div className={styles.actions}>
          <button className={styles.cancel} onClick={onClose}>
            Cancelar
          </button>
          <button className={styles.submit} onClick={handleSubmit}>
            Criar
          </button>
        </div>
      </div>
    </div>
  );
}
