import { Component } from 'react';
import Home from './Home';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import UpdateUser from './admin/usersCRUD/UpdateUser';
import Orders from './Order';
import Admin from './admin/Admin';
import Shop from './Shop';
import Profile from './Profile';
import AddUser from './admin/usersCRUD/addUser';
import ItemList from './admin/itemsCRUD/ItemListComponent';
import ItemsCrud from './admin/itemsCRUD/ItemsCrudComponent';
import UpdateItem from './admin/itemsCRUD/UpdateItemComponent';
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
                    <Route path='/profile'>
                        <Profile/>
                    </Route>  
                    <Route path='/orders'>
                        <Orders/>
                    </Route>
                    <Route path='/admin'>
                        <Admin/>
                    </Route> 
                    <Route path='/adduser'>
                        <AddUser/>
                    </Route> 
                    <Route path='/upduser/:id'>
                        <UpdateUser/>
                    </Route> 
                    <Route path='/upditem/:id'>
                        <UpdateItem/>
                    </Route> 
                    <Route path='/itemscrud'>
                        <ItemsCrud/>
                    </Route> 
                    <Redirect to='/home'/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect()(Main));

