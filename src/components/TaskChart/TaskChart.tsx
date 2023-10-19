import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import dictionary from "dictionary/dictionary";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import styles from "components/TaskChart/TaskChart.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskChart = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const completedTasks = tasks.filter((task) => task.completed).length;
  const activeTasks = tasks.length - completedTasks;

  const state = {
    labels: [dictionary.chart.labelOne, dictionary.chart.labelTwo],
    datasets: [
      {
        data: [completedTasks, activeTasks],
        backgroundColor: ["#A0D5A8", "#C0C0C0"],
        hoverBorderColor: ["#A0D5A8", "#C0C0C0"],
        hoverBackgroundColor: ["#A0D5A8", "#C0C0C0"],
        hoverBorderWidth: 3,
        offset: 5,
        borderRadius: 10,
      },
    ],
  };
  // eslint-disable-next-line
  const options: any = {
    cutoutPercentage: 10,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: {
            // eslint-disable-next-line
            dataset: any;
            datasetIndex: number;
            dataIndex: number;
            chart: { data: { datasets: { data: number[] }[] } };
          }) {
            const dataset = context.chart.data.datasets[context.datasetIndex];
            const total = dataset.data.reduce((acc, value) => acc + value, 0);
            const value = dataset.data[context.dataIndex];
            const percentage = ((value / total) * 100).toFixed(2);

            return `Amount: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return tasks.length !== 0 ? (
    <div className={styles["chart-wrapper"]}>
      <div className={styles["chart"]}>
        <Doughnut data={state} options={options} />
      </div>
    </div>
  ) : null;
};

export default TaskChart;
