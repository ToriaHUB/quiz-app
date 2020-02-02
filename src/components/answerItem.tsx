import React from "react"
import styled from "styled-components"
import { theme } from "../styles/theme"
type Props = {
  title: string
  itemClick: () => void
  isCorrect: boolean
  answeredId: string
  ownId: string
}

export const AnswerItem: React.FC<Props> = ({ title, itemClick, isCorrect, ownId, answeredId }) => {
  return (
    <Item onClick={itemClick} isCorrect={isCorrect} answeredId={answeredId} ownId={ownId}>
      {title}
    </Item>
  )
}

const Item = styled.li<{ ownId: string; answeredId: string; isCorrect: boolean }>`
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 5px;
  cursor: pointer;
  background: ${props => getBackgroundColor(props)};
  transition: background 0.2s ease-in-out;
  &:hover {
    background: ${props => (props.answeredId ? getBackgroundColor(props) : "rgba(255, 255, 255, 0.2)")};
  }
`
const getBackgroundColor = (props: { isCorrect: boolean; ownId: string; answeredId: string }) => {
  if (props.ownId === props.answeredId && props.isCorrect) return theme.color.green
  if (props.ownId === props.answeredId && !props.isCorrect) return theme.color.red
}
