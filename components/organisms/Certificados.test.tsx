import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Certificados from './Certificados';
import '@testing-library/jest-dom';

describe('Certificados', () => {
    it('debe renderizar el título', () => {
        render(<Certificados />);
        expect(screen.getByText('Certificados')).toBeInTheDocument();
    });

    it('debe renderizar todos los certificados', () => {
        render(<Certificados />);
        expect(screen.getByText('Python Essentials 1')).toBeInTheDocument();
        expect(screen.getByText('DevOps Essentials')).toBeInTheDocument();
    });

    it('debe tener el id correcto', () => {
        const { container } = render(<Certificados />);
        expect(container.querySelector('#certificados')).toBeInTheDocument();
    });

    it('debe tener botones Ver y Descargar para cada certificado', () => {
        render(<Certificados />);
        const botonesVer = screen.getAllByText('Ver');
        const botonesDescargar = screen.getAllByText('Descargar');
        expect(botonesVer).toHaveLength(2);
        expect(botonesDescargar).toHaveLength(2);
    });
});