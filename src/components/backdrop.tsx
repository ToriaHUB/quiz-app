import React from "react"
import styled from "styled-components"

type Props = {
  onClose: () => void
}

export const Backdrop: React.FC<Props> = ({ onClose }) => {
  return <BackdropStyle onClick={onClose} />
}

const BackdropStyle = styled.div`
  z-index: 50;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
