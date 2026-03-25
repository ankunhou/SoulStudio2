
# SoulStudio Frontend

A modern frontend application built with React + TypeScript + Vite.

## Tech Stack

- **React 19** - User interface library
- **TypeScript** - Type-safe JavaScript superset
- **Vite** - Extremely fast frontend build tool
- **Tailwind CSS** - Utility-first CSS framework

### Installed Dependencies (Pending Integration)

- **React Flow (@xyflow/react)** - Flowchart and node editing library
- **Vercel AI SDK (ai)** - AI feature integration

## Current Status

This is a frontend project under development, currently including:
- Basic React + TypeScript + Vite project structure
- Tailwind CSS styling configuration
- Simple demo application (counter)

## Quick Start

### Install Dependencies

```bash
pnpm install
```

### Start Development Server

```bash
pnpm run dev
```

The development server will start at `http://localhost:5173`.

### Build for Production

```bash
pnpm run build
```

Build output will be in the `dist` directory.

### Preview Production Build

```bash
pnpm run preview
```

### Code Linting

```bash
pnpm run lint
```

## Project Structure

```
app/
├── public/             # Static assets directory
├── src/
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry file
│   ├── index.css       # Global styles
│   ├── App.css         # Application styles
│   └── assets/         # Images and other resource files
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tsconfig.node.json  # Node.js TypeScript configuration
├── vite.config.ts      # Vite configuration
└── eslint.config.js    # ESLint configuration
```

## Planned Features

### 1. Visual Workflow Editing
- Drag-and-drop node editor based on React Flow
- Support for custom node types and connection rules
- Real-time updates and node state management

### 2. AI Intelligent Assistance
- Integrated Vercel AI SDK
- Provides intelligent code completion and suggestions
- Supports multiple AI models

### 3. Responsive Design
- Complete responsive layout using Tailwind CSS
- Supports dark/light theme switching
- Adapts to mobile devices and desktop

## Theme Customization

The project uses CSS variables for theme support, which can be customized in `src/index.css`:

```css
:root {
  --text: #6b6375;           /* Text color */
  --text-h: #08060d;         /* Heading text color */
  --bg: #fff;                 /* Background color */
  --border: #e5e4e7;         /* Border color */
  --code-bg: #f4f3ec;        /* Code block background */
  --accent: #aa3bff;         /* Primary color */
  --accent-bg: rgba(170, 59, 255, 0.1);    /* Accent background */
  --accent-border: rgba(170, 59, 255, 0.5); /* Accent border */
}
```

## Browser Support

- Chrome (latest version)
- Firefox (latest version)
- Safari (latest version)
- Edge (latest version)

## License

MIT License

