import styles from "./RequestCard.module.css";

type RequestCardProps = {
  id: string;
  status: "pending" | "processing" | "completed";
  progress: number;
  logs: string[];
  result: number | null;
};

export function RequestCard({
    id,
    status,
    progress,
    logs,
    result,

}: RequestCardProps) {
    const lastLog = logs.length > 0 ? logs[logs.length - 1] : "";

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.header}>
          <span className={styles.id}>ID: {id.slice(0, 8)}</span>
          <span className={`${styles.status} ${styles[status]}`}>
            {status}
          </span>
        </div>

        <div className={styles.progressWrapper}>
          <div
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className={styles.log}>{lastLog}</p>
      </div>

      {status === "completed" && result !== null && (
        <div className={styles.right}>
          <span className={styles.resultLabel}>Resultado</span>
          <span className={styles.resultValue}>{result}</span>
        </div>
      )}
    </div>
  );
}