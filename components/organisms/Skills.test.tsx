import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Skills from './Skills';

describe('Skills', () => {
    it('debe mostrar el título', () => {
        render(<Skills />);
        expect(screen.getByText('Mi Stack Tecnológico')).toBeInTheDocument();
    });

    it('debe mostrar las categorías', () => {
        render(<Skills />);
        expect(screen.getByText('Frontend')).toBeInTheDocument();
        expect(screen.getByText('Backend')).toBeInTheDocument();
    });

    it('debe mostrar algunas tecnologías', () => {
        render(<Skills />);
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('Java')).toBeInTheDocument();
    });
});