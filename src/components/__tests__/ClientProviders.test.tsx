import { render, screen } from '@testing-library/react';
import { ClientProviders } from '../ClientProviders';

describe('ClientProviders', () => {
  it('renders children', () => {
    const children = 'Test';
    render(<ClientProviders>{children}</ClientProviders>);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
