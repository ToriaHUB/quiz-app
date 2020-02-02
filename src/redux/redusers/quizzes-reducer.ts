import { Reducer } from "redux"
import { QuizT } from "../../types"
import { ActionType } from "../types"

export type QuizzesState = QuizT[]

export const initialQuizzesState = [
  {
    id: "quizId1",
    title: "Quiz 1 ",
    questions: [
      {
        id: "questId1",
        number: 1,
        title: "What is your favourite color",
        answers: [
          { title: "red", isCorrect: true },
          { title: "blue", isCorrect: false },
          { title: "green", isCorrect: false }
        ]
      },
      {
        id: "questId2",
        number: 2,
        title: "What is your dog favourite color",
        answers: [
          { title: "red", isCorrect: false },
          { title: "blue", isCorrect: false },
          { title: "green", isCorrect: true }
        ]
      }
    ]
  },
  {
    id: "quizId2",
    title: "Quiz 2 ",
    questions: [
      {
        id: "questId1",
        number: 1,
        title: "What is your name",
        answers: [
          { title: "Alex", isCorrect: true },
          { title: "Zuzka", isCorrect: false },
          { title: "Ann", isCorrect: false }
        ]
      },
      {
        id: "questId2",
        number: 2,
        title: "What is your mather's name",
        answers: [
          { title: "Lucie", isCorrect: false },
          { title: "Alena", isCorrect: false },
          { title: "Marie", isCorrect: true }
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

    default:
      return state
  }
}
