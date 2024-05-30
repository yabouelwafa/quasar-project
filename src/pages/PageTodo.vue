<template>
  <q-page class="q-pa-md">
    <q-list v-if="Object.keys(tasks).length" bordered separator>
      <TaskComponent
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
        :status="task.completed"
        @changeStatus="task.completed = !task.completed"
        @click="updateTask"
      ></TaskComponent>
    </q-list>
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        round
        color="primary"
        size="24px"
        icon="add"
        @click="showAddTask = true"
      />
    </div>
    <q-dialog v-model="showAddTask">
      <AddTask @close="showAddTask = false"></AddTask>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import TaskComponent from "/home/yusuf/learning-project/src/components/Tasks/TaskComponent.vue";
4;
import AddTask from "/home/yusuf/learning-project/src/components/Tasks/Modals/AddTask.vue";

export default {
  data() {
    return {
      showAddTask: false,
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasks"]),
  },
  components: { TaskComponent, AddTask },
};
</script>
