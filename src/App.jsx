import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
const Home = React.lazy(() => import("@/pages/Home"))
const PageNotFound = React.lazy(() => import("@/pages/PageNotFound"))
import { Toaster } from "@/components/ui/toaster.jsx" // Notification/toast container





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
