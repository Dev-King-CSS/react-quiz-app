export const shuffleArray = <T>(array: T[]) =>
  [...array].sort(() => Math.random() - 0.5)

export type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
}

export type Question = {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type QuestionsState = Question & { answers: string[] }

export type ButtonWrapperProps = {
  correct: boolean
  userClicked: boolean
}
