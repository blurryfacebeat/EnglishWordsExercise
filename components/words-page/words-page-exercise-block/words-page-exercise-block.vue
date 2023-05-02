<template>
  <div class="words-page__exercise-block">
    <div class="exercise-block__word-wrapper">
      <nuxt-img src="/img/girl.png" />

      <div class="exercise-block__word-block">
        <speach-module :text="'Cucumber'" class="exercise-block__speach-module" />

        <p class="exercise-block__word">{{ currentWord.en }}</p>
      </div>

      <div class="exercise-block__words-counter">{{ `${currentWord.id}/${words.length}` }}</div>
    </div>

    <words-page-exercise-answer @check-answer="onCheckAnswer($event)" :word="currentWord.en" />
  </div>
</template>

<script lang="ts" setup>
import { Ref } from 'vue';

import { IWordItem } from '~/server/wordsItems';

import SpeachModule from '~/components/speach-module/speach-module.vue';

interface IProps {
  words: Array<IWordItem>;
}

const { words } = defineProps<IProps>();

const currentWord: Ref<IWordItem> = ref(words[0]);

const onCheckAnswer = (success: boolean) => {
  if (success) currentWord.value = words[currentWord.value.id];
};
</script>

<style lang="scss" scoped>
.words-page__exercise-block {
  display: flex;
  flex-direction: column;
  gap: 30px;

  .exercise-block__word-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 15px;
  }

  .exercise-block__word-block {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 15px 25px 15px 35px;
    min-height: 64px;
    min-width: 150px;

    color: var(--main-black);

    border-radius: 15px;
    border: 2px solid var(--black-opacity-0-15);

    &::before {
      content: '';
      position: absolute;
      height: 15px;
      width: 15px;
      top: 16px;
      left: 0;

      border: 2px solid var(--black-opacity-0-15);
      background-color: var(--main-white);
      border-radius: 5px;
      transform: translateZ(0) rotate(45deg);
      transform-origin: top left;
    }

    &::after {
      content: '';
      position: absolute;
      height: 30px;
      width: 15px;
      top: 16px;
      left: 0;

      background-color: var(--main-white);
    }
  }

  .exercise-block__words-counter {
    margin-left: auto;
    align-self: flex-start;

    color: var(--main-black);
  }

  .exercise-block__speach-module {
    position: absolute;
    left: 7px;
    top: 5px;
    z-index: 2;
  }

  .exercise-block__word {
    font-size: var(--fz-medium);
    font-weight: var(--fw-meduim);
    word-break: break-word;
  }
}
</style>
