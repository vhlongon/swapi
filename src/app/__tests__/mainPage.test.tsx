import { mockFilm } from '@/test/mocks/mockData';
import { render, screen } from '@testing-library/react';
import MainPage from '../page';

describe('Main page', () => {
  it('should render main page title and films', async () => {
    render(await MainPage());

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Films:'
    );
    expect(screen.getByText(mockFilm.title)).toBeInTheDocument();
  });
});
