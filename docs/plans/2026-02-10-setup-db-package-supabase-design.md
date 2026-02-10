# Database Package Setup Design (Supabase + Drizzle)

## Overview
This design outlines the implementation of a shared database package (`packages/db`) within the monorepo, utilizing Supabase (PostgreSQL) and Drizzle ORM. The goal is to provide a type-safe, centralized database client for the `apps/web` application.

## Architecture

### 1. Database Package (`packages/db`)
A new workspace package will be created at `packages/db` to encapsulate all database logic.

**Core Components:**
- **ORM:** Drizzle ORM (lightweight, SQL-like, excellent TypeScript support).
- **Driver:** `postgres-js` (optimized for performance and Supabase Transaction Mode).
- **Connection:** Direct connection via Supabase Connection Pooler (Supavisor) on port 6543.
- **Configuration:** `drizzle.config.ts` for managing migrations and schema updates.

**Structure:**
```
packages/db/
├── package.json          # Dependencies: drizzle-orm, postgres, drizzle-kit
├── drizzle.config.ts     # Drizzle Kit configuration
├── src/
│   ├── index.ts          # Exports db client and schema
│   ├── schema.ts         # Database schema definitions
│   └── client.ts         # Database connection logic
```

### 2. Connection Strategy
- **Mode:** Transaction Mode (Port 6543) to handle serverless/edge environments efficiently.
- **Driver Config:** `prepare: false` in `postgres-js` to ensure compatibility with Supavisor.
- **Environment:** Connection string provided via `DATABASE_URL` environment variable.

### 3. Web Application Integration (`apps/web`)
The web application will consume the database client directly from `@bitwork/db`.

**Implementation Details:**
- **Dependency:** Add `@bitwork/db` to `apps/web/package.json`.
- **Component:** Create a `DbStatus` Server Component to verify connection.
  - Executes `SELECT current_database();`.
  - Displays "✅ Connected: [db_name]" or error state.
- **Environment:** Configure `.env` with the Supabase connection string.

## Data Flow
1.  **Request:** User visits `apps/web` home page.
2.  **Server Component:** `DbStatus` component renders on the server.
3.  **Database Call:** `db.execute(...)` is called via the imported `@bitwork/db` client.
4.  **Connection:** `postgres-js` connects to Supabase Pooler (Transaction Mode).
5.  **Response:** Database returns the current database name.
6.  **UI:** Component renders the connection status and name.

## Error Handling
- **Connection Failures:** Wrapped in `try/catch` blocks within the UI component to prevent page crashes.
- **Environment Variables:** Runtime check for `DATABASE_URL` presence, throwing a clear error if missing.

## Testing & Verification
- **Manual Verification:** The `DbStatus` component serves as the primary verification of connectivity.
- **Type Safety:** TypeScript ensures schema compatibility between the DB package and the web app.
