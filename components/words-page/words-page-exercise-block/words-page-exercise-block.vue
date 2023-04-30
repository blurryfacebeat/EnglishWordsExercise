<template>
  <div class="words-page__exercise-block">
    <div class="exercise-block__word-wrapper">
      <nuxt-img src="/img/girl.png" />

      <div class="exercise-block__word-block">
        <speach-module :text="'Cucumber'" class="exercise-block__speach-module" />

        <p class="exercise-block__word">Cucumber</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SpeachModule from '~/components/speach-module/speach-module.vue';
</script>

<style lang="scss" scoped>
.words-page__exercise-block {
  display: flex;
  align-items: center;

  .exercise-block__word-wrapper {
    display: flex;
    align-items: center;
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
