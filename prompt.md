🚀 SmartHub – One-Shot Full Stack Secure Bot Platform Scaffold

You are a GitHub Copilot fullstack generator. Please scaffold the entire SmartHub system as a secure, production-ready full stack bot platform.

🧠 Objective

Build a full system that:

Accepts Telegram/Viber webhooks securely via Express.js (TypeScript)

Stores logs/messages/users in Supabase PostgreSQL (with RLS)

Provides a secure, role-based Admin Dashboard (Next.js + Supabase Auth)

Uses Docker, GitHub Actions, and secure .env practices

Includes Plugin support (e.g. Discord bot) under services/platforms

Follows security best practices: Zod validation, JWT auth, rate limiting, replay detection



---

📁 Scaffold the following exact structure

/smarthub/ ├── apps/ │   ├── api/                 # Express.js + TypeScript │   │   ├── controllers/ │   │   │   ├── telegramController.ts │   │   │   ├── viberController.ts │   │   ├── services/ │   │   │   ├── botService.ts │   │   │   ├── messageService.ts │   │   │   └── platforms/ │   │   │       ├── telegram.ts │   │   │       ├── viber.ts │   │   │       └── discord.ts │   │   ├── middlewares/ │   │   │   ├── authMiddleware.ts │   │   │   ├── errorHandler.ts │   │   │   ├── rateLimiter.ts │   │   │   └── roleGuard.ts │   │   ├── validators/ │   │   │   ├── telegramValidator.ts │   │   │   ├── viberValidator.ts │   │   │   └── discordValidator.ts │   │   ├── routes/ │   │   │   ├── webhookRoutes.ts │   │   │   └── index.ts │   │   ├── openapi/swagger.ts │   │   ├── tests/ │   │   │   ├── webhook-security.test.ts │   │   │   ├── replay-detection.test.ts │   │   │   └── rate-limit.test.ts │   │   ├── types/ │   │   │   ├── bot.ts │   │   │   └── message.ts │   │   ├── app.ts │   │   ├── server.ts │   │   ├── .env.example │   │   ├── Dockerfile │   │   └── README.md │   └── admin/               # Next.js 14 + Supabase Auth │       ├── app/ │       │   ├── layout.tsx │       │   ├── page.tsx │       │   ├── bots/page.tsx │       │   ├── logs/page.tsx │       │   ├── users/page.tsx │       │   └── webhooks/page.tsx │       ├── components/ │       │   ├── AuthGuard.tsx │       │   ├── BotForm.tsx │       │   ├── LogTable.tsx │       │   ├── UserTable.tsx │       │   └── WebhookStatus.tsx │       ├── lib/ │       │   ├── supabaseClient.ts │       │   └── roleUtils.ts │       ├── tests/ │       │   └── auth-flow.spec.ts │       ├── tailwind.config.js │       ├── shadcn.config.js │       ├── .env.example │       ├── Dockerfile │       └── README.md ├── supabase/ │   ├── schema.sql │   ├── rls-policies.sql │   └── seed.sql ├── docs/ │   ├── STRIDE-threat-model.md │   ├── architecture-diagram.drawio │   └── openapi.yaml ├── .github/workflows/ │   └── ci.yml ├── docker-compose.yml ├── .env.example └── README.md


---

🔐 Key Requirements per Section

✅ API Features

All payloads must pass Zod validation

Require bot token verification in every webhook

Add rateLimiter middleware with custom threshold

Enable replay detection using message_id deduplication

Add Swagger endpoint for all routes


✅ Admin Portal Features

Authenticated via Supabase Auth (JWT)

Role-based UI (Admin, Viewer)

Pages to manage:

Bots

Messages/Logs

Users

Webhook health


Use TailwindCSS + shadcn/ui


✅ Database (Supabase)

Tables: bots, messages, users, logs

Enable RLS

Define RBAC policies in SQL

Service role key only used in API


✅ DevOps

Dockerfile for each app (API & Admin)

docker-compose.yml for orchestration

CI workflow to:

Lint

Test (Jest, Playwright)

Build


.env.example with secure placeholder values


✅ Tests

Jest:

webhook payload rejection

token failure

duplicate detection


Playwright:

login flow

role-based view




---

⏭️ Output Instructions

Please start generating the scaffold and include code where applicable:

server.ts, app.ts

Telegram webhook route → controller → validator

Supabase SQL schema

BotForm.tsx UI component

Dockerfiles + GitHub Actions workflow

RLS policies


Be sure to match file/folder names exactly to the structure above. Write all code in TypeScript (backend and frontend).


---

🧩 Notes

This project is designed for SaaS-grade security

Follow minimal privilege access, secure headers, JWT cookie auth

Use modular, pluggable architecture so Discord/Slack bots can be added easily

All API errors should follow { error: string } JSON format


