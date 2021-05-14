import React, {useState} from 'react'


const data = [
    {id: 1, name: 'john'},
    {id: 2, name: 'peter'},
    {id: 3, name: 'susan'},
    {id: 4, name: 'anna'},
]


const UseStateArray = () => {

     const [people, setPeople] = useState(data)   
     const [newPerson, setNewPerson] = useState('')

    const removeItem = (id) => {

        let newPeople = people.filter((person) => person.id !== id)

        setPeople(newPeople)
    }

    const addMe = () => {
        const newID = people.length+ 1;
        const newPersonArr = {id: newID, name: newPerson}
        console.log(newPersonArr)
        const newList = [...people]        
        newList.push(newPersonArr)
       setPeople(newList)
    }

    return (
        <>

        <input className="form-control" type="text" onChange={(e) => setNewPerson(e.target.value)} />
        <button className="btn" onClick={() => addMe() } >+ </button>


         { people.map((person) => {
              
              const {id, name} = person


              return (
              <div className="item" key={id}>
                  
                  <h4 >{name}</h4>
                  <button className="btn" onClick={() => removeItem(id)  }>X</button>
                  </div>              
              )

          }) 
          }

          <button className="btn" onClick={() => setPeople([])}>Clear Items</button>
        </>
    )
}

export default UseStateArray
