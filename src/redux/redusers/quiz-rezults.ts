import { Reducer } from "redux"
import { ActionType } from "../types"
import { QuestionResultT } from "../../types"

export type QuizResultsT = QuestionResultT[]
export const initialQuizResultsState: QuizResultsT = []

export const questionResultsReducer: Reducer<QuizResultsT, ActionType<QuestionResultT>> = (
  state = initialQuizResultsState,
  action
) => {
  switch (action.type) {
    case "ADD_QUESTION_RESULTS":
      if (action.data) {
        return [...state, action.data]
      }
      console.error("Question result data is empty")
      return state
    case "CLEAR_RESULTS":
      return []
    default:
      return state
  }
}
