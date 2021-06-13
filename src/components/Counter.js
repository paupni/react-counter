import React from 'react'

export default function Counter({counter, fontSize, subtitle}) {
    return (
        <div>
            <h1 className="digit" style={{fontSize: fontSize}}>{counter}</h1>
            <p>{subtitle}</p>
        </div>
    )
}
