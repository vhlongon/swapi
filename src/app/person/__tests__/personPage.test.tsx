import { mockFilm, mockPerson, mockPlanet } from '@/test/mocks/mockData';
import { render, screen } from '@testing-library/react';
import PersonPage from '../[id]/page';

describe('Person page', () => {
  it('should render main page title and films', async () => {
    render(await PersonPage({ params: { id: '1' } }));

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      mockPerson.name
    );
    expect(screen.getByText(`Gender`)).toBeInTheDocument();
    expect(screen.getByText(mockPerson.gender)).toBeInTheDocument();

    expect(screen.getByText(`Height`)).toBeInTheDocument();
    expect(screen.getByText(mockPerson.height)).toBeInTheDocument();

    expect(screen.getByText(`Homeworld`)).toBeInTheDocument();
    expect(screen.getByText(mockPlanet.name)).toBeInTheDocument();

    expect(screen.getByText(`Mass`)).toBeInTheDocument();
    expect(screen.getByText(mockPerson.mass)).toBeInTheDocument();

    expect(screen.getByText(`BirthYear`)).toBeInTheDocument();
    expect(screen.getByText(mockPerson.birth_year)).toBeInTheDocument();

    expect(screen.getByText(`EyeColor`)).toBeInTheDocument();
    expect(screen.getByText(mockPerson.eye_color)).toBeInTheDocument();

    expect(screen.getByText(`HairColor`)).toBeInTheDocument();
    expect(screen.getByText(mockPerson.hair_color)).toBeInTheDocument();

    expect(screen.getByText(`SkinColor`)).toBeInTheDocument();
    expect(screen.getByText(mockPerson.skin_color)).toBeInTheDocument();

    expect(screen.getByText('Films')).toBeInTheDocument();
    expect(screen.getByText(mockFilm.title)).toBeInTheDocument();
  });
});
