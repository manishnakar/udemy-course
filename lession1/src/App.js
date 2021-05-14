import React from 'react'
import ErrorExample from './tutorial/1-useState/1-error-example.js'
import UseStateArray from './tutorial/1-useState/2-useState-array'
import UseEffectBasics from './tutorial/2-useEffect/1-useEffect-basics'
import GithubUsers from './tutorial/2-useEffect/2-useEffect-fetchData'

function App() {
    return (
        <div className="container">
            <h2>Advance react tutorial</h2>
            
            <GithubUsers />
        </div>
    )
}

export default App
