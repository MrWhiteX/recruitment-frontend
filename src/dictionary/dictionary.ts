const dictionary = {
  welcome: {
    mainTitle: "Plan your day with Day Planner App",
    subtitle: "Wanna plan?",
    cards: {
      firstTitle: "Define Tasks",
      firstDesc:
        "Determine what needs to be done, set priorities, and add all your tasks in an easily accessible place.",
      secondTitle: "Monitor Progress",
      secondDesc:
        'Track your tasks, mark them as "completed", and enjoy the satisfaction of each accomplished task.',
      thirdTitle: "Analyze and Adjust",
      thirdDesc:
        "Review how you're handling tasks, adjust priorities, and keep your productivity at its peak.",
    },
  },
  addTask: {
    inputPlaceholder: "Add new task..",
    buttonText: "Add",
  },
  toDoList: {
    activeTasksTitle: "Active Tasks: ",
    completedTasksTitle: "Completed Tasks: ",
  },
  chart: {
    labelOne: "Completed Tasks",
    labelTwo: "Active Tasks",
  },
  validation: {
    addTaskValidation: {
      empty: "Value cannot be empty.",
      maxLength:
        "The entered text is too long - the maximum length is {#limit} characters.",
      pattern: "Invalid characters in the sentence.",
    },
  },

  toast: {
    added: "Successfully added new task!",
    changesSaved: "Changes saved!",
    completed: "Good Job!",
    delete: "Successfully deleted!",
  },
};

export default dictionary;
