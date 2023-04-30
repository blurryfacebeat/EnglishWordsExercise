<template>
  <div :class="['speach-module', { 'speach-module_loading': isVoicesLoading }]">
    <speak-icon @click="speakWord" class="exercise-block__icon" />
  </div>
</template>

<script lang="ts" setup>
import { Ref } from 'vue';

import getSpeach from '~/components/speach-module/getSpeach';

import SpeakIcon from '~/assets/icons/speak-icon.svg';

interface IProps {
  text: string;
}

const { text } = defineProps<IProps>();

const isVoicesLoading: Ref<boolean> = ref(false);

let utterance: SpeechSynthesisUtterance;

const loadUtterance = async () => {
  try {
    isVoicesLoading.value = true;

    utterance = await getSpeach();

    utterance.text = text;
  } finally {
    isVoicesLoading.value = false;
  }
};

onMounted(async () => {
  await loadUtterance();
});

const speakWord = () => {
  speechSynthesis.speak(utterance);
};
</script>

<style lang="scss" scoped>
.speach-module {
  flex-shrink: 0;

  color: var(--main-black);

  cursor: pointer;
  @include defaultTransition(all);

  &_loading {
    pointer-events: none;

    opacity: 0.3;
  }

  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
}
</style>
