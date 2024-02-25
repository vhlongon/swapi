import { render, screen } from '@testing-library/react';
import Nav from '../Nav';

describe('Nav component', () => {
  it('should render the logo and navigation links', () => {
    render(<Nav />);

    // Check if the logo is rendered
    expect(screen.getByLabelText('logo')).toBeInTheDocument();
    expect(screen.getByText('Swapi')).toBeInTheDocument();

    // Check if the navigation links are rendered
    expect(screen.getByText('Films')).toHaveAttribute('href', '/');
    expect(screen.getByText('Characters')).toHaveAttribute(
      'href',
      '/characters'
    );
  });
});
