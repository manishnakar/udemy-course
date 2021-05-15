import React, {useState} from 'react';
import data from './data';
import Question from './Question';



function App() {

  const [questions, setQuestions] = useState(data);
  const [collapse, setCollapse] = useState(false);

  const collapseAll = () => {    
    setCollapse(true)
  }

  const expandAll = () => {    
    setCollapse(false)
  }


  return (

    <>
    
    <div className="container">
    
      <div className="heading">
        <div className="search-container">
        <h3 style={{ textAlign: 'center', paddingTop: '10px' }} className="search-greeting">
            <div className="search-greeting__logo-container">
                <img src="https://www.gstatic.com/images/branding/product/1x/youtube_64dp.png" />
            </div>
            <div>How can we help you?</div>
        </h3>
        <form className="search__form">
        <input className="search__input"
          placeholder="Describe your issue"
          value=""
          autocomplete="off"
          spellcheck="false" type="search"
          style={{outline: 'none'}}
        />      
        <button className="search__search-button"><i className="search__clear-icon fa fa-search" aria-hidden="true"></i></button>
        </form>        
        </div>
        </div>
  
    <main>              
      <aside>
          <h3>Question and Answer about login</h3>
        </aside>
        <section className="info">
          { data.map( (question) => {
             return  <Question  key={question.id}   {...question} collapse={collapse} />
          })

          }
          <button className="btn-primary" onClick={collapseAll}>+ All</button>
          <button className="btn-primary" onClick={expandAll}>- All</button>
    </section>
        
    </main>
     </div>
    </>
  );
}

export default App;
