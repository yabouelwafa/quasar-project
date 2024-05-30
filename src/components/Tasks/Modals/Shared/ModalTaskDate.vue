<template>
  <q-input outlined v-model="taskDate" label="Due Date">
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-date v-model="taskDate">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>
<script>
export default {
  data() {
    return {
      taskDate: this.date,
    };
  },
  props: ["date"],
  watch: {
    taskDate() {
      this.$emit("changeDate", this.taskDate);
    },
  },
};
</script>
