<template>
  <label class="base-input">
    <p class="base-input__label" v-if="label">{{ label }}</p>

    <input
      class="base-input__input"
      type="text"
      :value="modelValue"
      @input="onInput($event)"
      :placeholder="$t('defaults.translationMessage')"
    />
  </label>
</template>

<script lang="ts" setup>
interface IProps {
  modelValue: string;
  label?: string;
  maxWidth?: string;
  height?: string;
}

const { maxWidth, height } = withDefaults(defineProps<IProps>(), {
  maxWidth: 'max-content',
  height: '32px',
});

interface IEmits {
  (e: 'update:modelValue', modelValue: string): void;
}

const emit = defineEmits<IEmits>();

const onInput = (event: InputEvent) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value.trim());
};
</script>

<style lang="scss" scoped>
.base-input {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  max-width: v-bind(maxWidth);

  &__input {
    padding: 0 10px;
    height: v-bind(height);

    font-size: var(--fz-medium);
    font-weight: var(--fw-meduim);

    outline: none;
    border-radius: 6px;
    border: 2px solid var(--black-opacity-0-15);

    @include defaultTransition();

    @media (any-hover: hover) {
      &:hover {
        border-color: var(--blue-6);
      }
    }

    &:active {
      border-color: var(--blue-7);
    }

    &:focus {
      border-color: var(--blue-7);
    }
  }
}
</style>
