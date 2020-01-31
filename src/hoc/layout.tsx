import React from "react"
import styled from "styled-components"

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutStyle>
      <main>{children}</main>
    </LayoutStyle>
  )
}

export const LayoutStyle = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  background-image: linear-gradient(45deg, #fc00ff, #020024);
  height: 100vh;
  width: 100vw;
`
