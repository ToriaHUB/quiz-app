import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { AnswerList } from "./answers-list"
import { StoreState } from "../redux"
import { useDispatch, useSelector } from "react-redux"
import { QuizT } from "../types"
import { useHistory, useParams } from "react-router"

type Props = {}

export const ActiveQuiz: React.FC<Props> = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const activeQuizId = useParams<{ id: string }>()
  const activeQuiz = useSelector<StoreState, QuizT | null | undefined>(state =>
    state.quizzes.find(quiz => quiz.id === activeQuizId.id)
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: "SET_ACTIVE_QUIZ", data: activeQuiz })
  }, [activeQuiz, dispatch])
  let history = useHistory()

  const switchQuestion = () => {
    setTimeout(() => {
      if (activeQuiz && currentQuestionIndex < activeQuiz.questions.length - 1) {
        setCurrentQuestionIndex(prevState => prevState + 1)
      } else {
        history.push("/quiz-results")
      }
    }, 3000)
  }

  if (activeQuiz && activeQuiz.questions) {
    return (
      <>
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
