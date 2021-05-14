import React, {useState} from 'react'

const ErrorExample = () => {

    const [title,setTitle] = useState('Random text')
    const handleClick = () => {
        setTitle("Hellow World")
    }

    return (
        <div>
            <h2>{title}</h2>
            <button className="btn" onClick={handleClick}>Change Title</button>
        </div>
    )
}

export default ErrorExample
