import React, { useState } from "react"
import styled from "styled-components"
import { AnswerList } from "./answers-list"
import { QuizT } from "../types"
import { useSelector } from "react-redux"
import { StoreState } from "../redux"

type Props = {}

export const ActiveQuiz: React.FC<Props> = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const activeQuiz = useSelector<StoreState, QuizT | null>(state => state.activeQuiz)

  const switchQuestion = () => {
    setTimeout(() => {
      if (activeQuiz && currentQuestionIndex < activeQuiz.questions.length - 1) {
        setCurrentQuestionIndex(prevState => prevState + 1)
      } else {
        console.log("Result")
        //TODO: add quiz result
      }
    }, 3000)
  }

  if (activeQuiz && activeQuiz.questions) {
    return (
      <>
        <ActiveQuizStyle>
          <Question>
            <span>
              <strong>
                {`${activeQuiz.questions[currentQuestionIndex].number}. `}
                {activeQuiz.questions[currentQuestionIndex].title}
              </strong>
            </span>
            <small>
              {activeQuiz.questions[currentQuestionIndex].number} из {activeQuiz.questions.length}
            </small>
          </Question>
          <AnswerList question={activeQuiz.questions[currentQuestionIndex]} itemClick={switchQuestion} />
        </ActiveQuizStyle>
      </>
    )
  }
  return null
}

const ActiveQuizStyle = styled.div`
  padding: 20px;
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
`
const Question = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`
