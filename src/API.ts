import { shuffleArray } from "./utils"
//! Types
import { Question, QuestionsState, Difficulty } from "./utils"

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
): Promise<QuestionsState[]> => {
  const endpoint: string = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
  const { results } = await (await fetch(endpoint)).json()

  return results.map((question: Question) => {
    const arrayToShuffle: string[] = [
      ...question.incorrect_answers,
      question.correct_answer,
    ]

    const answers = shuffleArray<string>(arrayToShuffle)

    return { ...question, answers }
  })
}
