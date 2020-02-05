import React, { useState } from "react"
import styled from "styled-components"
import { QuestionResultT, QuestionT } from "../types"
import { AnswerItem } from "./answer-item"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { ActionType } from "../redux/types"

type Props = {
  question: QuestionT
  itemClick: () => void
}

export const AnswerList: React.FC<Props> = ({ question, itemClick }) => {
  const dispatch = useDispatch<Dispatch<ActionType<QuestionResultT>>>()
  const [answeredId, setAnsweredId] = useState<string>("")
  const handleAnswerClick = (isCorrect: boolean, questionId: string, answerId: string) => {
    return () => {
      itemClick()
      setAnsweredId(answerId)
      dispatch({
        type: "ADD_QUESTION_RESULTS",
        data: {
          questionNumber: question.number,
          questionTitle: question.title,
          questionId: questionId,
          isCorrect: isCorrect
        }
      })
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
