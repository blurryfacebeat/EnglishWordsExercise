import { wordsItems } from '~/server/wordsItems';

export interface ICheckWordResponse {
  success: boolean;
}

export default defineEventHandler(async (event): Promise<ICheckWordResponse> => {
  const body = await readBody(event);

  const availableWord = wordsItems.find((item) => item.ru === body.word);

  if (availableWord?.en === body.enWord) return { success: true };

  return { success: false };
});
