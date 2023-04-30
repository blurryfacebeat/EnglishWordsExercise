<template>
  <button class="base-button">
    <span class="base-button__text">
      <slot />
    </span>
  </button>
</template>

<script lang="ts" setup>
interface IBaseButtonProps {
  maxWidth?: string;
  height?: string;
}

const { maxWidth, height } = withDefaults(defineProps<IBaseButtonProps>(), {
  maxWidth: 'max-content',
  height: '32px',
});
</script>

<style lang="scss" scoped>
.base-button {
  padding: 10px;
  width: 100%;
  max-width: v-bind(maxWidth);
  height: v-bind(height);
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--white-opacity-0-5);
  background-color: var(--blue-3);
  border-radius: 6px;
  cursor: pointer;

  @include defaultTransition(all);

  @media (any-hover: hover) {
    &:hover {
      background-color: var(--blue-4);
    }
  }

  &:active {
    background-color: var(--blue-5);
  }

  &__text {
    text-transform: uppercase;
    color: var(--main-white);
    font-size: var(--fz-medium);
    font-weight: var(--fw-bold);
  }
}
</style>
