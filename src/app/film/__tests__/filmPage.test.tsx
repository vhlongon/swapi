import { mockFilm, mockPerson } from '@/test/mocks/mockData';
import { render, screen } from '@testing-library/react';
import FilmPage, { generateMetadata } from '../[id]/page';

describe('Film page', () => {
  test('should render main page title', async () => {
    expect(await generateMetadata({ params: { id: '1' } })).toEqual({
      title: mockFilm.title,
    });
  });

  it('should render main page title and films', async () => {
    render(await FilmPage({ params: { id: '1' } }));

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      mockFilm.title
    );
    expect(screen.getByText(mockFilm.opening_crawl)).toBeInTheDocument();

    expect(screen.getByText(`Director`)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.director)).toBeInTheDocument();

    expect(screen.getByText(`Producer`)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.producer)).toBeInTheDocument();

    expect(screen.getByText('Characters')).toBeInTheDocument();
    expect(screen.getByText(mockPerson.name)).toBeInTheDocument();
  });
});
