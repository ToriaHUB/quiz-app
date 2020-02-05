import React from "react"
import styled from "styled-components"
import { theme } from "../styles/theme"

type Props = {
  click: () => void
  disabled: boolean
  color: "error" | "success" | "primary"
}
export const Button: React.FC<Props> = ({ children, disabled, color, click }) => {
  return (
    <ButtonStyle disabled={disabled} color={color} onClick={click}>
      {children}
    </ButtonStyle>
  )
}

const ButtonStyle = styled.button<{ color: "error" | "success" | "primary" }>`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 4px;
  border: none;
  color: ${theme.color.white};
  margin-right: 15px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.3);
  }
  &:disabled {
    background: ${theme.color.grey};
    cursor: not-allowed;
  }
  background-color: ${props => (props.color ? getButtonBgColor(props) : theme.color.blue)};
`
export const getButtonBgColor = (props: { color: "error" | "success" | "primary" }) => {
  if (props.color === "success") return theme.color.green
  if (props.color === "error") return theme.color.red
  if (props.color === "primary") return theme.color.blue
}
