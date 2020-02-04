import { combineReducers, createStore } from "redux"
import { quizzesReducer } from "./redusers/quizzes-reducer"
import { activeQuizReducer } from "./redusers/active-quiz-reducer"
import { QuizT } from "../types"
import { questionResultsReducer, QuizResultsT } from "./redusers/quiz-rezults"

const rootReducer = combineReducers({
  quizzes: quizzesReducer,
  activeQuiz: activeQuizReducer,
  quizResults: questionResultsReducer
})

export type StoreState = {
  quizzes: QuizT[]
  activeQuiz: QuizT
  quizResults: QuizResultsT
}

export const store = createStore(rootReducer)
