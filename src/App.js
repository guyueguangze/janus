import React from "react"
import { BrowserRouter } from "react-router-dom"
import "antd/dist/reset.css"
import Router from "./routes"
export default function App() {
  return (
    <div id="main" style={{ width: "100%", height: "100%" }}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}
