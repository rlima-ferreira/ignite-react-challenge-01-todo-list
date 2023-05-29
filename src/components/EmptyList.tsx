import { ClipboardText } from 'phosphor-react';
import styles from './EmptyList.module.css';

export default function EmptyList() {
  return (
    <div className={styles.container}>
      <ClipboardText size={56} />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
