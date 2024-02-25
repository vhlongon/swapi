import { getViewedFilms } from '../session';

beforeEach(() => {
  document.cookie = '';
});

describe('session utils', () => {
  describe('getViewedFilms', () => {
    test('should return the current viewed film ids from cookies', () => {
      document.cookie = 'viewedFilms=1,2,3';
      expect(getViewedFilms()).toEqual([1, 2, 3]);
    });

    test('should return an empty array if there are no viewed films', () => {
      document.cookie = 'viewedFilms=';
      expect(getViewedFilms()).toEqual([]);
    });
  });
});
