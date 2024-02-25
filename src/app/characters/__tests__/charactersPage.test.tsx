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

    await waitForElementToBeRemoved(() => screen.getByLabelText('loading'));

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Characters'
    );
    expect(screen.getByText(mockPerson.name)).toBeInTheDocument();
  });
});
