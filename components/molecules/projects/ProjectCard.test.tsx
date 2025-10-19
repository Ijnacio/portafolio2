import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectCard from './ProjectCard';

describe('ProjectCard', () => {
    const mockProject = {
        title: 'Test Project',
        description: 'Test Description',
        imageUrl: '/test.jpg',
        tags: ['React', 'TypeScript'],
        codeLink: 'https://github.com/test',
        demoLink: 'https://demo.com'
    };

    it('debe mostrar el título', () => {
        render(<ProjectCard {...mockProject} />);
        expect(screen.getByText('Test Project')).toBeInTheDocument();
    });

    it('debe mostrar la descripción', () => {
        render(<ProjectCard {...mockProject} />);
        expect(screen.getByText('Test Description')).toBeInTheDocument();
    });

    it('debe mostrar los tags', () => {
        render(<ProjectCard {...mockProject} />);
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('TypeScript')).toBeInTheDocument();
    });
});
