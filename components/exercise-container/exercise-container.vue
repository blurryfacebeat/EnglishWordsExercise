<template>
  <div class="exercise-container">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.exercise-container {
  width: 100%;
  height: 100%;
  max-height: 50vh;
  max-width: 700px;
  overflow: auto;
  padding: 45px;

  border-radius: 20px;
  background-color: var(--main-white);
  box-shadow: 3px 3px 10px 5px var(--black-opacity-0-15);
}
</style>
