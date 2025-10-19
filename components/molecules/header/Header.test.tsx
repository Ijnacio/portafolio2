import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from './Header';

vi.mock('framer-motion', () => ({
    motion: {
        header: ({ children, ...props }: any) => <header {...props}>{children}</header>
    }
}));

vi.mock('../../atoms/header/Logo', () => ({ default: () => <div>Logo</div> }));
vi.mock('../../atoms/header/NavLinks', () => ({ default: () => <nav>NavLinks</nav> }));
vi.mock('../../atoms/header/HeaderActions', () => ({ default: () => <div>Actions</div> }));

describe('Header', () => {
    it('debe renderizar los componentes principales', () => {
        render(<Header />);
        expect(screen.getByText('Logo')).toBeInTheDocument();
        expect(screen.getByText('NavLinks')).toBeInTheDocument();
        expect(screen.getByText('Actions')).toBeInTheDocument();
    });

    it('debe mostrar el botón de menú móvil', () => {
        render(<Header />);
        expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument();
    });
});