import { useState } from "react"
import Questions from "./data/Questions"
import Result from "./result"
import "./App.css"

function App() {
  const [questions, setQuestions] = useState(Questions)
  const [count, setCount] = useState(1)
  const [answers, setAnswers] = useState([])

  const onClick = () => {
    setCount(count + 1)
    console.log(answers)
  }

  const onChange = (e) => {
    setAnswers((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  return (
    <div>
      {count > questions.length ? (
        <Result answers={answers} />
      ) : (
        <main className='question-container'>
          {questions.map(
            (question) =>
              count === question.id && (
                <div key={question.id}>
                  <section className='question'>{question.question}</section>
                  <section className='answers'>
                    <ul>
                      {question.answers.map((answer, i) => (
                        <li key={i}>
                          <input
                            onChange={onChange}
                            type='radio'
                            name={question.id}
                            id={answer.id}
                            value={answer.value}
                          />
                          <label htmlFor={answer.id}> {answer.title}</label>
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section className='section-button'>
                    <button onClick={onClick}>Next</button>
                  </section>
                </div>
              )
          )}
        </main>
      )}
    </div>
  )
}

export default App
