import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export interface ITask {
  id: string;
  text: string;
  isCompleted: boolean;
}

interface IProps {
  data: {
    id: string;
    text: string;
    isCompleted: boolean;
  };
  onCheck: (id: string) => void;
  onRemove: (id: string) => void;
}

export function Task({ data, ...props }: IProps) {
  return (
    <div className={styles.item} data-completed={data.isCompleted}>
      <input
        type="checkbox"
        checked={data.isCompleted}
        onChange={() => props.onCheck(data.id)}
      />
      <p>{data.text}</p>
      <button type="button" onClick={() => props.onRemove(data.id)}>
        <Trash size={24} />
      </button>
    </div>
  );
}
