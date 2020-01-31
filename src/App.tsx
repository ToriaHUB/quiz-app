import React from "react"
import { Layout } from "./hoc/layout"
import { Quiz } from "./components/quiz"
import { GlobalStyles } from "./styles"

const mockQuiz = {
  title: "Favourite color",
  questions: [
    {
      number: 1,
      title: "What is your favourite color",
      answers: [
        { title: "red", isCorrect: true },
        { title: "blue", isCorrect: false },
        { title: "green", isCorrect: false }
      ]
    },
    {
      number: 2,
      title: "What is your dog favourite color",
      answers: [
        { title: "red", isCorrect: false },
        { title: "blue", isCorrect: false },
        { title: "green", isCorrect: true }
      ]
    }
  ]
}

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Quiz quizData={mockQuiz} />
      </Layout>
    </>
  )
}

export default App
