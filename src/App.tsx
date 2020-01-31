import React from "react"
import { Layout } from "./hoc/layout"
import { Quiz } from "./components/quiz"

const App: React.FC = () => {
  return (
    <Layout>
      <Quiz />
    </Layout>
  )
}

export default App
