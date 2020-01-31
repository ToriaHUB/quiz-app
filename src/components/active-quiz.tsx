import React from "react"
import styled from "styled-components"
import { AnswerList } from "./answers-list"
import { QuestionT } from "../types"

const mockQuestion: QuestionT = {
  number: 1,
  title: "What is your favourite color",
  answers: [
    { title: "red", isCorrect: true },
    { title: "blue", isCorrect: false },
    { title: "green", isCorrect: false }
  ]
}

type Props = {}

export const ActiveQuiz: React.FC<Props> = () => {
  return (
    <>
      <ActiveQuizStyle>
        <Question>
          <span>
            <strong>
              {`${mockQuestion.number}. `}
              {mockQuestion.title}
            </strong>
          </span>
          <small>{mockQuestion.number} из 5</small>
        </Question>
        <AnswerList answers={mockQuestion.answers} />
      </ActiveQuizStyle>
    </>
  )
}

const ActiveQuizStyle = styled.div`
  padding: 20px;
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
`
const Question = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`
