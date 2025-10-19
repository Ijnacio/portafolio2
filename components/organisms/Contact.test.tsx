import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Contact from './Contact';

// Mock framer-motion
vi.mock('framer-motion', () => ({
    motion: {
        h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
        p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
        a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
    AnimatePresence: ({ children }: any) => children,
}));

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
    Mail: () => <span data-testid="mail-icon">Mail Icon</span>,
    MessageCircle: () => <span data-testid="message-icon">Message Icon</span>,
    Linkedin: () => <span data-testid="linkedin-icon">LinkedIn Icon</span>,
    Github: () => <span data-testid="github-icon">GitHub Icon</span>,
}));

describe('Contact', () => {
    it('debe mostrar el título', () => {
        render(<Contact />);
        expect(screen.getByText('Contacto')).toBeInTheDocument();
    });

    it('debe mostrar el email', () => {
        render(<Contact />);
        expect(screen.getByText('ig.sobarzo@duocuc.cl')).toBeInTheDocument();
    });

    it('debe mostrar el WhatsApp', () => {
        render(<Contact />);
        expect(screen.getByText('+56 9 3898 2659')).toBeInTheDocument();
    });

    it('debe mostrar los enlaces de contacto', () => {
        render(<Contact />);
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('WhatsApp')).toBeInTheDocument();
        expect(screen.getByText('LinkedIn')).toBeInTheDocument();
        expect(screen.getByText('GitHub')).toBeInTheDocument();
    });
});