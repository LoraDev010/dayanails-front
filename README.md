# Dayanails

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.8.

## Docker (recomendado)

### Requisitos
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado y corriendo

### Levantar el proyecto

```bash
# 1. Clonar el repo (si no lo tienes)
git clone <url-del-repo>
cd dayanails

# 2. Construir y levantar
docker compose up --build

# 3. Abrir en el navegador
# http://localhost:4200
```

### Comandos útiles

```bash
# Levantar en background (detached)
docker compose up --build -d

# Ver logs
docker compose logs -f

# Detener
docker compose down

# Rebuild desde cero (limpiar cache)
docker compose down
docker compose build --no-cache
docker compose up
```

### Cómo funciona

| Paso | Qué hace |
|------|----------|
| `Stage 1 (builder)` | Node 22 instala deps y compila Angular (`npm run build`) |
| `Stage 2 (nginx)` | Copia `dist/` al servidor Nginx estático |
| Puerto | `localhost:4200` → contenedor puerto `80` |

> El build es multi-stage: imagen final liviana, sin Node ni source code.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
