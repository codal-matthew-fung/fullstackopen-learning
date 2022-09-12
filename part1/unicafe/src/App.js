import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad,
    average = ((good * 1) + (bad * -1)) / total,
    percentagePositive = (good / total) * 100;

  return (
    <table>
      <tbody>
        <tr>
          <th>Good</th><td>{good}</td>
        </tr>
        <tr>
          <th>Netural</th><td>{neutral}</td>
        </tr>
        <tr>
          <th>Bad</th><td>{bad}</td>
        </tr>
        <tr>
          <th>All</th><td>{total}</td>
        </tr>
        <tr>
          <th>Average</th><td>{average}</td>
        </tr>
        <tr>
          <th>Postive</th><td>{percentagePositive}</td>
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={setGood}>Good</button>
      <button onClick={setNeutral}>Netural</button>
      <button onClick={setBad}>Bad</button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App