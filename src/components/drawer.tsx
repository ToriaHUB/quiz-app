import React from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { StoreState } from "../redux"
import { QuizT } from "../types"
import { theme } from "../styles/theme"
import { Backdrop } from "./backdrop"

type Props = {
  isDrawerVisible: boolean
  onClose: () => void
}

export const Drawer: React.FC<Props> = ({ isDrawerVisible, onClose }) => {
  const quizzes = useSelector<StoreState, QuizT[]>(state => state.quizzes)

  const renderLinks = () => {
    return quizzes.map((quiz, index) => (
      <ListItem key={index}>
        <LinkWrap>{quiz.title}</LinkWrap>
      </ListItem>
    ))
  }

  return (
    <>
      <Navigation isDrawerVisible={isDrawerVisible}>
        <List>{renderLinks()}</List>
      </Navigation>
      {isDrawerVisible ? <Backdrop onClose={onClose} /> : null}
    </>
  )
}

const Navigation = styled.nav<{ isDrawerVisible: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80%;
  max-width: 300px;
  padding: 20px 10px;
  background: ${theme.color.white};
  z-index: 90;
  transform: ${props => (props.isDrawerVisible ? "translateX(0px)" : "translateX(-300px)")};
  transition: transform 0.22s ease-in;
`

const List = styled.ul`
  list-style: none;
`
const ListItem = styled.li`
  margin-bottom: 15px;
`
const LinkWrap = styled.a`
  color: #363d54;
  font-size: 30px;
  text-decoration: none;
  background-color: #fff;
  position: relative;
  padding: 0 20px 10px 20px;
  transition: opacity 0.3ms;
  &:hover,
  &:active {
    opacity: 0.7;
  }
`
