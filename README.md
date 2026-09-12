# Apex Commerce UI

Apex Commerce UI is the modern, React-based frontend for the Apex Commerce platform. It provides a sleek, glassmorphic dark-mode interface for managing e-commerce data synchronization across platforms like Amazon and Flipkart.

## Features

- **Premium Design:** Glassmorphic UI elements and a curated dark mode aesthetic.
- **Authentication:** Secure login and registration flows via JWT integration with the FastAPI backend.
- **Organization Management:** (Upcoming) Multi-tenant organization handling.
- **Marketplace Integrations:** (Upcoming) Sync product catalogs and metrics from Amazon and Flipkart.

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router DOM (v6)
- **Styling:** Custom Vanilla CSS (Dark mode, CSS variables, Micro-animations)
- **HTTP Client:** Axios
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- The [Apex Commerce AI backend](https://github.com/your-username/apex-commerce-ai) running locally on port `8000`.

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd apex-commerce-ui
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the Vite development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`. 

By default, the UI expects the backend API to be available at `http://localhost:8000/api`. If your backend is running elsewhere, you can configure the API URL using environment variables (e.g., `VITE_API_URL`).

## Folder Structure

- `src/pages/`: Contains the main route components (e.g., `Login.jsx`, `Register.jsx`, `Welcome.jsx`).
- `src/context/`: React context providers (e.g., `AuthContext.jsx` for global auth state).
- `src/services/`: API integration and HTTP clients (e.g., `api.js`).
- `src/index.css`: Global styles, CSS variables, and layout utilities.
- `src/App.jsx`: Main application routing and navigation logic.
