import React from "react";
import AddTask from "components/AddTask/AddTask";
import ToDoList from "components/ToDoList/ToDoList";
import styles from "styles/App.module.scss";
import Welcome from "components/Welcome/Welcome";
import TaskChart from "components/TaskChart/TaskChart";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <div>
        <Toaster />
      </div>
      <Welcome />
      <TaskChart />
      <div className={styles["todo-wrapper"]}>
        <div className={styles["todo"]}>
          <AddTask />
          <ToDoList />
        </div>
      </div>
    </div>
  );
};

export default App;
