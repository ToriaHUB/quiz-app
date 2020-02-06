import { Reducer } from "redux"
import { QuizT } from "../../types"
import { ActionType } from "../types"

export type QuizzesState = QuizT[]

export const initialQuizzesState = [
  {
    id: "quizId1",
    title: "Quizzes 1 ",
    questions: [
      {
        id: "questId1",
        number: 1,
        title: "What is your name",
        answers: [
          { id: "1", title: "Alex", isCorrect: true },
          { id: "2", title: "Zuzka", isCorrect: false },
          { id: "3", title: "Ann", isCorrect: false }
        ]
      },
      {
        id: "questId2",
        number: 2,
        title: "What is your mather's name",
        answers: [
          { id: "4", title: "Lucie", isCorrect: false },
          { id: "5", title: "Alena", isCorrect: false },
          { id: "6", title: "Marie", isCorrect: true }
        ]
      }
    ]
  },
  {
    id: "quizId2",
    title: "Quizzes 2 ",
    questions: [
      {
        id: "questId1",
        number: 1,
        title: "What is your name",
        answers: [
          { id: "1", title: "Alex", isCorrect: true },
          { id: "2", title: "Zuzka", isCorrect: false },
          { id: "3", title: "Ann", isCorrect: false }
        ]
      },
      {
        id: "questId2",
        number: 2,
        title: "What is your mather's name",
        answers: [
          { id: "4", title: "Lucie", isCorrect: false },
          { id: "5", title: "Alena", isCorrect: false },
          { id: "6", title: "Marie", isCorrect: true }
        ]
      }
    ]
  }
]

export const quizzesReducer: Reducer<QuizzesState, ActionType<QuizT[]>> = (state = initialQuizzesState, action) => {
  switch (action.type) {
    case "SET_QUIZZES":
      if (action.data) {
        return [...state, ...action.data]
      }
      console.error("parameter not passed")
      return state

    default:
      return state
  }
}
