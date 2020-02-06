import React from "react"
import styled from "styled-components"
import { QuizT } from "../types"
import { theme } from "../styles/theme"
import { NavLink } from "react-router-dom"
import { routes } from "../router"

type Props = {
  quizzesData: QuizT[]
}

export const Quizzes: React.FC<Props> = ({ quizzesData }) => {
  return (
    <QuizzesWrapper>
      <Title>Quizzes list</Title>
      {quizzesData.map((quiz, index) => (
        <QuizName key={index}>
          <NavLinkStyled to={routes.activeQuiz.replace(":id", quiz.id)}>{quiz.title}</NavLinkStyled>
        </QuizName>
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
const NavLinkStyled = styled(NavLink)`
  color: ${theme.color.white};
  font-size: 30px;
  text-decoration: none;
  transition: opacity 0.3ms;
  &:hover,
  &:active {
    opacity: 0.7;
  }
`
