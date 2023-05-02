<template>
  <div class="words-page">
    <exercise-container>
      <words-page-exercise-block :words="data.words" />
    </exercise-container>
  </div>
</template>

<script lang="ts" setup>
import { IWordItem } from '~/server/wordsItems';

const { data }: Array<IWordItem> = await useLazyFetch<Array<IWordItem>>('/api/words');
</script>

<style lang="scss" scoped>
.words-page {
  width: 100%;
  height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
