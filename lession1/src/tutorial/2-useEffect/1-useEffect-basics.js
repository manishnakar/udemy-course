import React , {useState, useEffect} from 'react'

const UseEffectBasics = () => {

    const [size, setSize] = useState(window.innerWidth)

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', checkSize)
        return () => {
            window.removeEventListener('resize', checkSize)
        }
        
        
    })    

    return (
        <div>
            <h2>UseEffect basics </h2>
            <h2>{size} px</h2>

        </div>
    )
}

export default UseEffectBasics
