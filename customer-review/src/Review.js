import React, { useState } from 'react'
import people from './data'


const Review = () => {

    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index]; 
    
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            if(newIndex < 0) return people.length -1            
            return newIndex
        })
    }

    const nextPerson = () => {
        setIndex( (index) => {
            let newIndex = index + 1;
            if( newIndex > people.length -1) { return 0 }
            return newIndex            
        })
    }

    const randomPerson = () => {
        
        setIndex(() => {
           let newIndex = Math.floor(Math.random() * people.length);      
           return newIndex
        })
    }

    return (
        <article className="review">

            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <i className="fa fa-quote-right" aria-hidden="true"></i>
                </span>
            </div>
            <h4 className="author">
                {name}
            </h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={ prevPerson}><i className="fa fa-chevron-left" aria-hidden="true"></i></button>
                <button className="next-btn" onClick={ nextPerson}><i className="fa fa-chevron-right" aria-hidden="true"></i></button>               
            </div>
             <button className="prev-btn" onClick={randomPerson}>Surprise me</button>
            
        </article>
    )
}

export default Review
