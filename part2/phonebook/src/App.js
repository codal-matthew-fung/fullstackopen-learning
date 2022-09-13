import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault();
    const personsCopy = [...persons];
    const newPerson = { name: newName };

    if (personsCopy.some(person => person.name == newName)) {
      window.alert(`${newPerson.name} is already added to the phonebook.`);
      return;
    }

    personsCopy.push(newPerson);
    setPersons(personsCopy)
  }

  const handleNameChange = (event) => {
    setNewName(event.currentTarget.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
    </div>
  )
}

export default App