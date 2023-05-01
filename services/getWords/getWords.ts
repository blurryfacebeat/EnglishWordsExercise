import { IWordItem } from '~/server/wordsItems';
import BaseFetchClient from '~/utils/http/FetchClient/BaseFetchClient';

export const getWords = async (): Promise<Array<IWordItem>> => BaseFetchClient.get('words');
