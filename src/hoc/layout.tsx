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
  justify-content: center;
  background-image: linear-gradient(-45deg, #00dbde, #fc00ff);
  height: 100vh;
  width: 100vw;
`
