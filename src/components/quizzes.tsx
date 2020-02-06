import React from "react"
import styled from "styled-components"
import { QuizT } from "../types"
import { theme } from "../styles/theme"

type Props = {
  quizzesData: QuizT[]
}

export const Quizzes: React.FC<Props> = ({ quizzesData }) => {
  return (
    <QuizzesWrapper>
      <Title>Quizzes list</Title>
      {quizzesData.map((quiz, index) => (
        <QuizName key={index}>{quiz.title}</QuizName>
      ))}
    </QuizzesWrapper>
  )
}

const Title = styled.h1`
  color: ${theme.color.white};
  margin: auto;
`
const QuizzesWrapper = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  width: 600px;
  flex-grow: 1;
  color: #fff;
`
const QuizName = styled.h2`
  margin: auto;
`
