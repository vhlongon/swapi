import { getViewedFilms } from '../session';

describe('session utils', () => {
  describe('getViewedFilms', () => {
    // mock the document.cookies so we can test the function
    Object.defineProperty(document, 'cookie', {
      get: vi.fn(() => 'viewedFilms=1,2,3'),
    });

    test('should return the current viewed film ids from cookies', () => {
      expect(getViewedFilms()).toEqual([1, 2, 3]);
    });
  });
});
