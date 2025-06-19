# SmartHub

SmartHub is a unified, extensible multi-channel communication platform designed to centralize bot integrations across various messaging services—including Telegram and Viber. Built with Express.js and TypeScript, SmartHub enables structured, secure, and scalable management of bot-based interactions, message processing, and channel expansion.

---

## 🎯 Purpose

SmartHub’s core objective is to provide a single backend for orchestrating multi-channel messaging bots, enabling teams to manage, monitor, and extend communication automations efficiently and securely. Its architecture anticipates rapid integration of new platforms and robust message handling for production environments.

---

## 🚀 Features

- **Multi-Platform Integration**
  - Native Telegram and Viber bot support
  - Modular design for future channel expansion

- **Message Processing**
  - Real-time webhook endpoints for each platform
  - Automated parsing and response to basic commands (e.g., "/hi")
  - Full message and event history tracked in Supabase

- **Infrastructure & Security**
  - Built on Express.js with TypeScript for type safety and maintainability
  - Supabase for managed PostgreSQL storage
  - Production-grade queue for message processing
  - CORS enabled and robust logging (Morgan)
  - Environment-based secrets and service keys

---

## 🛡️ Security Principles

- All secrets (tokens, database keys) are managed via environment variables
- Uses Supabase service role key for server-side DB access—**never expose this key to the client**
- CORS is enabled and restrictive by default
- Input/output validation on all webhook endpoints
- Logging excludes sensitive payloads

---

## 📋 Prerequisites

- Node.js (LTS version recommended)
- NPM or Yarn
- Supabase account and project
- Telegram Bot API Token
- Viber Bot API Token

---

## ⚙️ Environment Setup

Create a `.env` file in the project root:

```env
PORT=4000
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

---

## 🏗️ Installation & Startup

```bash
git clone https://github.com/EthanVT97/smartHub.git
cd smartHub
npm install
npm start
```

---

## 🔌 API Endpoints

### Telegram

- `POST /api/telegram/:botId`
  - Handles Telegram webhook updates for the specified bot
  - Stores messages and event metadata in Supabase
  - Responds to basic commands (e.g., "hi")

### Viber

- `POST /api/viber/:botId`
  - Handles Viber webhook callbacks for the specified bot
  - Stores messages and event metadata in Supabase
  - Responds to basic commands (e.g., "hi")

---

## 🗄️ Database Schema (Supabase)

### `bots`
- `id` (UUID): Primary Key
- `token`: Bot API token for the platform
- Additional configuration fields as needed

### `messages`
- `bot_id`: Foreign key to `bots`
- `platform`: 'telegram' | 'viber'
- `user_id`: Platform-specific user identifier
- `message`: Parsed message content
- `raw`: Full raw webhook/event payload (JSONB)

---

## 🧩 Extensibility

- Add new messaging platforms by extending platform-specific controller modules and implementing corresponding webhook routes.
- Platform abstraction layers allow for easy integration and channel-specific logic.

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m 'Describe your feature'`
4. Push and open a Pull Request

---

## 📄 License

MIT License—see the [LICENSE](LICENSE) file for details.

---

## 🙏 Credits

- [Express.js](https://expressjs.com/)
- [Supabase](https://supabase.com/)
- [Telegram Bot API](https://core.telegram.org/bots/api)
- [Viber API](https://developers.viber.com/docs/api/)
