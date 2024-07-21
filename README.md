# Electron-tRPC-Drizzle Starter

A starter template for building Electron applications with tRPC and Drizzle ORM .
## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Features

- Electron application with tRPC integration over IPC
- Drizzle ORM for database operations
- PostgreSQL database running in Docker to work with on dev 
- electron-vite for fast builds and hot module replacement
- Tailwind CSS for utility-first styling
 ## Overview

This template is designed to provide a solid foundation for developing desktop applications with Electron. It integrates tRPC for type-safe API calls over IPC (Inter-Process Communication) and Drizzle ORM for managing database interactions. With these tools, you can efficiently build and maintain scalable and reliable applications.

## Why tRPC with IPC Communication?

We chose tRPC for its strong type safety and ease of use in creating APIs. In the context of Electron applications, where the main and renderer processes need to communicate efficiently, using tRPC over IPC provides several benefits:

- **Type Safety**: tRPC ensures that the API calls between the main and renderer processes are type-safe, reducing runtime errors and enhancing developer productivity.
- **Ease of Integration**: tRPC seamlessly integrates with Electron's IPC, making it straightforward to set up and use.
- **Code Sharing**: With tRPC, you can share code between the server (main process) and the client (renderer process), promoting code reuse and consistency.

## Why Drizzle ORM?

Drizzle ORM was selected for its modern, TypeScript-first approach to database management. It offers several advantages:

- **TypeScript Support**: Drizzle ORM provides full TypeScript support, ensuring type safety throughout your database operations.
- **Simplicity and Flexibility**: It offers a simple API for defining and interacting with database schemas, making it easy to use while remaining flexible.
- **Compatibility**: Drizzle ORM works seamlessly with PostgreSQL, which is our database of choice for this template, running in a Docker container for development convenience.

 ## Prerequisites

- [Node.js](https://nodejs.org/) and [Bun](https://bun.sh/)
- [Docker](https://www.docker.com/) installed and running

## Installation

1. Clone the repository:
  ```bash
$ git clone https://github.com/islem-boudja/electron-trpc-drizzle-starter.git
```
2. Install dependencies:
```bash
$ bun install
```
3. Start the PostgreSQL database (ensure Docker is running):
```bash
$ ./start-database.sh
```
Note: Review the `start-database.sh` script before running to ensure it meets your requirements.
4. Push the database schema:
```bash
$ bun run db:push
```
### Development

```bash
$ bun run dev
```

### Build

```bash
# For windows
$ pnpm build:win

# For macOS
$ pnpm build:mac

# For Linux
$ pnpm build:linux
```
