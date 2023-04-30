<template>
  <div class="sentence-page">{{ $t('defaults.soonMessage') }}</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.sentence-page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - var(--header-height));

  text-transform: uppercase;
  font-size: var(--fz-ultra-big-title);
  font-weight: var(--fw-extra-bold);
}
</style>
