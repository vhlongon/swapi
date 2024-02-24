import Cookies from 'js-cookie';

export const getViewedFilms = () => {
  const cookieValue = Cookies.get('viewedFilms');

  return cookieValue?.split(',').map(Number) ?? [];
};
