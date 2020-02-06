import React, { useState } from "react"
import styled from "styled-components"
import { AnswerList } from "./answers-list"
import { StoreState } from "../redux"
import { FinishedQuiz } from "./finished-quiz"
import { useSelector } from "react-redux"
import { QuizT } from "../types"

type Props = {}

export const ActiveQuiz: React.FC<Props> = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [finishedQuiz, setFinishedQuiz] = useState(false)
  const activeQuiz = useSelector<StoreState, QuizT | null>(state => state.activeQuiz)

  const switchQuestion = () => {
    setTimeout(() => {
      if (activeQuiz && currentQuestionIndex < activeQuiz.questions.length - 1) {
        setCurrentQuestionIndex(prevState => prevState + 1)
      } else {
        setFinishedQuiz(true)
      }
    }, 3000)
  }

  if (activeQuiz && activeQuiz.questions) {
    return (
      <>
        {finishedQuiz ? (
          <FinishedQuiz />
        ) : (
          <ActiveQuizWrapper>
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
          </ActiveQuizWrapper>
        )}
      </>
    )
  }
  return null
}

const ActiveQuizWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  color: #fff;
`

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
