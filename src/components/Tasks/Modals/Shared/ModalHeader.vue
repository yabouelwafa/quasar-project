<template>
  <q-card-section class="row">
    <div class="text-h6"><slot></slot></div>
    <q-space></q-space>
    <q-btn
      flat
      round
      color="primary"
      icon="close"
      @click="$emit('close')"
      clickable
    />
  </q-card-section>
</template>
<script></script>
