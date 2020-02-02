import React from "react"
import { Layout } from "./hoc/layout"
import { Quiz } from "./components/quiz"
import { GlobalStyles } from "./styles"
import { useSelector } from "react-redux"
import { StoreState } from "./redux"
import { QuizT } from "./types"

const App: React.FC = () => {
  const quizzes = useSelector<StoreState, QuizT[]>(state => state.quizzes)
  return (
    <>
      <GlobalStyles />
      <Layout>
        {quizzes.map((quiz, index) => (
          <Quiz key={index} quizData={quiz} />
        ))}
      </Layout>
    </>
  )
}

export default App
