import React from "react"
import styled from "styled-components"
import { theme } from "../styles/theme"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { StoreState } from "../redux"
import { QuizResultsT } from "../redux/redusers/quiz-rezults"
import { Button } from "./button"

export const FinishedQuiz = () => {
  const quizResults = useSelector<StoreState, QuizResultsT>(state => state.quizResults)
  const dispatch = useDispatch()

  const rightAnswers = quizResults.reduce((total, answer) => {
    if (answer.isCorrect) {
      return total + 1
    }
    return total
  }, 0)

  const handleOnRetry = () => {
    dispatch({ type: "CLEAR_RESULTS" })
  }

  return (
    <FinishedQuizWrapper>
      <ResultsContainer>
        <QuestionList>
          {quizResults.map(answerResult => {
            return (
              <ListElement>
                <strong>{answerResult.questionNumber}. </strong>
                {answerResult.questionTitle}
                <Icon
                  icon={answerResult.isCorrect ? faCheck : faTimes}
                  color={answerResult.isCorrect ? theme.color.green : theme.color.red}
                />
              </ListElement>
            )
          })}
        </QuestionList>
        <CountedResults>
          Right {rightAnswers} from {quizResults.length}
        </CountedResults>
        <ButtonWrapper>
          <Button color={"primary"} disabled={false} click={handleOnRetry}>
            Repeat
          </Button>
          <Button color={"success"} disabled={false} click={() => {}}>
            Back to quiz
          </Button>
        </ButtonWrapper>
      </ResultsContainer>
    </FinishedQuizWrapper>
  )
}
const FinishedQuizWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
`
const ResultsContainer = styled.div`
  padding: 20px;
  color: ${theme.color.white};
  border: 2px solid ${theme.color.white};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`
const QuestionList = styled.ul`
  list-style: none;
`
const ListElement = styled.li``

const Icon = styled(FontAwesomeIcon)`
  margin-left: 10px;
  color: ${props => props.color};
`
const CountedResults = styled.div`
  margin: 10px 0;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px 0;
`
