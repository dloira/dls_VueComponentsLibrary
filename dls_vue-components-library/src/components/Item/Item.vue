<template src="./item.html"></template>

<script setup>
import Button from '../Button/Button.vue';

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})
</script>
