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

  border: 1px solid var(--black-opacity-0-5);
  background-color: var(--main-white);
  border-radius: 6px;
  cursor: pointer;

  @include defaultTransition(all);

  @media (any-hover: hover) {
    &:hover {
      background-color: var(--blue-7);
      border-color: var(--white-opacity-0-5);

      .base-button__text {
        color: var(--main-white);
      }
    }
  }

  &:active {
    background-color: var(--blue-7);
    border-color: var(--white-opacity-0-5);
    filter: contrast(2);

    .base-button__text {
      color: var(--main-white);
    }
  }

  &__text {
    text-transform: uppercase;
    color: var(--main-black);
    font-size: var(--fz-medium);
    font-weight: var(--fw-bold);

    @include defaultTransition(all);
  }
}
</style>
