import React, {useState } from 'react'

const Tour = ({thumbnail, name, review_rating, star_rating, address_display, review_rating_desc, price_display}) => {
    return (
        <article className="single-tour">
            <img src={thumbnail} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <i className='fa fa-heart-o'></i>                                        
                </div>
                <p>{address_display}</p>
                <p><strong>{review_rating_desc}</strong> {review_rating}/10 &nbsp;  {star_rating} ratings</p>
                <button className="delete-btn" >Add to Favourite</button>
            </footer>
        </article>
    )
}

export default Tour
