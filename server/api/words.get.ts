import { wordsItems } from '~/server/wordsItems';

export default defineEventHandler(() => {
  return {
    words: wordsItems,
  };
});
