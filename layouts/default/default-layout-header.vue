<template>
  <div class="default-layout__header">
    <locale-switcher />

    <default-layout-header-links />
  </div>
</template>

<script lang="ts" setup>
import DefaultLayoutHeaderLinks from '~/layouts/default/default-layout-header-links.vue';
</script>

<style lang="scss" scoped>
.default-layout__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
  padding: 30px;
}
</style>
