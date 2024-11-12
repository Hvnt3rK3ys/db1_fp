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

Claro, aquí tienes el árbol de directorios de tu proyecto y teX (Next.js) y una breve documentación de las clases y lo que hace tu proyecto:

### Árbol de Directorios del Proyecto

```plaintext
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

### Documentación Breve del Proyecto

#### Estructura del Proyecto

- **`./components`**: Directorio para componentes reutilizables.
- **`./data`**: Directorio para datos estáticos o lógica de datos.
- **`./lib`**: Directorio para bibliotecas o utilidades personalizadas.
  - **`./lib/prisma.ts`**: Archivo de configuración de Pr- **`./pages`**: Directorio para páginas de Next.js.
  - **`./pages/404.tsx`**: Página de error 404 personalizada.
  - **`./pages/_app.tsx`**: Archivo de configuración global de la aplicación.
  - **`./pages/index.tsx`**: Página principal de la aplicación.
- **`./prisma`**: Directorio para Prisma.
  - **`./prisma/schema.prisma`**: Archivo de esquema de Prisma.
- **`./public`**: Directorio para archivos estáticos (imágenes, iconos, etc.).
  - **`./public/Default`**: Subdirectorio para archivos estáticos por defecto.
  - **`./public/Efe.png`**: Imagen estática.
- **`./styles`**: Directorio para estilos globales y módulos de estilos.
  - **`./styles/global.css`**: Archivo de estilos globales.
  - **`./styles/not.module.scss`**: Archivo de estilos SCSS modular.

#### Funcionalidad del Proyecto

1. **Página Principal (`index.tsx`)**:
   - Renderiza el contenido principal de la aplicación.
   - Puede incluir componentes y lógica de datos.

2. **Página de Error 404 (`404.tsx`)**:
   - Muestra una página personalizada cuando una ruta no existe.
   - Incluye un enlace para volver a la página principal.

3. **Configuración Global de la Aplicación (`_app.tsx`)**:
   - Proporciona personalizar la configuración global de la aplicación.
   - Importa estilos globales y configura el cliente de Prisma.

4. **Prisma (`prisma.ts` y `schema.prisma`)**:
   - Configura y utiliza Prisma para acceder a la base de datos.
   - `prisma.ts` exporta el cliente de Prisma para uso en componentes y páginas.

5. **Estilos Globales y Modulares (`global.css` y `not.module.scss`)**:
   - `global.css` contiene estilos globales para la aplicación.
   - `not.module.scss` contiene estilos SCSS modulares para componentes específicos.

