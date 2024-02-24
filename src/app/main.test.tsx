import { render, screen } from '@testing-library/react';
import MainPage from './page';
import { mockData } from '@/test/mocks/mockData';

describe('Main page', () => {
  it('should render main page title and films', async () => {
    render(await MainPage());

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Films:'
    );
    expect(screen.getByText(mockData.films[0].title)).toBeInTheDocument();
  });
});
