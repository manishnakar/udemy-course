import React, {useState , useEffect} from 'react'



const githubUrl = 'https://api.github.com/users';

const GithubUsers = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {    
        console.log('fetching')    
        setLoading(true)        
        const response = await fetch(githubUrl)
        const data = await response.json()
        setUsers(data)
        setLoading(false)
        console.log('completed')        
    }

    useEffect(() => {

        fetchUsers()

    }, [])


    return (
        <>
        <h1 className="heading">Github Users</h1>

        { loading
        ? <h2> loading...</h2> 
        : 
        <div>
            <button className="btn" onClick={fetchUsers}> refresh</button>
            <ul className="users">
            {
            users.map((user) => {

            return (
                <li className="item" key={user.id}>
                    <img src={user.avatar_url} alt={user.login} />
                    <div>
                        <h4>{user.login}</h4>
                        <a href={user.html_url}>profile</a>
                    </div>

                </li>
            )
        })
        }

        </ul>  
          
        </div>
        }        
                            
        </>
    )
}

export default GithubUsers
