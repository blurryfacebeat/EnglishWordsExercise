<template>
  <div class="landing-page">
    <div ref="decorateCircleRef" class="landing-page__decorate-circle" />

    <div class="landing-page__wrapper">
      <h1 class="landing-page__title title-shadow">English Words Exercise</h1>

      <h3 class="landing-page__sub-title title-shadow">
        This app is a copy of sentence and word building exercises from various language learning websites
      </h3>

      <base-button @click="$router.push('/sentence-page')" width="124px">Start</base-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref } from 'vue';

const decorateCircleRef: Ref<HTMLDivElement> = ref(null);
const mouseMoveHandlerDispose: Ref<Function> = ref(null);
const decorateCircleSize: Ref<string> = ref('100px');

const mouseMoveHandlerWithDispose = () => {
  const handlerFunction = (event: MouseEvent) => {
    window.requestAnimationFrame(() => {
      if (!decorateCircleRef.value.style.opacity) decorateCircleRef.value.style.opacity = '1';

      decorateCircleRef.value.style.top = `${event.clientY - parseInt(decorateCircleSize.value, 10) / 2}px`;
      decorateCircleRef.value.style.left = `${event.clientX - parseInt(decorateCircleSize.value, 10) / 2}px`;
    });
  };

  document.addEventListener('mousemove', handlerFunction);

  return () => document.removeEventListener('mousemove', handlerFunction);
};

onMounted(() => {
  mouseMoveHandlerDispose.value = mouseMoveHandlerWithDispose();
});

onBeforeUnmount(() => {
  mouseMoveHandlerDispose.value();
});
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

  cursor: none;
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
  }

  &__decorate-circle {
    position: absolute;
    top: 0;
    left: 0;
    width: v-bind(decorateCircleSize);
    height: v-bind(decorateCircleSize);
    z-index: 1;

    box-shadow: 0 0 100px 100px var(--blue-opacity-0-15);
    background-color: var(--blue-opacity-0-15);
    opacity: 0;
    border-radius: 100%;
    @include defaultTransition(all);
  }

  .title-shadow {
    text-shadow: var(--black-opacity-0-35) 3px 3px 15px;
  }

  &__title {
    margin-bottom: 24px;

    font-size: var(--fz-big-title);
    font-weight: var(--fw-extra-bold);
  }

  &__sub-title {
    margin-bottom: 18px;
    max-width: 700px;
    text-align: center;

    font-size: var(--fz-small-title);
    font-weight: var(--fw-meduim);
  }
}
</style>
