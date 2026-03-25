# project-lizzy

Next.js e-commerce application with an Express.js backend. Originally forked from a starter template.

## Status

Early-stage. No tests pass. No CI beyond a scheduled Claude Code self-improvement workflow. The codebase mixes two state management libraries (Jotai and Zustand) and ships duplicate model files.

## Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js, React 17, Tailwind CSS |
| State | Jotai + Zustand (both present) |
| Backend | Express.js |
| Database | MongoDB (via Mongoose) + SQLite (via sqlite3) |
| Auth | JWT (jsonwebtoken + bcryptjs) |
| Payments | Paytm |
| File storage | Cloudinary |
| Blockchain | Polkadot.js, NEAR API |
| i18n | next-i18next (en, de, zh) |

## Structure

```
server/          Express API (users, products, orders, payments)
public/          Static assets, locale files, token icons
src/             (implicit) Next.js pages and components
```

## Running locally

```bash
npm install
npm start
```

Starts both the Express server and Next.js dev server on port 3002. Requires a `server/config/config.env` file (see `config.env.example`).

## Known issues

- Duplicate Mongoose models (e.g. `server/models/orderModel.js` and `server/models/Order.js`)
- Two competing state management libraries installed
- No test suite configured beyond Jest scaffolding
- React 17 (current is 19)
- package.json lists `"license": "GPL3"` but LICENSE file says MIT

## License

MIT (per LICENSE file)