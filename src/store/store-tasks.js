import Vue from "vue";
import { uid } from "quasar";

const state = {
  tasks: {
    ID1: {
      name: "Go to Gym",
      completed: true,
      dueDate: "2025/01/01",
      dueTime: "18:30",
    },
    ID2: {
      name: "Eat",
      completed: false,
      dueDate: "2027/04/22",
      dueTime: "19:30",
    },
    ID3: {
      name: "Learn Quasar",
      completed: false,
      dueDate: "2024/09/01",
      dueTime: "02:30",
    },
  },
};

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  deleteTask(state, id) {
    console.log("delete id", id);
    // Vue.delete(state.tasks, id);
    delete state.tasks[id];
  },
  addTask(state, payload) {
    // Vue.set(state.tasks, payload.id, payload.task);
    state.tasks[payload.id] = payload.task;
  },
};

const actions = {
  updateTask({ commit }, payload) {
    // console.log("updateTasl actipm");
    // console.log("payload: ", payload);
    commit("updateTask", payload);
  },
  deleteTask({ commit }, id) {
    commit("deleteTask", id);
  },
  addTask({ commit }, task) {
    let taskId = uid();
    let payload = {
      id: taskId,
      task: task,
    };
    commit("addTask", payload);
  },
};

const getters = {
  tasks: (state) => {
    return state.tasks;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
