import React,{Component} from 'react';
import Display from './display'


class Left extends Component{
    addHandler=()=>{
              document.getElementsByClassName("form-div")[0].style.display="block";
            //   document.getElementsByClassName("overlay")[0].style.height="500vh";
            //   document.getElementsByClassName("overlay")[0].style.width="100%";
            //   document.getElementsByClassName("overlay")[0].style.background="lemonchiffon";
    }
    
    render(){
        return (
            <div className="overlay" className="let">
               <u> <h1 style={{textAlign:"center",textDecoration:"dashed"}}>Employess Dashboard</h1></u>
                <p style={{fontWeight: "700",fontSize:"25px"}}>Total Employees :- {this.props.people.length}</p>
                <p style={{fontWeight: "700",fontSize: "25px"}}>Employees Available here :- {this.props.available}</p>


               
                <button onClick={this.addHandler}>ADD Employess</button>
            </div>

        );
    }
}
export default Left;