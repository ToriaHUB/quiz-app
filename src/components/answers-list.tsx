import React, { useState } from "react"
import styled from "styled-components"
import { QuestionT } from "../types"
import { AnswerItem } from "./answerItem"

type Props = {
  question: QuestionT
  itemClick: () => void
}

export const AnswerList: React.FC<Props> = ({ question, itemClick }) => {
  const [answeredId, setAnsweredId] = useState<string>("")
  const handleAnswerClick = (isCorrect: boolean, questionId: string, answerId: string) => {
    return () => {
      itemClick()
      setAnsweredId(answerId)
      setTimeout(() => setAnsweredId(() => ""), 3000)
      //TODO: Add logic save result to store
    }
  }

  return (
    <List>
      {question.answers.map((answer, index) => {
        //TODO: add isCorrect
        return (
          <AnswerItem
            key={index}
            title={answer.title}
            isCorrect={answer.isCorrect}
            itemClick={handleAnswerClick(answer.isCorrect, question.id, answer.id)}
            answeredId={answeredId}
            ownId={answer.id}
          />
        )
      })}
    </List>
  )
}

const List = styled.ul`
  list-style: none;
`
