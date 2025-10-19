// components/atoms/header/HeaderActions.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeaderActions from './HeaderActions';

describe('HeaderActions', () => {
    it('debe mostrar el botón de CV', () => {
        render(<HeaderActions />);
        expect(screen.getByText(/Descargar CV/i)).toBeInTheDocument();
    });

    it('debe tener el link correcto del CV', () => {
        render(<HeaderActions />);
        const link = screen.getByText(/Descargar CV/i).closest('a');
        expect(link).toHaveAttribute('href', '../assets/pdf/CV.pdf');
    });
});
