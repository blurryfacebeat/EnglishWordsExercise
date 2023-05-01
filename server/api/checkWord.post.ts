import { wordsItems } from '~/server/wordsItems';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const availableWord = wordsItems.find((item) => item.ru === body.word);

  if (availableWord?.en === body.enWord) return 'success';

  throw createError({
    statusCode: 400,
    statusMessage: '',
  });
});
