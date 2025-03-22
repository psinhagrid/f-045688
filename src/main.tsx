import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Ant Design styles are automatically imported with components in v5
// No need for explicit import

createRoot(document.getElementById("root")!).render(<App />);
