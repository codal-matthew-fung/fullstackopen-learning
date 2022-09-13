import { useState } from 'react'

const People = (props) => {
  return (
    <>
      {props.persons.map(person => <p key={person.name}>{person.name} - {person.number}</p>)}
    </>
  )
}

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <p>filter people: <input value={filter} onChange={handleFilterChange} /> </p>
  )
}

const AddPersonForm = (props) => (
  <form>
    <div>
      name: <input value={props.newName} onChange={props.handleNameChange} />
    </div>
    <div>
      number: <input value={props.newNumber} onChange={props.handleNumberChange} />
    </div>
    <div>
      <button type="submit" onClick={props.addPerson}>add</button>
    </div>
  </form>
)

const App = () => {
  const initialPersonsState = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]
  const [persons, setPersons] = useState(initialPersonsState)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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

  const filterPeople = (people) => {
    const filteredPeople = people.filter(person => person.name.includes(filter));
    return setPersons(filteredPeople)
  }

  const handleNameChange = (event) => {
    setNewName(event.currentTarget.value);
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.currentTarget.value);
  }
  const handleFilterChange = (event) => {
    // If the input is empty, reset state to initialState
    if (event.currentTarget.value.length === 0) {
      // Clear FilterState
      setFilter('')
      // Reset persons to initial state
      setPersons(initialPersonsState);
      return;
    }
    setFilter(event.currentTarget.value);
    const personsCopy = [...persons]
    filterPeople(personsCopy)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <AddPersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <People persons={persons} />
    </div>
  )
}

export default App