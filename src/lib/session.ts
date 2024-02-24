import { cookies } from 'next/headers';

export const getViewedFilms = () => {
  const cookieValue = cookies().get('viewedFilms')?.value;

  return cookieValue?.split(',').map(Number) ?? [];
};
