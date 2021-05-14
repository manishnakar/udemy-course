import React , {useEffect, useState} from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = "http://localhost:5000/tours";

//https://secure.rezserver.com/hotels/results/?query=Mumbai%2C+India&refid=2050&city_id=800020960&check_in=&check_out=&rooms=1&adults=2&currency=INR

function App() {

  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  
  const fetchTours = async () => { 
      setLoading(true)
      try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.hotels)
        setTours(data.hotels)
        setLoading(false)

        
      }catch (err) {
         console.error(err) 
        setLoading(false)
      }

  }

  useEffect(() => {

    fetchTours()

  }, [])


  if(loading)  
    return (<main><Loading /></main>) 
  else 
  return (
    <main>      
       <Tours tours={tours}/>
          
    </main>
    
  );
}

export default App;
