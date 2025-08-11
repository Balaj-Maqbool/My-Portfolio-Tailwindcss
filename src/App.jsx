import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import { Toaster } from "./components/ui/toaster.jsx" // Notification/toast container

const App = () => {
  return (
    <>
      {/* Global toast notifications */}
      <Toaster />

      {/* App routing */}
      <BrowserRouter>
        <Routes>
          {/* Default homepage */}
          <Route index element={<Home />} />

          {/* Catch-all route for invalid URLs */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export { App }
