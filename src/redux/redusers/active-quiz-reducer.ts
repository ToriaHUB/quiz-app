import { QuizT } from "../../types"
import { Reducer } from "redux"
import { ActionType } from "../types"

export type ActiveQuizState = null | QuizT


 const initialActiveQuizState:ActiveQuizState = null


export const activeQuizReducer: Reducer<ActiveQuizState,ActionType<QuizT>>=(state=initialActiveQuizState, action)=>{
  switch (action.type) {
    case "SET_ACTIVE_QUIZ":
      if(action.data){
        return {...state, ...action.data}
      }
      console.error("Quizzes data is empty")
      return state
    case "CLEAR_ACTIVE_QUIZ":
      return null
    default:
      return state

  }
}
