import React from 'react'

const Filter = ({filter, change}) => {
    return (
    <form>
        <p>Filter shown with</p>
        <input
          value={filter}
          onChange={change}
        />
    </form>
    )
}

export default Filter;