import { render, screen } from '@testing-library/react';
import ErrorPage from '../error';

describe('Error page', () => {
  it('should render the error message', () => {
    const reset = vi.fn();
    const error = { message: 'some message', digest: 'digest', name: 'name' };
    render(<ErrorPage error={error} reset={reset} />);

    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.getByText('See details')).toBeInTheDocument();
    expect(screen.getByText(JSON.stringify(error))).toBeInTheDocument();
  });
});
