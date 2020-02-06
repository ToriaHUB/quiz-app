import React from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { StoreState } from "../redux"
import { QuizT } from "../types"
import { theme } from "../styles/theme"
import { Backdrop } from "./backdrop"
import { NavLink } from "react-router-dom"

type Props = {
  isDrawerVisible: boolean
  onClose: () => void
}

const links = [
  { to: "/", label: "List", exact: true },
  { to: "/auth", label: "Authorization", exact: false },
  { to: "/quiz-creator", label: "Create test", exact: false }
]

export const Drawer: React.FC<Props> = ({ isDrawerVisible, onClose }) => {
  const quizzes = useSelector<StoreState, QuizT[]>(state => state.quizzes)

  const closeClickHandler = () => {
    onClose()
  }
  const renderLinks = () => {
    return links.map((link, index) => (
      <ListItem key={index}>
        <NavLinkStyled to={link.to} exact={link.exact} onClick={closeClickHandler}>
          {link.label}
        </NavLinkStyled>
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
const NavLinkStyled = styled(NavLink)`
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
