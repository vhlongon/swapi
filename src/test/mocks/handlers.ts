import { config } from '@/app/config';
import { http, HttpResponse, delay } from 'msw';
import { mockData } from './mockData';

type HandlerOptions = Partial<{
  error: string;
  delay: number;
}>;

export const getUserHandler = (opts?: HandlerOptions) => {
  const { error, delay: delayTime = 0 } = opts || {};

  return http.get(config.apiUrl, async () => {
    if (delayTime) {
      await delay(delayTime);
    }

    if (error) {
      return HttpResponse.error();
    }

    return HttpResponse.json(mockData, { status: 200 });
  });
};
export const handlers = [getUserHandler()];
