import React from "react"
import styled from "styled-components"
import { theme } from "../styles/theme"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import { StoreState } from "../redux"
import { QuizResultsT } from "../redux/redusers/quiz-rezults"

export const FinishedQuiz = () => {
  const quizResults = useSelector<StoreState, QuizResultsT>(state => state.quizResults)

  const rightAnswers = quizResults.reduce((total, answer) => {
    if (answer.isCorrect) {
      return total + 1
    }
    return total
  }, 0)

  return (
    <>
      <FinishQuizWrapper>
        <List>
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
        </List>
        <p>
          Right {rightAnswers} from {quizResults.length}
        </p>
        <div>
          <button>Repeat</button>
        </div>
      </FinishQuizWrapper>
    </>
  )
}

const FinishQuizWrapper = styled.div`
  padding: 20px;
  color: ${theme.color.white};
  border: 2px solid ${theme.color.white};
  border-radius: 5px;
  margin: 0 10px;
`
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
const ListElement = styled.li``
const Icon = styled(FontAwesomeIcon)`
  margin-left: 10px;
  color: ${props => props.color};
`
