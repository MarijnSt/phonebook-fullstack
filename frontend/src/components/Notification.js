import React from 'react'

const Notification = ({message}) => {
    if (message === null) {
        return null
    } else if (message.includes('Added') || message.includes('Updated')) {
        return (
            <div className="succes">
                {message}
            </div>
        )
    }

    return (
        <div className="error">
            {message}
        </div>
    )
}

export default Notification