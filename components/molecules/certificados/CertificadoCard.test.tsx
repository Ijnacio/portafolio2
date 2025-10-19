import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CertificadoCard from './CertificadosCard';  

vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>
    }
}));

describe('CertificadoCard', () => {
    const props = {
        titulo: 'Certificado Test',
        empresa: 'Empresa Test',
        fecha: 'Enero 2024',
        imagen: '/test.png',
        urlPDF: '/test.pdf'
    };

    it('debe renderizar el título', () => {
        render(<CertificadoCard {...props} />);
        expect(screen.getByText('Certificado Test')).toBeInTheDocument();
    });

    it('debe renderizar la empresa', () => {
        render(<CertificadoCard {...props} />);
        expect(screen.getByText('Empresa Test')).toBeInTheDocument();
    });

    it('debe mostrar la imagen clickeable', () => {
        render(<CertificadoCard {...props} />);
        const img = screen.getByAltText('Certificado Test');
        expect(img).toHaveAttribute('src', '/test.png');
        expect(img.closest('a')).toHaveAttribute('href', '/test.pdf');
    });

    it('debe tener botón Ver con enlace correcto', () => {
        render(<CertificadoCard {...props} />);
        const botonVer = screen.getByText('Ver');
        expect(botonVer.closest('a')).toHaveAttribute('href', '/test.pdf');
        expect(botonVer.closest('a')).toHaveAttribute('target', '_blank');
    });

    it('debe tener botón Descargar con atributo download', () => {
        render(<CertificadoCard {...props} />);
        const botonDescargar = screen.getByText('Descargar');
        expect(botonDescargar.closest('a')).toHaveAttribute('href', '/test.pdf');
        expect(botonDescargar.closest('a')).toHaveAttribute('download');
    });

    it('debe tener 2 botones de acción', () => {
        render(<CertificadoCard {...props} />);
        expect(screen.getByText('Ver')).toBeInTheDocument();
        expect(screen.getByText('Descargar')).toBeInTheDocument();
    });
});
