# Bienvenido a React Router (SSR + Vite + Tailwind)

Plantilla moderna y lista para producción para construir aplicaciones React full‑stack con React Router.

[![Abrir en StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Características

- 🚀 Renderizado del lado del servidor (SSR)
- ⚡️ Hot Module Replacement (HMR)
- 📦 Empaquetado y optimización de assets
- 🔄 Carga de datos y mutaciones con React Router
- 🔒 TypeScript por defecto
- 🎉 Tailwind CSS para estilos
- 📖 Documentación: https://reactrouter.com/

## Requisitos

- Node.js >= 18.17
- npm >= 9 (o pnpm/bun si lo prefieres)

## Instalación

```bash
npm install
```

## Desarrollo

Inicia el servidor de desarrollo con HMR:

```bash
npm run dev
```

Aplicación disponible en `http://localhost:5173`.


## Scripts disponibles

- `npm run dev`: servidor de desarrollo (HMR)
- `npm run build`: compila para producción
- `npm run start`: ejecuta el servidor de producción usando la build existente
- `npm run preview`: build + start en una sola orden
- `npm run typecheck`: genera tipos de rutas y verifica TypeScript

## Compilar para producción

```bash
npm run build
```

## Ejecutar en producción

```bash
npm run start
# o
npm run preview
```

## Despliegue

### Docker

Construir y ejecutar con Docker:

```bash
docker build -t portafolio2 .
docker run -p 3000:3000 portafolio2
```

Se puede desplegar en cualquier plataforma con soporte Docker, por ejemplo:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### Despliegue DIY (sin Docker)

El servidor incorporado es apto para producción. Asegúrate de desplegar la salida de `npm run build`:

```
├── package.json
├── package-lock.json (o pnpm-lock.yaml, o bun.lockb)
├── build/
│   ├── client/    # Assets estáticos
│   └── server/    # Código del servidor
```

## Estilos

Esta plantilla ya incluye Tailwind CSS configurado. Puedes usar cualquier framework CSS de tu preferencia.

---

Construido con ❤️ usando React Router.
