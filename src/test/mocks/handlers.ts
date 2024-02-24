import { config } from '@/app/config';
import { http, HttpResponse, delay } from 'msw';
import { mockData } from './mockData';

type HandlerOptions = Partial<{
  error: string;
  delay: number;
}>;

export const getFilmsHandler = (opts?: HandlerOptions) => {
  const { error, delay: delayTime = 0 } = opts || {};

  return http.get(`${config.apiUrl}/films/`, async () => {
    if (delayTime) {
      await delay(delayTime);
    }

    if (error) {
      return HttpResponse.error();
    }

    return HttpResponse.json(
      {
        count: 1,
        results: mockData.films,
      },
      { status: 200 }
    );
  });
};
export const handlers = [getFilmsHandler()];
