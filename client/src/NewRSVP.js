import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link,Redirect} from "react-router-dom";

class NewRSVP extends  Component {
    constructor(props) {
        super(props);
        this.state = {go_home: false}

    }

    create = (e) => {
        e.preventDefault();

        fetch('/rsvp',
            {
                method: 'POST',   //looks for a post request
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({   //grabs data from body and makes it a string
                    rsvp_person: e.target.person.value,
                    rsvp_going: e.target.coming.value,

                }),
            }
        );
        this.setState({go_home: true})
        ;


    };


    render() {
        if (this.state.go_home ===true) {
            return (
                <Redirect to='/' exact/>
            )
        }
        else {


            return (
                <form onSubmit={this.create}>
                    <label htmlFor='person'>Person</label>
                    <br/>
                    <input type='text' id='person' name='person'/>
                    <p></p>
                    <label htmlFor='coming'>Arriving</label>
                    <br/>
                    <input type='text' id='comming' name='coming'/>
                    <p></p>

                    <button>
                        Submit
                    </button>
                </form>
            )
        }
    }
}

export default NewRSVP;