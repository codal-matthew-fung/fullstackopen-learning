import { useState } from 'react'
const StatisticsLine = (props) => {
  return (
    <tr>
      <th>{props.label}</th><td>{props.value}</td>
    </tr>
  )
}
const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad,
    average = ((good * 1) + (bad * -1)) / total,
    percentagePositive = (good / total) * 100;

  return (
    <table>
      <tbody>
        <StatisticsLine label="Good" value={good} />
        <StatisticsLine label="Neutral" value={neutral} />
        <StatisticsLine label="Bad" value={bad} />
        <StatisticsLine label="Total" value={total} />
        <StatisticsLine label="Average" value={average} />
        <StatisticsLine label="Positive" value={percentagePositive} />
      </tbody>
    </table>
  )
}
const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let statsComponent;
  if (good + neutral + bad > 0) {
    statsComponent = <Statistics good={good} neutral={neutral} bad={bad} />
  }
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />
      {statsComponent}

    </div>
  )
}

export default App