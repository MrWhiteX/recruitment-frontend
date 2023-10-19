import styles from "components/AddTask/AddTask.module.scss";
import dictionary from "dictionary/dictionary";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { taskSchema } from "schemas/taskSchema";
import CustomInput from "shared/CustomInput/CustomInput";
import { addTask } from "store/reducers/tasks";

const AddTask = () => {
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAddTask = () => {
    if (inputRef.current) {
      const { error: joiError } = taskSchema.validate(inputRef.current.value);
      if (joiError) {
        setError(joiError.details[0].message);
      } else {
        dispatch(addTask(inputRef.current.value));
        inputRef.current.value = "";
        toast.success(dictionary.toast.added);
        setError(null);
      }
    }
  };
  return (
    <div className={styles["wrapper"]} data-testid="add-task">
      <div className={styles["task-input"]}>
        <CustomInput
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTask();
            }
          }}
          buttonAction={handleAddTask}
          buttonText={dictionary.addTask.buttonText}
          placeholder={dictionary.addTask.inputPlaceholder}
        />
      </div>
      <div className={styles["error"]} data-testid="error-message">
        {error}
      </div>
    </div>
  );
};

export default AddTask;
