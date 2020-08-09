import React, { Component } from 'react';
import './display.css'

class AddPerson extends Component{
    state = {
        name: null,
        description: null,
        age: null
    }

    handleChange = (e) => {
        
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        document.getElementsByClassName("form-div")[0].style.display="none";
        alert("new employee added")
        // document.getElementsByClassName("overlay")[0].style.height="0%";
        //       document.getElementsByClassName("overlay")[0].style.width="0%";
        this.props.addPerson(this.state);

    }
    crossHandler=()=>{
        document.getElementsByClassName("form-div")[0].style.display="none";

    }

    render(){
        return(
            <div className='form-div' id='entryform'>
                <h1>Enter Details <span style={{float:"right",marginRight:"12px"}} onClick={this.crossHandler}>&#10006;</span></h1>
                <form className='person' onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name :- </label>
                    <input type='text' id='name' placeholder='Enter name..' onChange={this.handleChange} required></input> <br></br>
                    <label htmlFor='description'>Description :- </label>
                    <input type='text' id='description' placeholder='Enter description..' onChange={this.handleChange} required></input> <br></br>
                    <label htmlFor='age'>Age :- </label>
                    <input type='number' id='age' placeholder='Enter age..' onChange={this.handleChange} required></input> <br/><br/><br/>
                    <input type='submit' value='Add person'></input>
                </form>
            </div>
        )
    }
}

export default AddPerson;