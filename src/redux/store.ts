import { combineReducers, createStore } from "redux"
import { quizzesReducer } from "./redusers/quizzes-reducer"
import { activeQuizReducer } from "./redusers/active-quiz-reducer"
import { QuizT } from "../types"

const rootReducer = combineReducers({ quizzes: quizzesReducer, activeQuiz: activeQuizReducer })

export type StoreState = {
  quizzes: QuizT[]
  activeQuiz: QuizT
}

export const store = createStore(rootReducer)
