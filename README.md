# 🛡️ RIMAC - Reto Técnico Front-End

Este es un proyecto web moderno, interactivo y de alta fidelidad visual desarrollado para el **Reto Técnico de RIMAC Seguros**. La aplicación simula un flujo completo de cotización de seguros de salud, abarcando desde la captura de datos del cotizante hasta la selección de planes compatibles y la visualización de un resumen final detallado.

El proyecto está diseñado bajo un enfoque de **Visualización Premium**, siguiendo de forma exacta las guías del sistema de diseño de Figma, optimizado tanto para dispositivos móviles como para computadoras de escritorio.

---

## 🚀 Tecnologías Principales

El proyecto utiliza un stack de desarrollo moderno y altamente eficiente:

*   **Core:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vite.dev/) (para un desarrollo ultra rápido y HMR instantáneo).
*   **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (utilizando la nueva arquitectura de compilación `@theme` nativa en CSS).
*   **Enrutado:** [React Router v7](https://reactrouter.com/) (manejando de forma limpia la transición entre las páginas de la SPA).
*   **Estado Global:** [Zustand](https://zustand.docs.pmnd.rs/) (arquitectura ligera y de alto rendimiento para persistir y transferir datos de cotización).
*   **Gestión de APIs y Caché:** [TanStack Query v5 (React Query)](https://tanstack.com/query/latest) (manejando queries asíncronas con reintentos automáticos, caché inteligente y carga perezosa).
*   **Validaciones y Formularios:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) (validaciones granulares en tiempo real con esquemas fuertemente tipados).
*   **Peticiones HTTP:** [Axios](https://axios-http.com/) (configurado con una instancia modular base).

---

## 🛠️ Características Clave Implementadas

1.  **📐 Grilla Alineada a Figma (12 Columnas):** Diseño responsive centrado (`max-w-6xl`) estructurado exactamente sobre las columnas de Figma tanto en la HomePage, PlansPage y SummaryPage.
2.  **📋 Validaciones Rigurosas en Tiempo Real:** Validación secuencial usando Zod para el formulario de ingreso:
    *   *DNI/RUC:* Longitud estricta de 8 dígitos para DNI, 11 dígitos para RUC y control estricto de caracteres numéricos.
    *   *Celular:* Debe comenzar obligatoriamente con el dígito `9` y poseer exactamente 9 dígitos.
3.  **🔄 Consulta de API Perezosa (Lazy Query):** La API de planes (`/plans.json`) no se consulta al cargar la página; solo se ejecuta perezosamente una vez que el usuario selecciona para quién desea cotizar (`Para mí` o `Para alguien más`), optimizando el ancho de banda y la velocidad inicial.
4.  **🎂 Cálculo Dinámico de Elegibilidad por Edad:** Analiza múltiples formatos de fecha de nacimiento (`DD-MM-YYYY`, `YYYY-MM-DD`, etc.) retornados por la API de usuario, calcula la edad exacta en el año actual y filtra automáticamente los planes para mostrar únicamente aquellos compatibles (`edadUsuario <= plan.age`).
5.  **💸 Descuento del 5% Aplicado Dinámicamente:** Aplica de forma automática un **5% de descuento** sobre los precios de los planes cuando la cotización es para un tercero (`Para alguien más`). El descuento se calcula dinámicamente, se muestra con formato "antes / ahora" en las tarjetas y se propaga de forma segura al estado.
6.  **📱 Carrusel Móvil "Peek-a-Boo":** Un carrusel móvil que desliza las tarjetas de forma horizontal. A través de un cálculo de traslación matemática (`50vw - 146px - index * 308px`), la tarjeta activa se centra perfectamente en cualquier tamaño de pantalla, permitiendo que las tarjetas adyacentes se asomen de manera simétrica por los extremos de la pantalla.
7.  **📱 Indicador de Progreso en una Sola Fila:** Rediseño del ProgressStepper en móvil que consolida el botón de regreso, el indicador de pasos (`PASO X DE Y`) sin cortes y una barra de progreso que llena el espacio dinámicamente sobre una sola fila horizontal con borde divisorio inferior.
8.  **⚡ Desplazamiento Automático Suave (Smooth Scroll):** Una vez que los planes se cargan exitosamente tras elegir la opción del cotizante, la página se desplaza de forma automática y suave hacia la sección de planes, ofreciendo una transición fluida.
9.  **🎛️ Helper Visual de Grilla (Dev Tool):** Un overlay interactivo (`Alt + G`) que dibuja las 12 columnas del diseño y una malla de papel cuadriculado azul para contrastar y validar la perfecta alineación contra el Figma.
10. **🌐 Despliegue SPA Listo (Vercel):** Incluye la configuración de reescritura de rutas en `vercel.json` para evitar el error **404** al refrescar la página (`F5`) en rutas secundarias de la SPA en Vercel.
11. **✏️ Tipografía Lato Exclusiva:** Importación dinámica y aplicación exclusiva de la fuente **Lato** para todo el contenido textual interno de las tarjetas de planes.

---

## 🗂️ Estructura del Proyecto

```text
rimac-reto-tecnico/
├── public/                 # Recursos estáticos y vectores de íconos
├── src/
│   ├── api/                # Instancia de Axios y consultas modulares
│   ├── contants/           # Datos constantes compartidos
│   ├── features/
│   │   ├── plans/          # Lógica, custom hooks, componentes de tarjetas de planes
│   │   ├── quote/          # Esquemas Zod y lógica del formulario inicial
│   │   └── summary/        # Hooks de lectura y mapeos para el resumen
│   ├── pages/              # Páginas principales (Home, Planes, Resumen)
│   ├── router/             # Configuración del Router y RootLayout global
│   ├── shared/
│   │   ├── components/
│   │   │   ├── layouts/    # Contenedores estructurales reutilizables
│   │   │   └── ui/         # Componentes atómicos (Botón, Stepper, Badges, Overlay)
│   ├── store/              # Almacén de Zustand global (usePlanStore, useQuoteStore)
│   ├── types/              # Tipados TypeScript comunes de la app
│   ├── index.css           # Estilos base globales y configuración @theme de Tailwind v4
│   └── main.tsx            # Punto de entrada de la aplicación
├── vercel.json             # Reglas de reescritura SPA para despliegue
├── package.json            # Configuración de dependencias y scripts
└── tsconfig.json           # Configuración del compilador TypeScript
```

---

## 🏁 Instrucciones de Instalación y Uso

Todo el flujo de trabajo está configurado para ejecutarse con **Yarn**.

### 1. Clonar el repositorio
```bash
git clone https://github.com/smitiwis/RIMAC-RETO-TECNICO.git
cd rimac-reto-tecnico
```

### 2. Instalar dependencias
Instala todas las librerías necesarias del proyecto usando Yarn:
```bash
yarn install
```

### 3. Ejecutar el servidor de desarrollo
Inicia el entorno local con Hot Module Replacement (HMR):
```bash
yarn dev
```
La aplicación estará disponible de forma predeterminada en `http://localhost:5173`.

### 4. Compilar para Producción
Genera el paquete optimizado y minificado de producción:
```bash
yarn build
```
Los archivos construidos se guardarán en el directorio `/dist`.

### 5. Previsualizar la versión de producción localmente
Prueba el build de producción antes de subirlo a servidores de hosting:
```bash
yarn preview
```

---

## 📐 Verificación de Grilla en Desarrollo (`Alt + G`)
Para facilitar la verificación del diseño respecto al Figma:
1. Abre la aplicación en modo de desarrollo (`yarn dev`).
2. Presiona la combinación de teclas **`Alt + G`** (o `Ctrl + Shift + G`).
3. Aparecerá un overlay con las **12 columnas rosadas** y una **cuadrícula azul** de fondo.
4. Puedes ajustar la opacidad del overlay arrastrando el control deslizante flotante en la esquina inferior derecha. Su estado se guardará de forma persistentemente en tu navegador.
