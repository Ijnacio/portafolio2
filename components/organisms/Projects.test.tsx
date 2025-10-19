import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Projects from './Projects';

// Mock del componente ProjectCard
vi.mock('../molecules/projects/ProjectCard', () => ({
    default: ({ title, description, tags }: any) => (
        <div data-testid="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <div>{tags.join(', ')}</div>
        </div>
    ),
}));

describe('Projects', () => {
    it('debe mostrar el título', () => {
        render(<Projects />);
        expect(screen.getByText('Proyectos')).toBeInTheDocument();
    });

it('debe mostrar al menos un proyecto', () => {
    render(<Projects />);
    const projectCards = screen.getAllByTestId('project-card');
    expect(projectCards.length).toBeGreaterThan(0);
});

    it('debe renderizar 3 proyectos', () => {
        render(<Projects />);
        const projectCards = screen.getAllByTestId('project-card');
        expect(projectCards).toHaveLength(3);
    });
});