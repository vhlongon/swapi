import { getFilmHandler } from '@/test/mocks/handlers';
import { mockPerson } from '@/test/mocks/mockData';
import { server } from '@/test/mocks/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { ReactNode } from 'react';
import CharactersPage from '../page';

vi.mock('@/lib/session', () => ({
  getViewedFilms: vi.fn().mockReturnValue([1]),
}));

beforeEach(() => {
  queryClientTest.removeQueries();
});

const queryClientTest = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const TestQueryClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClientTest}>
      {children}
    </QueryClientProvider>
  );
};

describe('Characters page', () => {
  it('should render main page title and films', async () => {
    render(<CharactersPage />, { wrapper: TestQueryClientProvider });

    await waitForElementToBeRemoved(() => screen.getByLabelText('loading'));

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Characters'
    );
    expect(screen.getByText(mockPerson.name)).toBeInTheDocument();
  });

  it('should render the error message when there is an error', async () => {
    server.use(
      getFilmHandler({
        error: 'Error',
      })
    );

    render(<CharactersPage />, { wrapper: TestQueryClientProvider });

    await waitForElementToBeRemoved(() => screen.getByLabelText('loading'));

    expect(await screen.findByText('Error')).toBeInTheDocument();
  });
});
