import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';

describe('Hero', () => {
    it('debe mostrar el nombre', () => {
        render(<Hero />);
        expect(screen.getByText('IGNACIO SOBARZO')).toBeInTheDocument();
    });

    it('debe mostrar el título profesional', () => {
        render(<Hero />);
        expect(screen.getByText(/SOFTWARE DEVELOPER/i)).toBeInTheDocument();
    });
});
