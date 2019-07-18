import React from 'react'

const PersonForm = ({submit, name, number, changeName, changeNumber}) => {
    return (
        <form onSubmit={submit}>
            <div>
            name: 
            <input
                value={name}
                onChange={changeName}
            />
            </div>
            <div>
            number:
            <input 
                value={number}
                onChange={changeNumber}
            />
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm