import React from 'react'

export default function Buttons({counter, handleSetCounter}) {
    return (
        <div>
            <button className="btn" onClick={() => handleSetCounter(counter+1)}>inc</button>
            <button className="btn" onClick={() => handleSetCounter(counter-1)}>dec</button>
            <br />
            <button className="btn btn-reset" onClick={() => handleSetCounter(0)}>reset</button>
        </div>
    )
}
