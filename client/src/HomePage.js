import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import RSVPArray from "./RSVPArray";
import NewRSVP from "./NewRSVP";


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {rsvpdata: []}

    }

    componentDidMount() {
        fetch('/rsvp')
            .then(grabData => {
                return grabData.json()
            })

            .then(jsonData => {
                this.setState({rsvpdata: jsonData})
            })

    };


    render() {
        return (
            <Router>
            <div>
                <nav>
                <Link to='/' exact>Home</Link>
                    <Link to='/add'> Create a new RSVP</Link>
                    <Route path='/add' component={NewRSVP}/>
                    <h1>Received RSVP</h1>
                    <RSVPArray key={this.state.rsvpdata._id} array={this.state.rsvpdata}/>

                </nav>
            </div>
            </Router>
        )
    }
}


export default HomePage;