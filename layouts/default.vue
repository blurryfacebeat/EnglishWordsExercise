<template>
  <div class="default-layout">
    <default-layout-header />

    <main>
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import DefaultLayoutHeader from '~/layouts/default/default-layout-header.vue';
</script>

<style lang="scss" scoped>
.default-layout {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  background-color: var(--blue-7);
}
</style>
