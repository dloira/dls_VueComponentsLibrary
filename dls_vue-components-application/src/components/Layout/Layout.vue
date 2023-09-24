<template src="./layout.html"></template>

<script setup>
  import store from "../../store";

  store.dispatch('setLanguage', navigator.language);

</script>
