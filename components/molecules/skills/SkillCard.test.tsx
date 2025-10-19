import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SkillCard from './SkillCard';

describe('SkillCard', () => {
    it('debe mostrar el nombre de la tecnología', () => {
        render(<SkillCard name="React" iconUrl="/react.svg" />);
        expect(screen.getByText('React')).toBeInTheDocument();
    });

    it('debe mostrar el ícono', () => {
        render(<SkillCard name="React" iconUrl="/react.svg" />);
        const icon = screen.getByAltText('React logo');
        expect(icon).toBeInTheDocument();
    });
});