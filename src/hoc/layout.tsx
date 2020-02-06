import React, { useState } from "react"
import styled from "styled-components"
import { MenuToggle } from "../components/menu-toggle"
import { theme } from "../styles/theme"
import { Drawer } from "../components/drawer"

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)
  const handleIsOpen = () => {
    setIsDrawerVisible(!isDrawerVisible)
  }
  const menuCloseHandler = () => {
    setIsDrawerVisible(false)
  }
  return (
    <LayoutContainer>
      <Drawer isDrawerVisible={isDrawerVisible} onClose={menuCloseHandler} />
      <MenuToggle setIsDrawerVisible={handleIsOpen} isDrawerVisible={isDrawerVisible} />
      <ChildrenContainer>{children}</ChildrenContainer>
    </LayoutContainer>
  )
}

export const LayoutContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  background-image: ${theme.gradient.universe};
  height: 100vh;
  width: 100vw;
`
export const ChildrenContainer = styled.main`
  padding-top: 100px;
`
