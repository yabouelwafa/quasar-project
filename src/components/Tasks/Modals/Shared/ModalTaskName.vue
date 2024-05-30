<template>
  <div class="row q-mb-sm">
    <q-input
      autofocus
      outlined
      label="Task Name"
      class="col"
      v-model="taskName"
      ref="name"
      :rules="[(val) => !!val || 'Field is required']"
    />
  </div>
</template>
<script>
export default {
  props: ["name"],
  data() {
    return {
      taskName: this.name,
    };
  },
  watch: {
    name() {
      this.taskName = this.name;
    },
    taskName() {
      this.$emit("nameChange", this.taskName);
    },
  },
};
</script>
<!-- @input="$emit('nameChange', taskName)" -->
