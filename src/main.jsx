import ReactDom from "react-dom/client"
import { App } from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { ScrollProvider } from "./context/ScrollContext";

ReactDom.createRoot(document.getElementById("root")).render(

  <ThemeProvider>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </ThemeProvider>
)

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}
