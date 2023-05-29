import { PlusCircle } from 'phosphor-react';
import { FormHTMLAttributes } from 'react';
import styles from './FormCreateTask.module.css';

export default function FormCreateTask(
  props: FormHTMLAttributes<HTMLFormElement>
) {
  return (
    <form {...props} className={styles.form}>
      <input
        type="text"
        name="task"
        placeholder="Adicione uma nova tarefa"
        required
      />
      <button>
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  );
}
