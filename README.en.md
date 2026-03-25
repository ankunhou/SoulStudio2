
# SoulStudio - Intelligent Studio

A modern full-stack application that provides an intuitive user interface and powerful backend services, designed to help users efficiently create and manage various projects.

## Project Architecture

### Frontend (app/)
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Installed Dependencies**: React Flow (@xyflow/react), Vercel AI SDK (ai)

### Backend (server/)
- **Framework**: FastAPI
- **Database**: PostgreSQL
- **ORM**: SQLModel
- **Authentication**: JWT (JSON Web Token)
- **Deployment**: Docker Compose

## Current Status

### app/ (Frontend Application)
Frontend project under development, currently includes:
- Basic React + TypeScript + Vite project structure
- Tailwind CSS styling configuration
- Installed but not yet integrated dependencies:
  - `@xyflow/react` - Flowchart library
  - `ai` - Vercel AI SDK

### server/ (Backend Services)
Complete admin backend system, including:
- FastAPI backend API
- React admin frontend (auto-generated OpenAPI client)
- User authentication and authorization
- Docker Compose deployment configuration

## Planned Features

- **Visual Workflow Design**: Create and manage complex flowcharts using React Flow
- **AI-Assisted Development**: Integrated Vercel AI SDK for intelligent suggestions and code generation
- **Real-time Collaboration**: Support for simultaneous editing and viewing by multiple users

## Quick Start

### Frontend Development

```bash
cd app
pnpm install
pnpm run dev
```

### Backend Development

```bash
cd server
# Install dependencies using uv or pip
uv sync  # or pip install -r requirements.txt

# Start development server
uv run python -m backend.main --host 0.0.0.0 --port 8000
```

## Project Structure

```
SoulStudio/
├── app/                    # Frontend application (in development)
│   ├── public/             # Static assets
│   ├── src/                # Source code
│   │   ├── App.tsx         # Main application component
│   │   ├── main.tsx        # Application entry point
│   │   ├── index.css       # Global styles
│   │   └── assets/         # Images and icon resources
│   ├── package.json        # Frontend dependency configuration
│   ├── tsconfig.json       # TypeScript configuration
│   └── vite.config.ts      # Vite configuration
├── server/                 # Backend services
│   ├── backend/            # Backend source code
│   ├── frontend/           # Admin frontend
│   ├── deployment.md       # Deployment instructions
│   ├── development.md      # Development guide
│   └── package.json        # Backend dependency configuration
└── README.md               # Project overview (this document)
```

## Technology Stack Features

- **Modern Toolchain**: Using Vite for an extremely fast development experience
- **Type Safety**: Full-stack TypeScript support
- **Responsive Design**: Adaptive layout with dark mode support
- **Secure Architecture**: JWT authentication and password hashing protection

## Development and Contribution

Please check the detailed documentation for each part:
- Frontend Development: [app/README.md](app/README.md)
- Backend Development: [server/README.md](server/README.md)

## License

MIT License

---

**SoulStudio** - Make development smarter, work more efficient!

