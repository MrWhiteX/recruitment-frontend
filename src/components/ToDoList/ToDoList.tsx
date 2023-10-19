import { useSelector } from "react-redux";
import { RootState } from "store/store";
import styles from "components/ToDoList/ToDoList.module.scss";
import ToDoItem from "components/ToDoItem/ToDoItem";
import dictionary from "dictionary/dictionary";

const ToDoList = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div data-testid="to-do-list">
      <div data-testid="active-tasks">
        <h2>{dictionary.toDoList.activeTasksTitle + activeTasks.length}</h2>
        <ul className={styles["task-list"]}>
          {activeTasks.map((task) => (
            <ToDoItem key={task.id} task={task} tasks={tasks} />
          ))}
        </ul>
      </div>
      <div data-testid="completed-tasks">
        <h2>
          {dictionary.toDoList.completedTasksTitle + completedTasks.length}
        </h2>
        <ul className={styles["task-list"]}>
          {completedTasks.map((task) => (
            <ToDoItem key={task.id} task={task} tasks={tasks} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
