import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/Providers/theme-provider.tsx";
import ErrorBoundary from "./shared/providers/ErrorBoundary.tsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
      <ToastContainer position="top-right" autoClose={3000} />
    </ErrorBoundary>
  </>
);
