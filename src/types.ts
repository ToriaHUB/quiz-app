export type QuizT = {
  id: string
  title: string
  questions: QuestionT[]
}
export type QuestionT = { id: string; number: number; title: string; answers: AnswerT[] }
export type AnswerT = { id: string; title: string; isCorrect: boolean }

export type QuestionResultT = { questionNumber: number; questionTitle: string; questionId: string; isCorrect: boolean }
