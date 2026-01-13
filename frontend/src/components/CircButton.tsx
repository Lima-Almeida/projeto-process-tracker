import plusIcon from "../assets/plus.png";
import styles from "./CircButton.module.css";

type FloatingActionButtonProps = {
  onClick: () => void;
};

export function FloatingActionButton({ onClick }: FloatingActionButtonProps) {
  return (
    <button className={styles.fab} onClick={onClick}>
      <img src={plusIcon} alt="Adicionar" className={styles.icon} />
    </button>
  );
}