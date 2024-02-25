import { render, screen } from '@testing-library/react';
import LoadingPage from '../loading';

describe('Error page', () => {
  it('should render the loading page', () => {
    render(<LoadingPage />);

    expect(screen.getByLabelText('loading')).toBeInTheDocument();
  });
});
