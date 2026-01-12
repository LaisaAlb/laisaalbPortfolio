import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import PageHeader from "../components/Header/Header"

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />

      <main
        className="
          min-h-screen
          flex justify-center
          md:justify-start
          pt-4 md:pt-2
          md:ml-64
        "
      >
        <div className="w-full max-w-md md:max-w-none px-4 md:px-6">
          {/* ⬅️ SEM hidden AQUI */}
          <PageHeader />

          <Outlet />
        </div>
      </main>
    </div>
  )
}
