<template>
  <q-item
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    v-ripple
    clickable
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
  >
    <q-item-section side top>
      <q-checkbox :value="task.completed" class="no-pointer-event"></q-checkbox>
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strike': task.completed }">{{
        task.name
      }}</q-item-label>
    </q-item-section>

    <q-item-section side>
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
      <q-btn
        @click.stop="promptToDelete(id)"
        flat
        round
        color="red"
        icon="delete"
        dense
      ></q-btn>
    </q-item-section>
  </q-item>
</template>
<script>
import { mapGetters } from "vuex";
import { defineComponent } from "vue";

import { mapActions } from "vuex";

export default {
  props: ["task", "id"],
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
};
</script>
<style></style>
<!-- @click="updateTask({ id: id, updates: { completed: !completed } })" -->
