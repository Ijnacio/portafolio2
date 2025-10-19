import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from './About';

describe('About', () => {
    it('debe mostrar el título', () => {
        render(<About />);
        expect(screen.getByText('Sobre Mí')).toBeInTheDocument();
    });

    it('debe mostrar el saludo', () => {
        render(<About />);
        expect(screen.getByText(/¡Hola! Soy Ignacio/i)).toBeInTheDocument();
    });
});