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

