import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link,Redirect} from "react-router-dom";

class RSVPArray extends  Component{

    constructor(props){
        super(props);
    }

    editRSVP = (e) => {
        e.preventDefault();
        fetch('/', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                price: e.target.price.value,
                rsvp_going: e.target.quantity.value,
            }),
        })
            .then(() => this.props.updateDatabaseData())
            .then(() => this.props.getRidOfEdit());

    };



    deleteRSVP=(e)=>{
        console.log(e.target);
        fetch('/delete/', {
            method: 'DELETE',
            headers: {
                'Accept': "application/json",
                'Content-type': 'application/json',
            },
            body: JSON.stringify({_id:e.target.name}),
        })

    };




    render() {
        const mapped=this.props.array.map((ele)=>
        {

            return(
                <div>
                <h2> Name:{ele.rsvp_person}</h2>
                    <h2> Coming to Event:{String(ele.rsvp_going)}</h2>
                    {/*<Link to='/edit' name={ele._id} onClick={this.UpdateRSVP}>Update</Link>*/}
                    {/*<button name={ele._id} onClick={this.deleteRSVP}>Delete</button>*/}
                </div>
            )
        });


        return(
            <div>
                {mapped}

            </div>
        )
    }
}

export default RSVPArray;