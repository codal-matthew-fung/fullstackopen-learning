import { useState } from 'react'
const People = (props) => {

  return (
    <>
      {props.persons.map(person => <p key={person.name}>{person.name} - {person.number}</p>)}
    </>
  )
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '01234' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    const personsCopy = [...persons];
    const newPerson = { name: newName, number: newNumber };

    if (personsCopy.some(person => person.name === newName)) {
      window.alert(`${newPerson.name} is already added to the phonebook.`);
      return;
    }

    personsCopy.push(newPerson);
    setPersons(personsCopy)
  }

  const handleNameChange = (event) => {
    setNewName(event.currentTarget.value);
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.currentTarget.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <People persons={persons} />
    </div>
  )
}

export default App