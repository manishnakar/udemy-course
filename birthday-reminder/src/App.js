import React, {useState} from 'react'
import './index.css'
import data from './data'
import List from './List'


function App() {

    const [birthdays, setBirthdays] = useState(data) ;

    const handleClear = (e) => {

        setBirthdays([])
    }

    return (
        <main>
        <section className="container">
           <h3> { birthdays.length } Birthdays today </h3>

            { birthdays.map((birthday) => {
                return <List {...birthday} />
            })}
            
            <button onClick={handleClear} className="btn">Clear All</button>
        </section>
        </main>
    )
}

export default App
