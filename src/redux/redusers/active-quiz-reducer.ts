import { QuizT } from "../../types"
import { Reducer } from "redux"
import { ActionType } from "../types"

export type ActiveQuizState =  null | QuizT


 const initialActiveQuizState:ActiveQuizState={id: "ghgngh", questions:[
      {
        id: "questId1",
        number: 1,
        title: "What is your favourite color",
        answers: [
          { id: "1",title: "red", isCorrect: true },
          { id: "2",title: "blue", isCorrect: false },
          { id: "3",title: "green", isCorrect: false }
        ]
      },
      {
        id: "questId2",
        number: 2,
        title: "What is your dog favourite color",
        answers: [
          { id: "4",title: "red", isCorrect: false },
          { id: "5",title: "blue", isCorrect: false },
          { id: "6",title: "green", isCorrect: true }
        ]
      }
    ], title: "Test"}


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
