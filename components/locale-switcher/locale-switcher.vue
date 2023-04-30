<template>
  <div class="landing-page__locale-switcher">
    <nuxt-link
      v-for="[key, value] in Object.entries(I18N_LOCALE)"
      :key="value"
      :to="switchLocalePath(value)"
      class="locale-switcher__item"
      active-class="locale-switcher__item_active"
    >
      {{ key }}
    </nuxt-link>
  </div>
</template>

<script lang="ts" setup>
import { I18N_LOCALE } from '~/i18n/i18n.types';

const switchLocalePath = useSwitchLocalePath();
</script>

<style lang="scss" scoped>
.landing-page__locale-switcher {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  .locale-switcher__item {
    text-decoration: underline;
    font-weight: var(--fw-meduim);
    font-size: var(--fz-medium);

    @include defaultTransition(all);

    &_active {
      opacity: 0.3;
      cursor: default;

      @media (any-hover: hover) {
        &:hover {
          opacity: 0.3 !important;
        }
      }

      &:active {
        opacity: 0.3 !important;
      }
    }

    @media (any-hover: hover) {
      &:hover {
        opacity: 0.7;
      }
    }

    &:active {
      opacity: 0.5;
    }
  }
}
</style>
