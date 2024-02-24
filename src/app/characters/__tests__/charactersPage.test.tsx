import { mockPerson } from '@/test/mocks/mockData';
import { render, screen } from '@testing-library/react';
import CharactersPage from '../page';

vi.mock('@/lib/session', () => ({
  getViewedFilms: vi.fn().mockReturnValue([1]),
}));

describe('Characters page', () => {
  it('should render main page title and films', async () => {
    render(await CharactersPage());

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Characters viewed in films:'
    );
    expect(screen.getByText(mockPerson.name)).toBeInTheDocument();
  });
});
