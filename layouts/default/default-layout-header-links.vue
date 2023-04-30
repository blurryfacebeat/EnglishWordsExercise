<template>
  <ul class="default-layout__links">
    <li v-for="{ name, route } in links">
      <nuxt-link class="default-layout__link" active-class="default-layout__link_active" :to="localePath(route)">
        {{ name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts" setup>
interface ILink {
  name: string;
  route: string;
}

const links: Array<ILink> = [
  {
    name: 'Words',
    route: 'words-page',
  },
  {
    name: 'Sentence',
    route: 'sentence-page',
  },
];

const localePath = useLocalePath();
</script>

<style lang="scss" scoped>
.default-layout__links {
  display: flex;
  align-items: center;
  gap: 15px;

  .default-layout__link {
    @include defaultTransition(all);

    &_active {
      text-decoration: underline;

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
