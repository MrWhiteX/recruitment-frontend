import { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import Button from "shared/Button/Button";
import CustomInput from "shared/CustomInput/CustomInput";
import { Task } from "types/types";
import styles from "components/ToDoItem/ToDoItem.module.scss";
import { useDispatch } from "react-redux";
import { toggleTask, editTask, deleteTask } from "store/reducers/tasks";
import { taskSchema } from "schemas/taskSchema";
import toast from "react-hot-toast";
import dictionary from "dictionary/dictionary";

interface IProps {
  task: Task;
  tasks: Task[];
}

const ToDoItem = ({ task, tasks }: IProps) => {
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleToggleTask = (id: number) => {
    dispatch(toggleTask(id));

    tasks.find((task) => task.id === id);
    if (task.completed === false) {
      toast(dictionary.toast.completed, {
        icon: "👏",
      });
    }
  };

  const handleEditTask = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();

    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit && !taskToEdit.completed) {
      setEditingText(taskToEdit.text);
      setEditingTaskId(id);
    }
  };

  const handleUpdateTask = (id: number) => {
    const { error: joiError } = taskSchema.validate(editingText);
    if (joiError) {
      setError(joiError.details[0].message);
      toast.error("Error. Correct the mistakes.");
    } else {
      dispatch(editTask({ id, newText: editingText }));
      toast.success(dictionary.toast.changesSaved);
      setEditingTaskId(null);
      setEditingText("");
      setError(null);
    }
  };
  return (
    <li
      className={task.completed ? `${styles.completed}` : ""}
      onClick={() => handleToggleTask(task.id)}
    >
      {editingTaskId === task.id ? (
        <>
          <CustomInput
            value={editingText}
            onChange={(value) => setEditingText(value)}
            onBlur={() => handleUpdateTask(task.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleUpdateTask(task.id);
              }
            }}
            autoFocus
          />
          <div className={styles["error"]}>{error}</div>
        </>
      ) : (
        <>
          <span onClick={(e) => handleEditTask(task.id, e)}>{task.text}</span>

          <div className={styles["action-wrapper"]}>
            {task.completed ? null : (
              <AiFillEdit onClick={(e) => handleEditTask(task.id, e)} />
            )}
            <Button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(deleteTask(task.id));

                toast.success(dictionary.toast.delete);
              }}
            >
              <span className={styles["delete-icon"]}>
                <AiFillDelete />
              </span>
            </Button>

            <span>{task.completed ? "✘" : <MdDone />}</span>
          </div>
        </>
      )}
    </li>
  );
};

export default ToDoItem;
