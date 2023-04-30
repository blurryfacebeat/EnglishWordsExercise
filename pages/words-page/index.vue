<template>
  <div class="words-page">
    <exercise-container>
      <words-page-exercise-block />
    </exercise-container>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.words-page {
  width: 100%;
  height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
