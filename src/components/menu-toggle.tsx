import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { theme } from "../styles/theme"

type Props = {
  setIsDrawerVisible: () => void
  isDrawerVisible: boolean
}

export const MenuToggle: React.FC<Props> = ({ isDrawerVisible, setIsDrawerVisible }) => {
  return (
    <Icon icon={isDrawerVisible ? faTimes : faBars} onClick={setIsDrawerVisible} isDrawerVisible={isDrawerVisible} />
  )
}

const Icon = styled(FontAwesomeIcon)<{ isDrawerVisible: boolean }>`
  position: fixed;
  top: 40px;
  left: ${props => (props.isDrawerVisible ? "320px" : "40px")};
  font-size: 20px;
  cursor: pointer;
  color: ${theme.color.white};
  transition: opacity, left 0.22s ease-in;
  z-index: 100;
  &:hover {
    opacity: 0.7;
  }
`
