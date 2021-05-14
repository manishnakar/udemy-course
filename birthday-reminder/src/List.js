import React from 'react'

const List = ({id, name, age, image}) => {
    return (
        <article key={id} className='person'>
            <img src={image} alt="" />
            <div>
        <h4> {name} </h4>
        <p> {age} years</p>            
        </div>
        </article>
    )
}

export default List
