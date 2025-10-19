import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Logo from './Logo';

describe('Logo', () => {
    it('debe mostrar el nombre', () => {
        render(<Logo />);
        expect(screen.getByText('IGNACIO SOBARZO')).toBeInTheDocument();
    });
});