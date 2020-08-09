import React from 'react';
import "./display.css"

function Display(props){

    
    const { people, deletePerson } = props;
    const {iord} = props;
    
   
    const peopleList = people.map( (person) => {
        return(
            <div className="person" key={person.id}>
                <h1> Name: {person.name}</h1>
                <p> Description: {person.description}</p>
                <p>Age: {person.age}</p>
                <input type="checkbox" id={person.id} onClick={radioHandler.bind(this,person.id)}/>
                <label for="available" style={{fontSize:20}}>Available</label><br />


                <button onClick= { () => deletePerson(person.id) }>Delete Me!!!</button>
            </div>
        );
    })
    function radioHandler(id){
        if(document.getElementById(id).checked===true)
        {
            iord(1);
        }
        else if(document.getElementById(id).checked===false)
        {
            iord(0)
        }
        
    }
    
    return(
        <div className="display">
            { peopleList }
        </div>
    );
}

export default Display;