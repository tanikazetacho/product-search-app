# Product Search App

Este es un proyecto de búsqueda de productos que utiliza **Next.js**, **Tailwind CSS**, y **GraphQL** para ofrecer una experiencia de búsqueda optimizada y moderna.

## 🚀 Características

- **GraphQL**: Consultas eficientes a la API para obtener datos de productos.
- **Next.js**: Renderizado del lado del cliente (CSR) para manejar filtros y paginación de manera dinámica.
- **Tailwind CSS**: Diseño responsivo y estilización moderna.
- **Apollo Client**: Gestión de estado para interactuar con la API GraphQL.

---

## ⚙️ Instalación

1. **Clonar el repositorio**

   ```bash
   git clone "git@github.com:tanikazetacho/product-search-app.git"
   cd product-search-app
   ```

2. **Instalar las dependencias**
   Usa **Yarn** para instalar las dependencias del proyecto:

   ```bash
   yarn install
   ```

3. **Configurar las variables de entorno**
   Crea un archivo `.env.local` en la raíz del proyecto con la siguiente variable:

   ```env
   NEXT_PUBLIC_GRAPHQL_ENDPOINT=https://staging.chupaprecios.com.mx/graphql
   ```

4. **Ejecutar el proyecto**
   Inicia el servidor de desarrollo:

   ```bash
   yarn dev
   ```

5. **Abrir en el navegador**
   Ve a [http://localhost:3000](http://localhost:3000) para ver la aplicación en acción.

---

## 🛠 Decisiones Técnicas

### 1. **Uso de Node.js 18**

- Este proyecto requiere Node.js 18 debido a:
  - **Soporte a las últimas características de ECMAScript**: Node.js 18 incluye soporte completo para módulos ES, incluyendo loaders personalizados.
  - **Compatibilidad con `fetch` nativo**: Desde Node.js 18, `fetch` es soportado de forma nativa, eliminando la necesidad de bibliotecas externas para realizar solicitudes HTTP.
  - **Mejoras de rendimiento**: Node.js 18 incluye optimizaciones significativas en V8, lo que mejora el rendimiento de la aplicación.
  - **Soporte a largo plazo (LTS)**: Node.js 18 es una versión LTS, lo que asegura estabilidad y soporte para producción.

> **Nota:** Si no tienes Node.js 18 instalado, puedes descargarlo desde [nodejs.org](https://nodejs.org/) o instalarlo con `nvm`:
>
> ```bash
> nvm install 18
> nvm use 18
> ```

### 2. **Next.js**

- Se eligió Next.js por su soporte integrado para **React**, su flexibilidad para manejar páginas dinámicas y su compatibilidad con Tailwind CSS.
- La App Directory de Next.js facilita la modularidad y la organización del código.

### 3. **Apollo Client**

- Apollo Client se usa para interactuar con la API GraphQL de manera eficiente, gestionando las consultas y el estado de la aplicación.

### 4. **Tailwind CSS**

- Tailwind CSS permite un diseño rápido y eficiente sin necesidad de escribir CSS desde cero.
- La configuración incluye soporte para temas claros y oscuros.

### 5. **GraphQL**

- La API GraphQL se utiliza para obtener datos de productos con paginación dinámica, optimizando las solicitudes al servidor.

### 6. **Suspense y Optimización**

- `<Image>` de Next.js se implementa para optimizar las imágenes y mejorar el tiempo de carga.

---

## 📂 Estructura del Proyecto

```
product-search-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout global del proyecto
│   │   ├── page.tsx         # Página principal
│   ├── components/          # Componentes reutilizables
│   ├── hooks/               # Hooks personalizados
│   ├── lib/                 # Configuración de Apollo Client
│   └── styles/              # Archivos de estilos
├── public/                  # Archivos estáticos
├── tailwind.config.js       # Configuración de Tailwind CSS
├── postcss.config.js        # Configuración de PostCSS
├── package.json             # Dependencias y scripts
└── README.md                # Documentación del proyecto
```

---

## 📚 Dependencias Principales

- **Next.js**: Framework para React.
- **Tailwind CSS**: Estilos responsivos y modernos.
- **Apollo Client**: Manejo de consultas GraphQL.
- **TypeScript**: Tipado estático para un desarrollo robusto.

---

## 📝 Notas Adicionales

### Optimización de Imágenes

⚠️ Actualmente, el proyecto utiliza `images: { unoptimized: true }` en la configuración de `next.config.js`, lo que desactiva la optimización automática de imágenes de Next.js. Esto se decidió debido a que las imágenes provienen de múltiples dominios desconocidos.

- Si en el futuro puedes mapear los dominios de origen, te recomendamos reemplazar `unoptimized` con una lista explícita de dominios permitidos:
  ```javascript
  images: {
    domains: ['example.com', 'm.media-amazon.com', 'i.ebayimg.com'],
  }
  ```
- Esto permitirá a Next.js optimizar automáticamente las imágenes y mejorar el rendimiento.

---

## Problemas comunes

1. **Estilos no aplicados**: Asegúrate de que `tailwind.config.js` incluya todas las rutas relevantes en `content`.
2. **Imágenes no cargan**: Verifica que `unoptimized` esté configurado o que los dominios estén permitidos en `next.config.js`.

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si tienes ideas o mejoras, por favor abre un issue o un pull request en el repositorio.

---

¡Gracias por usar **Product Search App**! 🎉
