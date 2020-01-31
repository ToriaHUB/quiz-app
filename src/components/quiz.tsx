import React from "react"
import styled from "styled-components"

type Props = {}

export const Quiz: React.FC<Props> = () => {
  return <QuizStyle>Quiz</QuizStyle>
}

const QuizStyle = styled.h1`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  flex-grow: 1;
  width: 100%;
`
