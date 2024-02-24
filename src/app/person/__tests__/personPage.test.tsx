import { mockFilm, mockPerson } from '@/test/mocks/mockData';
import { render, screen } from '@testing-library/react';
import PersonPage from '../[id]/page';

describe('Person page', () => {
  it('should render main page title and films', async () => {
    render(await PersonPage({ params: { id: '1' } }));

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      mockPerson.name
    );
    expect(
      screen.getByText(`BirthYear: ${mockPerson.birth_year}`)
    ).toBeInTheDocument();

    expect(screen.getByText('Films:')).toBeInTheDocument();
    expect(screen.getByText(mockFilm.title)).toBeInTheDocument();
  });
});
