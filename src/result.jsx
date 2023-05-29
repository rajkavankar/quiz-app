import { useState } from "react"
import Question from "./data/Questions"

const Result = ({ answers }) => {
  const [question, setQuestion] = useState(Question)
  let points = Object.values(answers)

  console.log(points)
  console.log(answers)
  return (
    <div className='question-container'>
      <table>
        <caption>
          <h4>Result</h4>
        </caption>
        <thead>
          <tr>
            <th>Questions</th>
            <th>submitted ans</th>
            <th>correct ans</th>
            <th>correct </th>
            <th>Point </th>
          </tr>
        </thead>
        <tbody>
          {question.map((question) => (
            <tr key={question.id}>
              <td key={question.id}>{question.question} </td>

              <td>{answers[question.id]} </td>
              {question.answers.map(
                (ans) => ans.isCorrect && <td key={ans.id}>{ans.value} </td>
              )}
              {question.answers.map(
                (ans) =>
                  ans.isCorrect && (
                    <td key={ans.id}>
                      {ans.value === answers[question.id] ? "yes" : "no"}
                    </td>
                  )
              )}

              <td>0 </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Result
