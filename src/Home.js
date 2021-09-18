import React, {Component} from 'react';
import './Home.css';
import Header from './components/Header';
import Myspot from './components/Myspot';
import Finder from './components/Finder';
import Voter from './components/Voter';
import Error from "./components/Error"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Home extends Component {
    render() {
        return (

             <main>
                 <Navbar />
           
            <Switch>
            {/* <Route path='/' component={Home} />   for app (home here), header == home ac to my page*/}
            <Route exact path="/" component={Header} /> {/* main page - my spot*/}
            <Route exact path="/myspot" component={Myspot} /> {/* second page - find spot*/}
            <Route exact path="/finder" component={Finder} /> {/* second page - find spot*/}
            <Route exact path="/voter" component={Voter} /> {/* third page - vote spot*/}
            <Route component={Error} />
                
            </Switch>
          
        </main>
        )
    }
}

export default Home;