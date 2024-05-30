import { mapActions } from 'vuex'; import { toRefs } from 'vue'; import { toRefs
} from 'vue'; import { LogarithmicScale } from 'chart.js';
<template>
  <q-card>
    <modal-header @close="close"> Add Task </modal-header>
    <form @submit="submitForm">
      <q-card-section class="q-pt-none">
        <!-- <div class="row q-mb-sm">
          <q-input
            autofocus
            outlined
            v-model="taskToSubmit.name"
            label="Task Name"
            class="col"
            :rules="[(val) => !!val || 'Field is required']"
            ref="name"
          />
        </div> -->
        <modal-task-name
          :name="taskToSubmit.name"
          @name-change="taskToSubmit.name = $event"
        ></modal-task-name>
        <div class="row q-mb-sm">
          <!-- <q-input outlined v-model="taskToSubmit.dueDate" label="Due Date">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="taskToSubmit.dueDate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input> -->
          <TaskDate
            @change-date="taskToSubmit.dueDate = $event"
            :date="taskToSubmit.dueDate"
          ></TaskDate>
        </div>
        <div v-if="taskToSubmit.dueDate" class="row q-mb-sm">
          <!-- <q-input outlined v-model="taskToSubmit.dueTime" label="Due Time">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="taskToSubmit.dueTime">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input> -->
          <TaskTime
            :time="taskToSubmit.dueTime"
            @change-time="taskToSubmit.dueTime = $event"
          ></TaskTime>
        </div>
      </q-card-section>

      <q-card-actions class="row">
        <q-space></q-space>
        <q-btn label="Save" color="primary" type="submit" />
      </q-card-actions>
    </form>
  </q-card>
</template>
<script>
import { mapActions } from "vuex";
import header from "/home/yusuf/learning-project/src/components/Tasks/Modals/Shared/ModalHeader.vue";
import TaskDate from "/home/yusuf/learning-project/src/components/Tasks/Modals/Shared/ModalTaskDate.vue";
import TaskTime from "/home/yusuf/learning-project/src/components/Tasks/Modals/Shared/ModalTaskTime.vue";
export default {
  data() {
    return {
      taskToSubmit: {
        name: "",
        completed: false,
        dueDate: "",
        dueTime: "",
      },
    };
  },

  methods: {
    ...mapActions("tasks", ["addTask"]),
    submitForm() {
      console.log("submitForm");
      // this.$refs.name.validate();
      // console.log(this.$refs.name);
      // if (!this.$refs.name.hasError) {
      this.submitTask();
      // console.log("submitted");
      // }
    },
    submitTask() {
      this.addTask(this.taskToSubmit);
      this.close();
    },
    close() {
      this.$emit("close");
    },
  },
  components: {
    "modal-header": require("components/Tasks/Modals/Shared/ModalHeader.vue")
      .default,
    "modal-task-name":
      require("components/Tasks/Modals/Shared/ModalTaskName.vue").default,

    TaskDate,
    TaskTime,
  },
};
</script>
