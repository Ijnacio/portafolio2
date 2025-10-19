import { render, screen, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import NavLinks from './NavLinks';

describe('NavLinks', () => {
  it('debe mostrar los links de navegación (desktop)', () => {
    render(<NavLinks isMenuOpen={false} setIsMenuOpen={vi.fn()} />);
    const desktopNav = screen.getByRole('navigation', { name: /main navigation/i });
    expect(within(desktopNav).getByRole('link', { name: /sobre mí/i })).toBeInTheDocument();
  });
});