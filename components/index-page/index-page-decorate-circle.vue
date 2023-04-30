<template>
  <div ref="decorateCircleRef" class="landing-page__decorate-circle" />
</template>

<script lang="ts" setup>
import { Ref } from 'vue';

const decorateCircleRef: Ref<HTMLDivElement> = ref(null);
const mouseMoveHandlerDispose: Ref<Function> = ref(null);
const decorateCircleSize: Ref<string> = ref('100px');

const mouseMoveHandlerWithDispose = () => {
  const handlerFunction = (event: MouseEvent) => {
    window.requestAnimationFrame(() => {
      if (decorateCircleRef.value?.style) {
        if (!decorateCircleRef.value.style.opacity) decorateCircleRef.value.style.opacity = '1';

        decorateCircleRef.value.style.top = `${event.clientY - parseInt(decorateCircleSize.value, 10) / 2}px`;
        decorateCircleRef.value.style.left = `${event.clientX - parseInt(decorateCircleSize.value, 10) / 2}px`;
      }
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
.landing-page__decorate-circle {
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
</style>
