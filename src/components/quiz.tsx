import React from "react"
import styled from "styled-components"
import { QuizT } from "../types"
import { ActiveQuiz } from "./active-quiz"

type Props = {
  quizData: QuizT
}

export const Quiz: React.FC<Props> = ({ quizData }) => {
  return (
    <QuizStyle>
      <QuizName>{quizData.title}</QuizName>
    </QuizStyle>
  )
}

const QuizStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  flex-grow: 1;
  width: 100%;
`

const ActiveQuizWrapper = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  width: 600px;
  color: #fff;
`
const QuizName = styled.h1`
  margin-bottom: 10px;
`
