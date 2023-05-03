<template>
  <div class="words-page__exercise-answer">
    <base-input v-model="inputValue" />

    <base-button @click="checkAnswer">{{ $t('defaults.checkMessage') }}</base-button>
  </div>
</template>

<script lang="ts" setup>
import { Ref } from 'vue';

import { ICheckWordResponse } from '~/server/api/checkWord.post';

interface IProps {
  word: string;
}

const { word } = defineProps<IProps>();

interface IEmits {
  (e: 'checkAnswer', success: boolean): void;
}

const emit = defineEmits<IEmits>();

const inputValue: Ref<string> = ref('');

const checkAnswer = async () => {
  const response: ICheckWordResponse = await $fetch('/api/checkWord', {
    method: 'POST',
    body: {
      enWord: word,
      word: inputValue.value,
    },
  });

  console.log(321, response);

  emit('checkAnswer', response.success);

  return response.success;
};
</script>

<style lang="scss" scoped>
.words-page__exercise-answer {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
