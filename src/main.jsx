import ReactDom from "react-dom/client"
import { App } from "@/App";
import { ThemeProvider } from "@/context/ThemeContext";
import { ScrollProvider } from "@/context/ScrollContext";

// Render the app inside Theme and Scroll providers
ReactDom.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </ThemeProvider>
)

// Register service worker for offline support (PWA)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}
