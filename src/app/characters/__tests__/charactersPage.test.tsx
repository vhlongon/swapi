import { mockPerson } from '@/test/mocks/mockData';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import CharactersPage from '../page';
import { ClientProviders } from '@/components/ClientProviders';

vi.mock('@/lib/session', () => ({
  getViewedFilms: vi.fn().mockReturnValue([1]),
}));

describe('Characters page', () => {
  it('should render main page title and films', async () => {
    render(await CharactersPage(), { wrapper: ClientProviders });

    await waitForElementToBeRemoved(() => screen.getByText('loading'));

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Characters viewed in films:'
    );
    expect(screen.getByText(`Viewed: 1`)).toBeInTheDocument();
    expect(screen.getByText(mockPerson.name)).toBeInTheDocument();
  });
});
