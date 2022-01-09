import { useState } from "react"
import { fetchQuizQuestions } from "./API"
//! Component
import { QuestionCard } from "./component/QuestionCard"
//! Types
import { AnswerObject, Difficulty, QuestionsState } from "./utils"
//! Styles
import { GlobalStyle, Wrapper } from "./styles/App.styles"

const TOTAL_QUESTIONS: number = 10

const App: React.FC<{}> = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)
  const [questions, setQuestions] = useState<QuestionsState[]>([])
  const [number, setNumber] = useState<number>(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState<number>(0)
  const [gameOver, setGameOver] = useState<boolean>(true)

  const startGame = async (): Promise<void> => {
    setGameOver(false)
    setLoading(true)
    const newQuestions: QuestionsState[] = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    )
    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }

  const checkAnswer = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if (gameOver) return

    const answer: string = e.currentTarget.value

    const isCorrectAnswer: boolean =
      questions[number].correct_answer === answer

    if (isCorrectAnswer) setScore(prevScore => prevScore + 1)

    const answerObject = {
      question: questions[number].question,
      answer,
      correct: isCorrectAnswer,
      correctAnswer: questions[number].correct_answer,
    }
    setUserAnswers(prev => [...prev, answerObject])
  }

  const nextQuestion = (): void => {
    const nextQuestion: number = number + 1

    nextQuestion === TOTAL_QUESTIONS
      ? setGameOver(true)
      : setNumber(nextQuestion)
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>REACT QUIZ</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startGame}>
            Start
          </button>
        ) : null}
        {!gameOver && <p className="score">Score : {score}</p>}
        {loading && <p>Loading...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 && (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          )}
      </Wrapper>
    </>
  )
}

export { App }
