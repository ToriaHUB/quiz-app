import React from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { routes } from "./routes"
import { useSelector } from "react-redux"
import { StoreState } from "../redux"
import { QuizT } from "../types"
import { Quizzes } from "../components/quizzes"
import { ActiveQuiz } from "../components/active-quiz"
import { Auth } from "../auth/auth"
import { QuizCreator } from "../quiz-creator/quiz-creator"
import { Home } from "../components/home"
import { FinishedQuiz } from "../components/finished-quiz"

type Props = {
  children?: never
}
export const Router: React.FC<Props> = () => {
  const quizzes = useSelector<StoreState, QuizT[]>(state => state.quizzes)

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route exact path={routes.quizzes}>
            <Quizzes quizzesData={quizzes} />
          </Route>
          <Route exact path={routes.activeQuiz} component={ActiveQuiz} />
          <Route exact path={routes.auth} component={Auth} />
          <Route exact path={routes.quizCreator} component={QuizCreator} />
          <Route exact path={routes.results} component={FinishedQuiz} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  )
}
