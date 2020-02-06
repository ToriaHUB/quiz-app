import React from "react"
import { Layout } from "./hoc/layout"
import { GlobalStyles } from "./styles"
import { Router } from "./router"

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Router />
      </Layout>
    </>
  )
}

export default App
