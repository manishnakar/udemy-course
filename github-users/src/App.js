import React, {useState, useEffect} from 'react';


function App() {

  const githubusersUrl = 'https://api.github.com/users';
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchUsers = async () => {
    await fetch(githubusersUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setUsers(data)
        setIsLoading(false) 
      })
  }

  useEffect(()=> {

     //setIsLoading(true) 
     fetchUsers()
    
      

  }, [])

  return (
    <main>
    <section className="container">
      <h1 className="heading">Github Users</h1>
      <header> 
         <div className="search">
          <input type="text" className="searchTerm" placeholder="What are you looking for?" />
          <button type="submit" className="searchButton" >
            <i className="fa fa-search"></i>
        </button>
      </div>
      </header>
      {isLoading 
      ? <h2> Loading ...</h2>
      :  
      <section>
        
        <ul className="users">
          {users.map((user) => {
            return (<li>
              <img src={user.avatar_url} alt={user.login} />
              <div>
                <h4>{user.login}</h4>
                <a href={user.html_url}>Profile</a>
              </div>
            </li>)
          })}

        </ul>
        </section>
    }

    </section>
    </main>
  );
}

export default App;
