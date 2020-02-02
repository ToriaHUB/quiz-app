import React from "react"
import styled from "styled-components"
type Props = {
  title: string
  itemClick: () => void
}

export const AnswerItem: React.FC<Props> = ({ title, itemClick }) => {
  return <Item onClick={itemClick}>{title}</Item>
}

const Item = styled.li`
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`
