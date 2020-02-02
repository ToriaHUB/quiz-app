import React from "react"
import styled from "styled-components"
import { AnswerT } from "../types"
import { AnswerItem } from "./answerItem"

type Props = {
  answers: AnswerT[]
  itemClick: () => void
}

export const AnswerList: React.FC<Props> = ({ answers, itemClick }) => {
  return (
    <List>
      {answers.map((answer, index) => {
        //TODO: add isCorrect
        return <AnswerItem key={index} title={answer.title} itemClick={itemClick} />
      })}
    </List>
  )
}

const List = styled.ul`
  list-style: none;
`
