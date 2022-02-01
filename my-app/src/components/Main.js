import { Component } from 'react';
import Home from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render(){
        return (
            <div>
                <Switch>
                    <Route path='/home'>
                        <Home/>
                    </Route>
                   
      

                    <Redirect to='/home'/>
                </Switch>
            </div>
        )
    }
}

export default Main;