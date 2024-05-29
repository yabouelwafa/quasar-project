<template>
  <q-page class="flex flex-center">
    <p>Settings Page</p>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",

  methods: {
    changePages() {
      this.$router.push("/");
    },
  },
});
</script>
