import { render, screen } from '@testing-library/react';
import MainPage from './page';

describe('Main page', () => {
  it('should render main page', () => {
    render(<MainPage />);

    expect(screen.getByText('Main page')).toBeInTheDocument();
  });
});
