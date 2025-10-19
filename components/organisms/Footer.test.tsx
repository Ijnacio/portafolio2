import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
    it('debe mostrar el copyright', () => {
        render(<Footer />);
        const year = new Date().getFullYear();
        expect(screen.getByText(new RegExp(year.toString()))).toBeInTheDocument();
    });

    it('debe mostrar el mensaje', () => {
        render(<Footer />);
        expect(screen.getByText(/Hecho con React/i)).toBeInTheDocument();
    });
});