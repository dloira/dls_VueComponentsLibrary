<template>
  <div class="p-8 pb-0 text-black-500">
    <h1 class="text-4xl font-bold mb-4">{{ $filters.translate('view_home_title') }}</h1>
  </div>
  <Grid :meals="meals" />
</template>

<script setup>
  import { computed, onMounted, ref } from "vue";
  // import store from "../store";
  import axiosClient from "../axiosClient.js";
 
  const meals = ref([]);

  // const activeLanguage = computed(() => store.getters.activeLanguage);

  onMounted(async () => {
    for (let i = 0; i < 12; i++) {
      axiosClient
        .get(`random.php`)
        .then(({ data }) => meals.value.push(data.meals[0]));
    }
  });
</script>
