<script>
export default {
  props: {
    page: String
  }
}
</script>

<template>
  <div class="pagination-pages">
    <router-link :to="{ path: '/' }">Главная</router-link>
    <div class="pagination-slesh">/</div>
    <div class="currentPage">{{ page }}</div>
  </div>
</template>

<style scoped>

</style>