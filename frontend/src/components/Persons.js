import React from 'react'

const Persons = ({search, remove}) => {
    const numbers = () => search.map(person => 
        <div key={person.name}>
            <p>{person.name}: {person.number}</p>
            <button onClick={remove} id={person.id}>delete</button>
        </div>
    )

    return (
        numbers()
    )
}

export default Persons 