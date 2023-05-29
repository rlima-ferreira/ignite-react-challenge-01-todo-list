import { FormEvent, useState } from 'react';
import { v4 } from 'uuid';
import styles from './App.module.css';
import Logo from './assets/Logo.svg';
import EmptyList from './components/EmptyList';
import FormCreateTask from './components/FormCreateTask';
import { ITask, Task } from './components/Task';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const tasksCompleted = tasks.filter((task) => !!task.isCompleted).length;

  function handleCreateTask(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    setTasks((state) => [
      ...state,
      { id: v4(), text: String(formData.get('task')), isCompleted: false },
    ]);
    ev.currentTarget.reset();
  }

  function removeTask(id: string) {
    const tasksCopy = tasks.filter((task) => task.id !== id);
    setTasks(tasksCopy);
  }

  function toggleCheckTask(id: string) {
    const tasksCopy = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(tasksCopy);
  }

  return (
    <>
      <header className={styles.header}>
        <img src={Logo} />
      </header>
      <main className={styles.content}>
        <FormCreateTask onSubmit={handleCreateTask} />
        <div className={styles.list}>
          <header>
            <strong>
              Tarefas criadas <span>{tasks.length}</span>
            </strong>
            <strong>
              Concluídas{' '}
              <span>
                {tasks.length === 0
                  ? '0'
                  : `${tasksCompleted} de ${tasks.length}`}
              </span>
            </strong>
          </header>
          <div>
            {tasks.length === 0 ? (
              <EmptyList />
            ) : (
              tasks.map((task) => (
                <Task
                  key={task.id}
                  data={task}
                  onCheck={toggleCheckTask}
                  onRemove={removeTask}
                />
              ))
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
