# Project structure

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

### Documentación del Proyecto Next.js

Este proyecto es una aplicación web construida con Next.js, un framework de React que permite la creación de aplicaciones web modernas con renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG). A continuación, se proporciona una breve descripción de cada directorio y archivo en el proyecto, integrado con el árbol de directorios proporcionado.

```
.
├── ./components
├── ./data
├── ./lib
│   └── ./lib/prisma.ts
├── ./pages
│   ├── ./pages/404.tsx
│   ├── ./pages/_app.tsx
│   └── ./pages/index.tsx
├── ./prisma
│   └── ./prisma/schema.prisma
├── ./public
│   ├── ./public/Default
│   │   ├── ./public/Default/file.svg
│   │   ├── ./public/Default/globe.svg
│   │   ├── ./public/Default/next.svg
│   │   ├── ./public/Default/vercel.svg
│   │   └── ./public/Default/window.svg
│   └── ./public/Efe.png
└── ./styles
    ├── ./styles/global.css
    └── ./styles/not.module.scss
```

#### 1. **`components/`**
Este directorio contiene los componentes reutilizables de la aplicación. Los componentes son bloques de construcción fundamentales en una aplicación React, y aquí es donde se almacenan los componentes que se utilizan en varias partes de la aplicación.

#### 2. **`data/`**
Aquí se almacenan los archivos de datos estáticos o dinámicos que la aplicación puede necesitar. Esto podría incluir archivos JSON, CSV, o cualquier otro tipo de datos que la aplicación necesite consumir.

#### 3. **`lib/`**
El directorio `lib/` contiene utilidades y funciones auxiliares que se utilizan en toda la aplicación. En este caso, `lib/prisma.ts` es un archivo que probablemente contiene la configuración y la conexión a la base de datos utilizando Prisma, un ORM (Object-Relational Mapping) para Node.js.

#### 4. **`pages/`**
Este es uno de los directorios más importantes en una aplicación Next.js. Cada archivo dentro de `pages/` representa una ruta en la aplicación. Por ejemplo:

- `404.tsx`: Define la página de error 404.
- `_app.tsx`: Es el componente principal de la aplicación que envuelve todas las páginas. Aquí se pueden agregar proveedores de contexto, estilos globales, etc.
- `index.tsx`: Es la página principal de la aplicación, que se muestra cuando se accede a la raíz del sitio (`/`).

#### 5. **`prisma/`**
Este directorio contiene la configuración de Prisma, un ORM para Node.js que facilita la interacción con la base de datos. El archivo `schema.prisma` define el esquema de la base de datos, incluyendo los modelos y relaciones.

#### 6. **`public/`**
El directorio `public/` es donde se almacenan los archivos estáticos que se sirven directamente al cliente. Esto incluye imágenes, archivos SVG, y otros recursos que no necesitan procesamiento adicional.

- `Default/`: Un subdirectorio dentro de `public/` que contiene varios archivos SVG, como `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, y `window.svg`.
- `Efe.png`: Una imagen estática que se puede acceder directamente desde la URL `/Efe.png`.

#### 7. **`styles/`**
Este directorio contiene los archivos de estilos de la aplicación.

- `global.css`: Un archivo CSS que define estilos globales que se aplican a toda la aplicación.
- `not.module.scss`: Un archivo SCSS que probablemente se utiliza para estilos que no están modularizados (no son módulos CSS).

