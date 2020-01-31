export type QuizT = {
  title: string
  questions: QuestionT[]
}
export type QuestionT = { number: number; title: string; answers: AnswerT[] }
export type AnswerT = { title: string; isCorrect: boolean }
