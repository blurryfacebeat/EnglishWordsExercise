<template>
  <div class="landing-page">
    <index-page-decorate-circle />

    <div class="landing-page__wrapper">
      <h1 class="landing-page__title title-shadow">English Words Exercise</h1>

      <h3 class="landing-page__sub-title title-shadow">
        {{ $t('index.titleMessage') }}
      </h3>

      <base-button @click="onStartButtonClick" width="124px">{{ $t('index.startButtonMessage') }}</base-button>

      <index-page-locale-switcher />
    </div>
  </div>
</template>

<script lang="ts" setup>
const localeRoute = useLocaleRoute();

import IndexPageLocaleSwitcher from '~/components/index-page/index-page-locale-switcher.vue';
import IndexPageDecorateCircle from '~/components/index-page/index-page-decorate-circle.vue';

const onStartButtonClick = () => {
  const route = localeRoute({ name: 'sentence-page' });

  if (route) return navigateTo(route.fullPath);
};
</script>

<style lang="scss" scoped>
@keyframes BgAnimate {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

.landing-page {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: linear-gradient(to right, var(--black-1), var(--blue-1), var(--blue-2));
  background-size: 600% 600%;
  animation: BgAnimate 20s ease infinite;

  &__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 2;
    gap: 24px;
  }

  .title-shadow {
    text-shadow: var(--black-opacity-0-35) 3px 3px 15px;
  }

  &__title {
    font-size: var(--fz-big-title);
    font-weight: var(--fw-extra-bold);
  }

  &__sub-title {
    max-width: 700px;
    text-align: center;

    font-size: var(--fz-small-title);
    font-weight: var(--fw-meduim);
  }
}
</style>
