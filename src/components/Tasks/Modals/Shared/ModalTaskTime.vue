<template>
  <q-input outlined v-model="taskTime" label="Due Time">
    <template v-slot:append>
      <q-icon name="access_time" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-time v-model="taskTime">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-time>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>
<script>
export default {
  props: ["time"],

  data() {
    return {
      taskTime: this.time,
    };
  },
  watch: {
    taskTime() {
      this.$emit("changeTime", this.taskTime);
    },
  },
};
</script>
