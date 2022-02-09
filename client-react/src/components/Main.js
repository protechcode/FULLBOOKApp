import { Component } from 'react';
import Home from './Home';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//import Cart from './Cart';
import Orders from './Order';
import Shop from './Shop';
import UpdateUser from './UpdateUser'

class Main extends Component {
    render(){
        return (
            <div>
                <Switch>
                    <Route path='/home'>
                        <Home/>
                    </Route>
                    <Route path='/shop'>
                        <Shop/>
                    </Route>  
        
                    <Route path='/orders'>
                        <Orders/>
                    </Route>
                    <Redirect to='/home'/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect()(Main));