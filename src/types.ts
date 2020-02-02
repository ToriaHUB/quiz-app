export type QuizT = {
  id: string
  title: string
  questions: QuestionT[]
}
export type QuestionT = { id: string; number: number; title: string; answers: AnswerT[] }
export type AnswerT = { title: string; isCorrect: boolean }