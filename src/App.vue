<script setup lang="ts">
import { handleFilter } from "lib_app/utils"
import ListPage from "lib_app/ListPage";
</script>

<template>
  <div>
    <h2>main_app</h2>
    <div>handleFilter: {{ handleFilter(0) }}</div>
    <ListPage></ListPage>
  </div>
</template>

<style scoped>
</style>
