<template src="./grid.html"></template>

<script setup>
  import Item from '../Item/Item.vue';

  const props = defineProps({
    meals: {
      required: true,
      type: Array,
    },
  });
</script>
