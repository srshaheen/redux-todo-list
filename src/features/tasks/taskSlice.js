import { createSlice } from "@reduxjs/toolkit";

const loadTaskFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("demoTasks");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err.message);
    return [];
  }
};

const saveTaskToLocalStorage = (tasks) => {
  localStorage.setItem("demoTasks", JSON.stringify(tasks));
};

const initialState = {
  tasks: loadTaskFromLocalStorage(),
  filter: {
    status: "all",
    search: "",
  },
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveTaskToLocalStorage(state.tasks);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTaskToLocalStorage(state.tasks);
    },

    toggleComplete: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
      saveTaskToLocalStorage(state.tasks);
    },

    editTask: (state, action) => {
      const { id, newText } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) task.text = newText;
      saveTaskToLocalStorage(state.tasks);
    },

    setStatusFilter: (state, action) => {
      state.filter.status = action.payload;
    },
    setSearchFilter: (state, action) => {
      state.filter.search = action.payload;
    },
  },
});

export const { addTask, deleteTask, toggleComplete, editTask, setStatusFilter, setSearchFilter } = taskSlice.actions;

export default taskSlice.reducer;
