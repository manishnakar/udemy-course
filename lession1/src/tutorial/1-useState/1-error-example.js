import React, {useState} from 'react'


//use
//Component name must be in uppercase
// must be in funcation/component body
// cannot call conditionally


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
