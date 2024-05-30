<template>
  <q-item
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    v-ripple
    clickable
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
  >
    <q-item-section side top>
      <q-checkbox
        v-model="taskCompleted"
        clickable
        @click="$emit('changeStatus')"
        @changeTheBox="taskCompleted = task.completed"
      ></q-checkbox>
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strike': task.completed }">{{
        task.name
      }}</q-item-label>
    </q-item-section>

    <q-item-section v-if="task.dueDate" side>
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event" size="18px" class="q-mr-xs" />
        </div>
        <div class="column">
          <q-item-label caption class="row justify-end">
            {{ task.dueDate }}
          </q-item-label>
          <q-item-label caption class="row justify-end">
            <small>{{ task.dueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn
          @click.stop="showEditTask = true"
          flat
          round
          color="blue"
          icon="edit"
          dense
        ></q-btn>

        <q-btn
          @click.stop="promptToDelete(id)"
          flat
          round
          color="red"
          icon="delete"
          dense
        ></q-btn>
      </div>
    </q-item-section>

    <q-dialog v-model="showEditTask">
      <q-card>
        <modal-header @close="showEditTask = false">Edit Task</modal-header>
        <q-card-section>
          <div>
            <q-input
              label="task name"
              autofocus
              outlined
              class="col"
              :rules="[(val) => !!val || 'Field is required']"
            ></q-input>
          </div>
          <div class="row q-mb-sm">
            <q-input outlined label="Due Date" class="col" />
            <template>
              <q-icon name="event" class="cursor-pointer"></q-icon>
            </template>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-item>
</template>
<script>
import { mapGetters } from "vuex";
import { defineComponent } from "vue";

import { mapActions } from "vuex";

export default {
  props: ["task", "id", "status"],
  data() {
    return {
      showEditTask: false,
      taskCompleted: this.status,
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure you want to delete this task?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          console.log("Task Deleted");
          this.deleteTask(id);
        });
    },
  },
  components: {
    // "edit-task": require("components/Tasks/Modals/EditTask.vue").default,
    "modal-header": require("components/Tasks/Modals/Shared/ModalHeader.vue")
      .default,
  },
  computed: {
    ...mapGetters("tasks", ["tasks"]),
  },
  watch: {
    status() {
      this.taskCompleted = this.status;
    },
  },
};
</script>
<style></style>
<!-- @click="updateTask({ id: id, updates: { completed: !completed } })" -->
