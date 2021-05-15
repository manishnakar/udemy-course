import React , {useState, useEffect} from 'react'

const Question = ({id, title, info, collapse}) => {

    const [showInfo, setShowInfo] = useState(false)

    useEffect(()=> {

        collapse ? setShowInfo(collapse) : setShowInfo(collapse)

    }, [collapse])    

    return (
        <>
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={ () => { setShowInfo(!showInfo) }}>
                    {showInfo 
                    ? <i className="fa fa-minus" aria-hidden="true"></i> 
                    : <i className="fa fa-plus" aria-hidden="true"></i>
                    } 
                </button>
            </header>
            {showInfo && <p>{info}</p>}
            
        </article>
        
        </>
    )
}

export default Question
